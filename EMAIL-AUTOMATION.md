# Email Automation · Calazans Lumina
**Sequências por cenário · pronto pra configurar no GHL**

Stack: GoHighLevel (mesma location MR3yMqtdBa4732pi4ZCw que já uso pros posts).

---

## 🎯 Workflow 1 · LEAD MAGNET capturado (`/ia-preview`)

**Trigger:** API `/api/preview-request` cria contato com tag `preview-ia-completo`
**Objetivo:** Levar pra compra de R$10 nos próximos 7 dias

### Sequência de 6 mensagens

**MSG 1 · D0 imediato (Email)**
```
Assunto: 🎁 Aqui está seu preview de 8 páginas

Oi, {{contact.first_name}}!

Aqui está seu preview do livro "IA do Zero ao Avançado":
👉 [Download PDF — 9 páginas](https://calazanslumina.com.br/pdfs/ia-completo-preview.pdf)

Dentro você vai encontrar:
✓ Capa + sumário completo (vê tudo que tem no livro)
✓ Carta da autora (por que escrevi)
✓ Capítulo 1 completo · Fundamentos da IA (8 pgs)
✓ CTA final do livro

Lê com calma. Volta aqui quando estiver pronta(o) pra ler o resto:
👉 [Acessar livro completo — R$ 10](https://link.fastpaydirect.com/payment-link/6a08f6ef1d5a394a682e4ee1)

Qualquer dúvida, responde esse email. Eu leio todas.

Rhaideline Calazans
fundadora · Calazans Lumina
```

**MSG 2 · D0 +5min (WhatsApp)**
```
Oi {{contact.first_name}}, é a Rhaideline da Calazans Lumina 👋

Acabei de te mandar o preview do livro por email. Recebeu?

Se não chegou, me responde aqui que eu reenvio.

(Salva meu número, vou te mandar dicas de IA toda semana — e quando quiser cancelar, é só falar.)
```

**MSG 3 · D1 (Email)**
```
Assunto: O capítulo 1 te explica algo que ninguém te explicou ainda

Oi {{contact.first_name}},

Não sei se você já leu o preview que te mandei ontem. Se não leu, está aqui de novo:
👉 [Preview PDF](https://calazanslumina.com.br/pdfs/ia-completo-preview.pdf)

Quero te chamar atenção pra um trecho específico — página 8, último parágrafo:

"A IA é como um estagiário extremamente competente mas que acabou de ser contratado. Ele tem todo o conhecimento do mundo, mas não sabe nada sobre você."

Essa frase mudou como eu uso IA. Porque mostra que o problema NUNCA é a IA. O problema é o briefing.

E briefing tem método.

O método chama CRIA. Tem 4 elementos. Está no capítulo 3 do livro (você ainda não tem acesso).

👉 [Pega o livro completo por R$ 10](https://link.fastpaydirect.com/payment-link/6a08f6ef1d5a394a682e4ee1)

A propósito: você ainda tem acesso ao preço de R$ 10 até 31 de maio. Depois sobe pra R$ 27.

Rhaideline
```

**MSG 4 · D3 (Email · prova social)**
```
Assunto: O que comprou já tá usando — em 48 horas

{{contact.first_name}},

Quero te mostrar 3 mensagens que recebi nos últimos 2 dias de quem comprou o livro:

📱 Carlos, 42 anos, pintor em Boston:
"Em 1 semana automatizei toda resposta de orçamento no WhatsApp. Triplicou meu fechamento."

📱 Fernanda, 35 anos, advogada em BH:
"Os 50 templates de prompt valem 100x o preço. Cliente acha que tenho equipe inteira por trás."

📱 Roberto, 67 anos, aposentado em Recife:
"Achei que era tarde com 67 anos. O capítulo pra '60+' mostrou que não é."

Esses não são depoimentos pra vender. São pessoas reais que mandaram print pra mim.

Você ainda tem 12 dias com o preço de R$ 10.

👉 [Acessar agora](https://link.fastpaydirect.com/payment-link/6a08f6ef1d5a394a682e4ee1)

Rhaideline
```

**MSG 5 · D5 (Email · OBJEÇÃO)**
```
Assunto: "É muito conteúdo, vou dar conta?"

{{contact.first_name}}, essa é a pergunta que mais recebo.

Resposta curta: SIM, vai dar.

Resposta longa:
- O livro são 95 páginas, mas dividido em 33 capítulos curtos
- Você não precisa ler tudo de uma vez
- Tem um plano de 30 dias indicando exatamente o que ler em cada semana
- Cada IA tem 3-4 páginas só (você foca na que precisa)
- E o melhor: você tem acesso vitalício. Não tem pressa.

A pessoa que comprou ontem provavelmente leu só 10 páginas até agora. Mas já aplicou 1 prompt na vida real. Isso é o que conta.

👉 [Pega o livro por R$ 10](https://link.fastpaydirect.com/payment-link/6a08f6ef1d5a394a682e4ee1)

Rhaideline
```

