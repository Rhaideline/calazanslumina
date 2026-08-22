# Ponte GoHighLevel ↔ Docketwise

Integração por webhook entre o GHL (onde o lead é trabalhado) e o Docketwise
(onde o caso vive). Não é um sistema: são quatro endpoints sem banco próprio.

```
GHL  ──workflow/Custom Webhook──►  /api/ghl-webhook  ──►  Docketwise (contato + matter)
                                          │
                                          └──► devolve o id ao GHL (campo + tag)

Docketwise  ◄──varredura 15 min──  /api/docketwise-cron  ──►  GHL (tag caso-<status>)
```

| Rota | O que faz |
|---|---|
| `POST /api/ghl-webhook` | Recebe o workflow do GHL e cria/atualiza o contato no Docketwise |
| `GET /api/oauth/start` | Inicia a autorização OAuth do Docketwise (uma vez só) |
| `GET /api/oauth/callback` | Recebe o `code` e guarda os tokens |
| `GET /api/docketwise-cron` | Varre os matters alterados e reflete no GHL |
| `GET /api/status` | Diagnóstico: o que está configurado, sem revelar segredo |

## Instalação

```bash
npm install
cp .env.example .env    # preencha
npm test                # confere o de/para de campos
npx vercel deploy
```

Tudo é variável de ambiente — veja `.env.example`. Duas são inegociáveis:

- **`PONTE_WEBHOOK_SECRET`** — sem ela `/api/ghl-webhook` recusa tudo com 503.
- **`UPSTASH_REDIS_REST_URL` / `_TOKEN`** — sem elas o refresh token do
  Docketwise vive em memória e some no próximo cold start, derrubando a ponte
  calada. O OAuth 2.0 do Docketwise **rotaciona** o refresh token a cada
  renovação: o novo precisa de onde ficar.

## Ligar o Docketwise (uma vez)

1. Peça o acesso: e-mail para `dev@docketwise.com`, assunto **"API integration"**,
   informando a redirect URI `https://SEU-DOMINIO/api/oauth/callback`.
2. Com `client_id` e `client_secret` no ambiente, abra no navegador:
   `https://SEU-DOMINIO/api/oauth/start?token=<PONTE_ADMIN_TOKEN>`
3. Autorize logado no Docketwise. O callback grava os tokens e confirma na tela.
4. Confira em `/api/status?token=<PONTE_ADMIN_TOKEN>` que `autorizado: true`.

## Ligar o GHL

**Saída (lead vira cliente).** No workflow que marca o fechamento — gatilho de
estágio do funil ou de tag:

```
Add Action → Custom Webhook
  Method   POST
  URL      https://SEU-DOMINIO/api/ghl-webhook
  Header   x-ponte-token: <PONTE_WEBHOOK_SECRET>
```

**Entrada (status do caso).** Crie no GHL um campo personalizado para o id do
Docketwise e coloque o id dele em `GHL_CF_DOCKETWISE_ID`. Os workflows de
comunicação são disparados pelas tags `caso-<status>` que a varredura aplica.

## Decisões que valem conhecer

**O e-mail é a chave.** O Docketwise exige nome, sobrenome e e-mail. Lead que
preencheu só o WhatsApp é recusado com `200` e motivo — repetir não conserta
dado que não existe, e devolver erro faria o GHL reenfileirar para sempre.
Torne o e-mail obrigatório no formulário que alimenta o funil.

**Nada de documento de imigração indo para o marketing.** A-Number, passaporte
e USCIS ELIS nascem no Docketwise, preenchidos pelo escritório. A ponte não
carrega esses campos para o GHL nem no sentido contrário.

**A primeira varredura não envia nada.** Só grava o marco inicial. Sem isso a
estreia empurraria a base inteira de casos de uma vez, e cada tag dispararia o
workflow — mensagem para todo cliente antigo.

**O marcador só avança quando tudo passou.** Se um caso falhar no meio da
varredura, o marcador fica onde está e a próxima execução tenta de novo.

**O envelope do POST é configurável.** Os nomes dos campos do Docketwise vieram
do schema do conector oficial e são certeza; o formato do corpo
(`{"contact": {...}}` aninhado ou campos soltos) não pôde ser confirmado porque
a documentação estava fora do alcance da máquina que escreveu isto. Daí
`DOCKETWISE_PAYLOAD_ENVELOPE` e o log do corpo do erro inteiro: a primeira
chamada real resolve a dúvida.

**Telefone pode não atravessar.** A ação de contato do Docketwise no conector
oficial não expõe telefone. Se a API v1 também não expuser, quem nascer no
Docketwise chega ao GHL sem número — e sem número não há WhatsApp. Confirmar
assim que o acesso à API sair.

## Quando algo não chega

1. `/api/status?token=…` — quase sempre é variável faltando ou OAuth não feito.
2. Log da função no Vercel — o corpo do erro do Docketwise sai inteiro.
3. `GET /api/docketwise-cron?token=…` roda a varredura na hora e devolve o
   resultado caso a caso.
