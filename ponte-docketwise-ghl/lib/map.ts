/**
 * De/para entre o payload do webhook do GHL e o contato do Docketwise.
 *
 * O corpo do Custom Webhook do GHL muda conforme o gatilho e conforme o que a
 * pessoa configurou no workflow: a mesma informação chega ora como
 * `first_name`, ora como `firstName`, ora só dentro de `full_name`. Em vez de
 * fixar um formato e quebrar quando o workflow for editado, aqui a leitura
 * aceita as variações conhecidas.
 *
 * O que NÃO atravessa, de propósito: nada de documento de imigração indo do
 * marketing para o jurídico. A-Number, passaporte e ELIS nascem no Docketwise,
 * preenchidos pelo escritório — não num formulário de captação.
 */

export interface PayloadGhl {
  [k: string]: unknown
}

export interface ContatoNormalizado {
  contactIdGhl: string | null
  primeiroNome: string
  sobrenome: string
  email: string | null
  telefone: string | null
  endereco: string | null
  cidade: string | null
  estado: string | null
  cep: string | null
  pais: string | null
  dataNascimento: string | null
  empresa: string | null
  origem: string | null
  tags: string[]
}

function texto(payload: PayloadGhl, ...chaves: string[]): string | null {
  for (const chave of chaves) {
    const valor = payload[chave]
    if (typeof valor === 'string' && valor.trim()) return valor.trim()
    if (typeof valor === 'number') return String(valor)
  }
  return null
}

export function separarNome(completo: string): { primeiroNome: string; sobrenome: string } {
  const partes = completo.trim().split(/\s+/).filter(Boolean)
  if (partes.length === 0) return { primeiroNome: '', sobrenome: '' }
  if (partes.length === 1) return { primeiroNome: partes[0]!, sobrenome: '' }
  return { primeiroNome: partes[0]!, sobrenome: partes.slice(1).join(' ') }
}

/**
 * Data para o formato do Docketwise (mm/dd/yyyy).
 * Aceita ISO (1990-05-21), americano (05/21/1990) e brasileiro (21/05/1990) —
 * este último só quando o dia é maior que 12, porque 03/04/1990 é ambíguo e
 * chutar errado envelhece ou rejuvenesce o cliente em meses.
 */
export function paraDataDocketwise(bruta: string | null): string | null {
  if (!bruta) return null
  const valor = bruta.trim()

  const iso = valor.match(/^(\d{4})-(\d{2})-(\d{2})/)
  if (iso) return `${iso[2]}/${iso[3]}/${iso[1]}`

  const barras = valor.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
  if (barras) {
    const a = Number(barras[1])
    const b = Number(barras[2])
    const ano = barras[3]!
    // primeiro campo > 12 só pode ser dia: veio em dd/mm/yyyy
    if (a > 12 && b <= 12) return `${pad(b)}/${pad(a)}/${ano}`
    return `${pad(a)}/${pad(b)}/${ano}`
  }

  return null
}

function pad(n: number): string {
  return String(n).padStart(2, '0')
}

/** Telefone em E.164. O GHL já costuma mandar com "+"; quando não, assume BR. */
export function paraE164(bruto: string | null, ddiPadrao = '55'): string | null {
  if (!bruto) return null
  const limpo = bruto.trim()
  if (limpo.startsWith('+')) {
    const digitos = limpo.slice(1).replace(/\D/g, '')
    return digitos ? `+${digitos}` : null
  }
  const digitos = limpo.replace(/\D/g, '')
  if (!digitos) return null
  if (digitos.startsWith(ddiPadrao) && digitos.length >= 12) return `+${digitos}`
  return `+${ddiPadrao}${digitos}`
}

export function normalizarPayloadGhl(payload: PayloadGhl): ContatoNormalizado {
  const primeiro = texto(payload, 'first_name', 'firstName')
  const ultimo = texto(payload, 'last_name', 'lastName')
  const completo = texto(payload, 'full_name', 'fullName', 'name', 'contact_name')

  let primeiroNome = primeiro ?? ''
  let sobrenome = ultimo ?? ''
  // Alguns gatilhos mandam só o nome cheio; o Docketwise exige os dois campos
  if ((!primeiroNome || !sobrenome) && completo) {
    const separado = separarNome(completo)
    if (!primeiroNome) primeiroNome = separado.primeiroNome
    if (!sobrenome) sobrenome = separado.sobrenome
  }

  const tagsBrutas = payload['tags']
  const tags = Array.isArray(tagsBrutas)
    ? tagsBrutas.filter((t): t is string => typeof t === 'string')
    : typeof tagsBrutas === 'string'
      ? tagsBrutas.split(',').map((t) => t.trim()).filter(Boolean)
      : []

  return {
    contactIdGhl: texto(payload, 'contact_id', 'contactId', 'id'),
    primeiroNome,
    sobrenome,
    email: texto(payload, 'email')?.toLowerCase() ?? null,
    telefone: paraE164(texto(payload, 'phone', 'phone_number')),
    endereco: texto(payload, 'address1', 'address', 'full_address'),
    cidade: texto(payload, 'city'),
    estado: texto(payload, 'state'),
    cep: texto(payload, 'postal_code', 'postalCode', 'zip'),
    pais: texto(payload, 'country'),
    dataNascimento: paraDataDocketwise(texto(payload, 'date_of_birth', 'dateOfBirth', 'dob')),
    empresa: texto(payload, 'company_name', 'companyName', 'business_name'),
    origem: texto(payload, 'source', 'lead_source'),
    tags,
  }
}

/** Contato normalizado -> corpo do POST/PUT de contato do Docketwise. */
export function paraContatoDocketwise(c: ContatoNormalizado): Record<string, unknown> {
  const dados: Record<string, unknown> = {
    first_name: c.primeiroNome,
    last_name: c.sobrenome,
  }

  if (c.email) dados.email = c.email
  if (c.empresa) dados.company_name = c.empresa
  if (c.dataNascimento) dados.date_of_birth = c.dataNascimento
  if (c.endereco) dados.street_number_and_name = c.endereco
  if (c.cidade) dados.city = c.cidade
  if (c.estado) dados.state = c.estado
  if (c.pais) dados.country = c.pais
  if (c.cep) {
    // EUA usa zip_code; o resto do mundo, postal_code
    const ehEUA = !c.pais || /^(us|usa|united states)$/i.test(c.pais)
    if (ehEUA) dados.zip_code = c.cep
    else dados.postal_code = c.cep
  }

  return dados
}

export interface Validacao {
  ok: boolean
  faltando: string[]
}

/** O Docketwise recusa contato sem nome, sobrenome e e-mail. */
export function validarParaDocketwise(c: ContatoNormalizado): Validacao {
  const faltando: string[] = []
  if (!c.primeiroNome) faltando.push('primeiro nome')
  if (!c.sobrenome) faltando.push('sobrenome')
  if (!c.email) faltando.push('e-mail')
  return { ok: faltando.length === 0, faltando }
}