**MSG 6 · D7 (Email · ÚLTIMA CHAMADA)**
```
Assunto: 🚨 Sua última chamada com R$ 10

{{contact.first_name}}, vou te dar a última.

Daqui 6 dias o preço do livro sobe pra R$ 27. Não é estratégia de venda. É só que a partir de 1º de junho começa a fase 2 do lançamento, e o preço de divulgação fica pra trás.

Hoje você ainda paga R$ 10 (acesso vitalício, pra sempre).

👉 [Garantir agora](https://link.fastpaydirect.com/payment-link/6a08f6ef1d5a394a682e4ee1)

Se não fizer sentido pra você esse ano, sem problema. Eu te tiro dessa lista de email automaticamente em 14 dias se você não responder. Sem stress.

Mas se fizer sentido — esse é o momento.

Um abraço,
Rhaideline
```

---

## 🎯 Workflow 2 · COMPRA confirmada do curso premium

**Trigger:** GHL webhook do Fastpay quando pagamento de R$10 confirmado
**Tag:** `comprou-ia-completo`
**Objetivo:** Entregar produto + abrir caminho pra mentoria R$497

### Sequência de 5 mensagens

**MSG 1 · D0 imediato (Email)**
```
Assunto: ✅ Seu livro IA do Zero ao Avançado · acesso liberado

{{contact.first_name}},

Compra confirmada. Bora.

👉 [Baixar PDF · 95 páginas](https://calazanslumina.com.br/cursos/ia-chatgpt-completo/download?access=pago)

E os 5 bônus também:
✓ BÔNUS 1 — 50 templates de prompt
✓ BÔNUS 2 — 9 planos por profissão
✓ BÔNUS 3 — Glossário 18 termos
✓ BÔNUS 4 — Plano de 30 dias
✓ BÔNUS 5 — Comparativo das 10 IAs

(Todos já estão DENTRO do PDF principal. Você não precisa baixar separadamente.)

Próximo passo: lê pelo menos os 5 prompts do capítulo 7 hoje. Testa 1 essa noite mesmo. Manda print pra mim do que conseguiu fazer.

📱 WhatsApp direto: +55 31 98294-8067

Rhaideline
```

**MSG 2 · D0 +30min (WhatsApp)**
```
Oi {{contact.first_name}}! Rhaideline aqui 👋

Vi que você comprou o livro IA do Zero ao Avançado. Bem-vindo(a)!

Te mandei o PDF por email. Recebeu?

Quando ler os primeiros capítulos, manda print do que aplicar. Eu respondo pessoalmente todo aluno nas primeiras 48h.
```

**MSG 3 · D2 (Email)**
```
Assunto: Faz isso na próxima 1h pra ter "wow moment"

{{contact.first_name}},

Você tem o livro há 2 dias. Quero te poupar tempo.

PULA pra página 62 agora. Lá está o "Template 02 · Vendas":

"Escreve email de vendas pra [produto]. Cliente já demonstrou interesse mas não comprou. Inclui: assunto chamativo, 3 benefícios, depoimento fictício, CTA. Máx 200 palavras."

Cola no ChatGPT, substitui [produto] pelo seu, e me manda print do resultado.

Em 1 hora você vai ter:
1. Email pronto pra mandar pra cliente real essa semana
2. A sensação de "uau, é possível"
3. Mais 3 leads quentes pra responder amanhã

Responde esse email com o print.

Rhaideline
```

**MSG 4 · D7 (Email · upsell)**
```
Assunto: Quer aplicar isso TUDO no seu negócio específico?

{{contact.first_name}},

Como tá a leitura?

Vou te oferecer algo: se você quer aplicar o livro NO SEU CASO específico, eu faço mentoria 1-a-1 pessoal:

🎯 Mentoria Calazans Lumina
· 4 sessões de 60min via Zoom
· Auditoria do seu negócio sob ótica de IA
· Plano de 90 dias customizado
· Suporte WhatsApp por 60 dias
· Bônus: estamos construindo o seu primeiro funil com IA juntos

Valor: R$ 497 (parcela 5x).

NÃO é pra todo mundo. Atendo só 4 alunos por mês. Se fizer sentido, responde esse email com "MENTORIA".

Se não fizer sentido, sem problema. O livro sozinho já te dá 80% do caminho.

Rhaideline
```

**MSG 5 · D30 (Email · review request)**
```
Assunto: Como está sendo o livro? (Resposta curta de 30s)

{{contact.first_name}},

30 dias desde sua compra. Queria te perguntar duas coisas:

1. Qual capítulo mais te ajudou?
2. O que você mudaria/adicionaria?

Responde aqui mesmo, em 1 frase cada. Vou usar tuas respostas pra fazer a edição 2.0 do livro (que vou te dar de graça quando sair).

E se quiser deixar um depoimento público (com nome + cidade), responde também. Vou colocar no site e te dar mais 1 bônus que ainda não está no livro: "Pack de 30 prompts secretos pra agência" (vale R$ 47).

Obrigada por confiar,
Rhaideline
```

---

## 🎯 Workflow 3 · CARRINHO ABANDONADO (visitou /ia-completo, não comprou em 1h)

