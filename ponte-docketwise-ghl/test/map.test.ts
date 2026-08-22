import {
  separarNome, paraDataDocketwise, paraE164,
  normalizarPayloadGhl, paraContatoDocketwise, validarParaDocketwise,
} from '../lib/map.ts'

const casos: Array<[string, unknown, unknown]> = [
  ['nome cheio', JSON.stringify(separarNome('Maria da Silva Souza')), JSON.stringify({primeiroNome:'Maria',sobrenome:'da Silva Souza'})],
  ['nome unico', JSON.stringify(separarNome('Maria')), JSON.stringify({primeiroNome:'Maria',sobrenome:''})],
  ['data ISO', paraDataDocketwise('1990-05-21'), '05/21/1990'],
  ['data ISO com hora', paraDataDocketwise('1990-05-21T00:00:00Z'), '05/21/1990'],
  ['data US', paraDataDocketwise('05/21/1990'), '05/21/1990'],
  ['data BR inequivoca', paraDataDocketwise('21/05/1990'), '05/21/1990'],
  ['data ambigua fica US', paraDataDocketwise('03/04/1990'), '03/04/1990'],
  ['data invalida', paraDataDocketwise('ontem'), null],
  ['fone com +', paraE164('+1 (508) 555-0100'), '+15085550100'],
  ['fone BR sem DDI', paraE164('(98) 99999-8888'), '+5598999998888'],
  ['fone BR com DDI', paraE164('5598999998888'), '+5598999998888'],
  ['fone vazio', paraE164(''), null],
]

// payload real do Custom Webhook do GHL, versao snake_case
const p1 = normalizarPayloadGhl({
  contact_id: 'abc123', first_name: 'Ana', last_name: 'Pereira Lima',
  email: 'ANA@Exemplo.com', phone: '+5511988887777', city: 'Boston',
  state: 'MA', country: 'US', postal_code: '02135',
  date_of_birth: '1988-03-09', tags: 'lead, contrato-assinado',
})
casos.push(['email minusculo', p1.email, 'ana@exemplo.com'])
casos.push(['sobrenome composto', p1.sobrenome, 'Pereira Lima'])
casos.push(['tags de string', JSON.stringify(p1.tags), JSON.stringify(['lead','contrato-assinado'])])
casos.push(['zip vira zip_code nos EUA', JSON.stringify(paraContatoDocketwise(p1).zip_code), '"02135"'])
casos.push(['nao manda postal_code nos EUA', String(paraContatoDocketwise(p1).postal_code), 'undefined'])
casos.push(['data convertida', paraContatoDocketwise(p1).date_of_birth, '03/09/1988'])

// versao camelCase, so com nome cheio (outro gatilho do GHL)
const p2 = normalizarPayloadGhl({
  contactId: 'x9', full_name: 'Joao Carlos Reis', email: 'joao@ex.com',
  country: 'BR', postal_code: '65000-000',
})
casos.push(['nome cheio quebrado', `${p2.primeiroNome}|${p2.sobrenome}`, 'Joao|Carlos Reis'])
casos.push(['fora dos EUA usa postal_code', JSON.stringify(paraContatoDocketwise(p2).postal_code), '"65000-000"'])

// lead sem e-mail: o Docketwise recusaria
const p3 = normalizarPayloadGhl({ first_name: 'Sem', last_name: 'Email', phone: '11999998888' })
casos.push(['sem email nao passa', JSON.stringify(validarParaDocketwise(p3).faltando), JSON.stringify(['e-mail'])])
casos.push(['com tudo passa', validarParaDocketwise(p1).ok, true])

let falhas = 0
for (const [nome, obtido, esperado] of casos) {
  const ok = obtido === esperado
  if (!ok) falhas++
  console.log(`${ok ? 'ok  ' : 'FALHA'} ${nome}: ${JSON.stringify(obtido)}${ok ? '' : ` (esperado ${JSON.stringify(esperado)})`}`)
}
console.log(falhas === 0 ? '\nTODOS OS CASOS PASSARAM' : `\n${falhas} FALHA(S)`)
