# Law Life

Sistema de gestao para escritorios de advocacia: clientes, processos, prazos e
audiencias — com a captacao ligada direto no GoHighLevel.

Mesma arquitetura do MedSaaS (Next 16 + Supabase + shadcn/ui), com o dominio
trocado para advocacia:

| MedSaaS   | Law Life            |
|-----------|---------------------|
| clinics   | firms (escritorios) |
| patients  | clients + cases     |
| consultas | deadlines (prazos, audiencias) |
| CRM       | oab_number, area de atuacao, numero CNJ |

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Supabase (Postgres + Auth + RLS)
- Tailwind 4 + shadcn/ui
- GoHighLevel API v2 (`services.leadconnectorhq.com`, header `Version: 2021-07-28`)

## Subir o projeto

```bash
npm install
cp .env.example .env.local   # preencha as variaveis
npm run dev
```

No Supabase, rode as migracoes na ordem:

```
supabase/migrations/001_initial_schema.sql
supabase/migrations/002_ghl_integration.sql
```

### Variaveis de ambiente

| Variavel | Para que serve |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | projeto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | cliente do browser (limitado por RLS) |
| `SUPABASE_SERVICE_ROLE_KEY` | rotas server-side; unica chave que enxerga `ghl_credentials` |
| `GHL_CRED_ENCRYPTION_KEY` | chave de cifra do token do GHL (`openssl rand -base64 48`) |

> Trocar `GHL_CRED_ENCRYPTION_KEY` invalida todos os tokens ja gravados — eles
> param de decifrar e precisam ser redigitados escritorio por escritorio.

## Integracao com o GoHighLevel

Cada escritorio pluga a **propria sub-conta**. A configuracao fica em
`/configuracoes/integracoes` e vale so para aquele escritorio.

### Sentido 1 — captacao (site → Law Life → GHL)

```
POST /api/ghl/lead     (publico, sem login)
{
  "formKey":  "<lead_form_key do escritorio>",
  "nome":     "Maria Souza",
  "email":    "maria@exemplo.com",
  "whatsapp": "98999998888",
  "area":     "trabalhista",
  "origem":   "landing-trabalhista"
}
```

O lead entra no Postgres **antes** de ir ao GHL. GHL fora do ar nao perde lead:
o registro fica com `ghl_contact_id` nulo e da para reenviar pela tela de
clientes.

A `formKey` identifica o escritorio sem expor UUID interno e nao autoriza
leitura de nada — so criacao de lead. Rate limit de 5 envios/min por IP.

### Sentido 2 — operacao (Law Life → GHL)

| No Law Life | Vira no GHL |
|---|---|
| cliente / lead | contato (upsert por e-mail ou telefone) |
| processo | oportunidade no pipeline, no estagio mapeado |
| audiencia / reuniao | evento no calendario, com lembrete automatico |

Disparo manual: `POST /api/ghl/sync` com `{ "entity": "client" \| "case" \| "deadline", "id": "<uuid>" }`.
O escritorio vem da **sessao**, nunca do corpo do request.

Fase do processo -> status da oportunidade: `perdido` = lost, `encerrado` = won,
o resto = open.

### Sentido 3 — retorno (GHL → Law Life)

```
POST /api/ghl/webhook
```

Eventos tratados: `ContactCreate`, `ContactUpdate`, `OpportunityStatusUpdate`,
`OpportunityStageUpdate`, `AppointmentCreate`. `InboundMessage` fica so no log.

**Autenticacao.** O GHL so assina webhook de app do marketplace; workflow com
acao "Custom Webhook" nao assina e a UI dele nao calcula HMAC. Entao a rota
aceita duas provas contra o mesmo segredo:

1. `x-lawlife-signature: sha256=<hmac-sha256 do corpo cru>` — a forte;
2. `x-lawlife-token: <segredo>` — header fixo, que e o que da para configurar
   direto no workflow do GHL.

Sem segredo cadastrado a rota recusa tudo (401). Idempotencia por `webhookId`
em `ghl_webhook_events`: reentrega do GHL nao vira cliente duplicado.

Erro no processamento devolve **200** de proposito — o evento ficou guardado e
pode ser reprocessado; 5xx faria o GHL reentregar em loop.

### Passo a passo no GHL

1. **Settings → Private Integrations** → novo token com os escopos
   `contacts.write`, `opportunities.write`, `calendars/events.write`.
2. Copie o **Location ID** (Settings → Business Profile).
3. Em `/configuracoes/integracoes`, cole Location ID + token + um segredo de
   webhook (`openssl rand -hex 32`).
4. **Pipeline ID e ids dos estagios**: abra o funil no GHL, os ids aparecem na
   URL. Preencha o de/para fase -> estagio.
5. **Custom fields** (opcional): cole os ids de "area do direito", "fase do
   processo" e "tipo de pessoa". Campo em branco simplesmente nao e enviado —
   id inventado faz o GHL rejeitar o contato inteiro.
6. **Workflow de retorno**: gatilho do evento desejado → acao *Custom Webhook*
   → `POST https://<seu-dominio>/api/ghl/webhook`, header
   `x-lawlife-token: <o mesmo segredo>`.

## Sigilo profissional

Para o GHL vai o minimo que o funil precisa: nome, contato, area, fase e valor
da causa. Conteudo de processo (fatos, documentos, estrategia) **nao sai** do
Law Life — e sigilo profissional (Art. 34, VII do Estatuto da OAB), e o GHL e
ferramenta de marketing, nao cofre de dado de cliente. O `ghl_sync_log` guarda
o que foi enviado, no mesmo criterio.

Prazo interno tambem nao sobe para o calendario do GHL: so audiencia e reuniao,
que sao compromissos do proprio cliente. O contrario mandaria lembrete de algo
que nao e dele.

## Estrutura

```
src/
  app/
    (auth)/          login, registro (cria escritorio + admin), recuperacao
    (dashboard)/     dashboard, clientes, processos, prazos, configuracoes
    api/ghl/
      lead/          captacao publica
      sync/          reenvio manual (autenticado)
      webhook/       retorno do GHL
      config/        credenciais e de/para (admin do escritorio)
  lib/ghl/
    client.ts        HTTP da API v2 (retry em 429/5xx, timeout, erro tipado)
    config.ts        carrega credencial cifrada + log de sync
    mappers.ts       de/para dominio -> payload GHL
    sync.ts          orquestra cliente / processo / prazo
supabase/migrations/ schema + RLS + integracao
```