**Trigger:** Pixel disparado quando alguém visita `/ia-completo` mas não clica no link de pagamento em 1h.
**Requer:** Captura de email via formulário no rodapé (ainda não implementado) OU cookie de sessão linkado a contato GHL existente.

### Sequência de 3 mensagens (só se já tiver email)

**MSG 1 · 1h após visita (Email)**
```
Assunto: Esqueceu algo? 👀

{{contact.first_name}},

Vi que você passou pelo livro "IA do Zero ao Avançado" hoje e não levou.

Sem julgar. Talvez não foi a hora. Talvez precisa pensar.

Mas se foi dúvida do preço, deixa eu te lembrar: R$ 10. Acesso vitalício. PDF imediato.

Se foi dúvida do conteúdo, manda PREVIEW no DM do Instagram (@calazanslumina) que te envio 8 páginas grátis pra ler.

Se foi outra coisa, responde esse email contando. Eu leio todas.

Rhaideline
```

**MSG 2 · 24h depois (Email)**
```
Assunto: Vou te ser direta

{{contact.first_name}},

Não te conheço. Mas conheço o tipo de pessoa que clica no link de um livro de IA hoje.

Você sabe que precisa aprender IA. Vê todo mundo falando. Pensa "tenho que estudar isso direito". Mas o tempo vai passando.

R$ 10 não é o problema. O problema é começar.

Esse livro NÃO te dá motivação. Mas te dá MÉTODO. Você lê 5 páginas hoje, aplica 1 prompt amanhã, e em 30 dias tá usando IA toda semana.

👉 [Garantir por R$ 10](https://link.fastpaydirect.com/payment-link/6a08f6ef1d5a394a682e4ee1)

(Se não for o momento, sem problema. Te tiro da lista em 7 dias.)

Rhaideline
```

---

## 🎯 Workflow 4 · DOWNLOAD FREE qualquer curso gratuito

**Trigger:** Download de qualquer PDF gratuito (ChatGPT Idosos, GMN, Redes Sociais, Ferramentas Secretárias)
**Tag:** `lead-curso-free`
**Objetivo:** Ascensão pro premium R$10

### Sequência de 4 mensagens

**MSG 1 · D0 (Email)** — Entrega PDF + bem-vindo
**MSG 2 · D2 (Email)** — "Você curtiu? Olha esse próximo passo"
**MSG 3 · D5 (Email)** — Caso de cliente Calazans + oferta IA Completo R$10
**MSG 4 · D14 (Email)** — Pack "todos cursos premium" R$30 ou mentoria

(Conteúdo parecido com Workflow 1 mas adaptado pro contexto do free)

---

## 🛠 Como configurar no GHL · passo a passo

### Setup inicial (1 vez)

1. **GHL → Automation → Workflows → Create**
2. Cria 4 workflows com nomes:
   - "Lead Preview IA Completo"
   - "Comprou IA Completo"
   - "Carrinho Abandonado IA"
   - "Free Course Lead"

3. Pra cada um:
   - **Trigger**: Tag added (`preview-ia-completo`, `comprou-ia-completo`, etc.)
   - **Actions**: Wait + Send Email/SMS conforme sequência acima

### Templates de email no GHL

1. **GHL → Marketing → Emails → Templates**
2. Cria 1 template por mensagem das sequências acima
3. Usa o editor de email do GHL (já tem suporte a {{contact.first_name}})

### WhatsApp via GHL

1. **GHL → Conversations → WhatsApp Business**
2. Verifica que o número da Calazans Lumina (+55 31 98294-8067) está conectado
3. Cria template de mensagem (precisa de aprovação Meta — 24h)
4. Usa no workflow como ação "Send SMS via WhatsApp"

### Tag automation

Adicione na API existente (`/api/preview-request/route.ts`) — já feito ✓ — todas tags relevantes:
- `preview-ia-completo`
- `lead-magnet`
- `ia-preview-page`

GHL detecta a nova tag e dispara o workflow correspondente.

---

## 📊 Métricas a acompanhar

| Workflow | KPI | Target 30 dias |
|---|---|---|
| Lead magnet | Captura leads | 200+ |
| Lead magnet | Conversão pra compra | 12% |
| Compra confirmada | Open rate D2 | 65% |
| Compra confirmada | Upsell mentoria | 6% |
| Carrinho abandonado | Open rate D1 | 35% |
| Carrinho abandonado | Conversão | 8% |

---

## 🚀 Próximos passos depois disso

1. **Webinar mensal** grátis (1ª quinta de cada mês)
   - 60min de conteúdo + 15min pitch do livro
   - Captura leads + converte em compradores

2. **Programa de afiliados**
   - 10% de comissão sobre cada venda indicada
   - Link único por afiliado no Fastpay

3. **Comunidade VIP no Telegram** (depois de 200 compradores)
   - Grupo só pra quem comprou
   - 1 prompt novo por semana
   - Networking entre alunos

4. **Edição 2.0 do livro · janeiro 2027**
   - Atualizar com novos modelos (GPT-5, Claude 5)
   - Grátis pra quem comprou em 2026
   - Vende edição nova pra novos clientes a R$ 47

---

**Documento mantido por: Rhaideline Calazans · última atualização 17 mai 2026.**
