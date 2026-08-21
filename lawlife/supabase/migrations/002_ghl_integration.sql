-- ============================================
-- Law Life - Integracao GoHighLevel (GHL)
--
-- Modelo: cada escritorio pluga a PROPRIA sub-conta (location) do GHL.
-- Por isso credencial fica no banco, por escritorio — nao em env var.
--
-- Separacao proposital em duas tabelas:
--   ghl_integrations -> config nao-sensivel, o admin do escritorio le e edita
--   ghl_credentials  -> token e segredo de webhook, RLS liga SEM NENHUMA
--                       policy. Sem policy, nenhum usuario autenticado le,
--                       nem o dono do escritorio. So a service_role (rotas
--                       server-side) enxerga. RLS filtra linha, nao coluna:
--                       por isso o segredo mora em outra tabela, e nao numa
--                       coluna escondida da mesma.
-- ============================================

-- ============================================
-- TABELA: ghl_integrations (config por escritorio)
-- ============================================
CREATE TABLE public.ghl_integrations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  firm_id UUID NOT NULL UNIQUE REFERENCES public.firms(id) ON DELETE CASCADE,
  location_id TEXT NOT NULL,
  pipeline_id TEXT,
  calendar_id TEXT,
  -- de/para: stage do case no Law Life -> id do estagio no pipeline do GHL.
  -- Ex.: {"consulta": "abc123", "contrato": "def456"}
  stage_map JSONB NOT NULL DEFAULT '{}',
  -- de/para: campo do Law Life -> id do custom field no GHL
  custom_field_map JSONB NOT NULL DEFAULT '{}',
  default_tags TEXT[] NOT NULL DEFAULT '{lawlife}',
  -- desligar o sync sem apagar a config (troca de token, auditoria, etc.)
  is_active BOOLEAN NOT NULL DEFAULT true,
  sync_clients BOOLEAN NOT NULL DEFAULT true,
  sync_cases BOOLEAN NOT NULL DEFAULT true,
  sync_deadlines BOOLEAN NOT NULL DEFAULT false,
  last_sync_at TIMESTAMPTZ,
  last_error TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TRIGGER ghl_integrations_touch BEFORE UPDATE ON public.ghl_integrations
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- ============================================
-- TABELA: ghl_credentials (SEGREDO - service_role apenas)
-- ============================================
CREATE TABLE public.ghl_credentials (
  firm_id UUID PRIMARY KEY REFERENCES public.firms(id) ON DELETE CASCADE,
  -- pgp_sym_encrypt com a chave em GHL_CRED_ENCRYPTION_KEY (env do servidor).
  -- Vazou o dump do banco? Sem a chave o token continua inutil.
  token_encrypted BYTEA NOT NULL,
  -- segredo compartilhado que assina o webhook de volta do GHL
  webhook_secret_encrypted BYTEA,
  token_hint TEXT,               -- ultimos 4 digitos, so pra UI ("pit-...a9f3")
  rotated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================
-- TABELA: ghl_sync_log (o que saiu, o que voltou, o que quebrou)
-- ============================================
CREATE TABLE public.ghl_sync_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  firm_id UUID REFERENCES public.firms(id) ON DELETE CASCADE,
  direction TEXT NOT NULL CHECK (direction IN ('outbound', 'inbound')),
  entity_type TEXT NOT NULL CHECK (entity_type IN ('client', 'case', 'deadline', 'lead')),
  entity_id UUID,
  ghl_id TEXT,
  event TEXT NOT NULL,           -- contact.upsert, opportunity.create, webhook.InboundMessage...
  status TEXT NOT NULL CHECK (status IN ('success', 'error', 'skipped')),
  http_status INT,
  error TEXT,
  -- payload sem dado sensivel de processo: aqui vai o que foi pro GHL,
  -- que ja e o minimo necessario (nome, contato, area). Nada de conteudo
  -- de processo — sigilo profissional nao vai para log de integracao.
  payload JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX ghl_sync_log_firm_idx ON public.ghl_sync_log(firm_id, created_at DESC);
CREATE INDEX ghl_sync_log_entity_idx ON public.ghl_sync_log(entity_type, entity_id);

-- ============================================
-- TABELA: ghl_webhook_events (idempotencia)
-- O GHL reentrega webhook quando nao recebe 2xx rapido. Sem essa tabela,
-- a mesma mensagem viraria dois clientes.
-- ============================================
CREATE TABLE public.ghl_webhook_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  webhook_id TEXT NOT NULL UNIQUE,   -- id do evento vindo do GHL
  location_id TEXT,
  firm_id UUID REFERENCES public.firms(id) ON DELETE SET NULL,
  event_type TEXT NOT NULL,
  processed_at TIMESTAMPTZ,
  payload JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================
-- Ponteiros para o GHL nas tabelas de dominio
-- ============================================
ALTER TABLE public.clients
  ADD COLUMN ghl_contact_id TEXT,
  ADD COLUMN ghl_synced_at TIMESTAMPTZ;

ALTER TABLE public.cases
  ADD COLUMN ghl_opportunity_id TEXT,
  ADD COLUMN ghl_synced_at TIMESTAMPTZ;

ALTER TABLE public.deadlines
  ADD COLUMN ghl_event_id TEXT,
  ADD COLUMN ghl_synced_at TIMESTAMPTZ;

CREATE UNIQUE INDEX clients_ghl_contact_unique ON public.clients(firm_id, ghl_contact_id)
  WHERE ghl_contact_id IS NOT NULL;
CREATE UNIQUE INDEX cases_ghl_opportunity_unique ON public.cases(firm_id, ghl_opportunity_id)
  WHERE ghl_opportunity_id IS NOT NULL;

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================
ALTER TABLE public.ghl_integrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ghl_credentials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ghl_sync_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ghl_webhook_events ENABLE ROW LEVEL SECURITY;

-- ghl_integrations: admin do escritorio le e edita a config
CREATE POLICY "ghl_integrations_select" ON public.ghl_integrations
  FOR SELECT USING (firm_id = public.get_user_firm_id());
CREATE POLICY "ghl_integrations_insert_admin" ON public.ghl_integrations
  FOR INSERT WITH CHECK (
    firm_id = public.get_user_firm_id()
    AND public.get_user_role() IN ('firm_admin', 'super_admin')
  );
CREATE POLICY "ghl_integrations_update_admin" ON public.ghl_integrations
  FOR UPDATE USING (
    firm_id = public.get_user_firm_id()
    AND public.get_user_role() IN ('firm_admin', 'super_admin')
  );

-- ghl_credentials: NENHUMA policy, de proposito. RLS ligada e sem policy
-- significa "ninguem via API publica". So a service_role passa.

-- ghl_sync_log: o escritorio ve o proprio historico (bom pra suporte)
CREATE POLICY "ghl_sync_log_select" ON public.ghl_sync_log
  FOR SELECT USING (firm_id = public.get_user_firm_id());

-- ghl_webhook_events: nenhuma policy — trafego server-side apenas.

-- ============================================
-- Helpers de credencial (SECURITY DEFINER, chamados pela service_role)
-- ============================================

CREATE OR REPLACE FUNCTION public.ghl_store_token(
  p_firm_id UUID,
  p_token TEXT,
  p_webhook_secret TEXT,
  p_encryption_key TEXT
) RETURNS VOID AS $$
BEGIN
  INSERT INTO public.ghl_credentials (firm_id, token_encrypted, webhook_secret_encrypted, token_hint, rotated_at)
  VALUES (
    p_firm_id,
    pgp_sym_encrypt(p_token, p_encryption_key),
    CASE WHEN p_webhook_secret IS NULL THEN NULL
         ELSE pgp_sym_encrypt(p_webhook_secret, p_encryption_key) END,
    right(p_token, 4),
    now()
  )
  ON CONFLICT (firm_id) DO UPDATE SET
    token_encrypted = EXCLUDED.token_encrypted,
    webhook_secret_encrypted = EXCLUDED.webhook_secret_encrypted,
    token_hint = EXCLUDED.token_hint,
    rotated_at = now();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.ghl_read_credentials(
  p_firm_id UUID,
  p_encryption_key TEXT
) RETURNS TABLE (token TEXT, webhook_secret TEXT) AS $$
  SELECT
    pgp_sym_decrypt(token_encrypted, p_encryption_key),
    CASE WHEN webhook_secret_encrypted IS NULL THEN NULL
         ELSE pgp_sym_decrypt(webhook_secret_encrypted, p_encryption_key) END
  FROM public.ghl_credentials
  WHERE firm_id = p_firm_id;
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- SECURITY DEFINER roda como dono da funcao e ignora RLS. Sem estes REVOKEs,
-- qualquer usuario logado chamaria ghl_read_credentials e leria o token de
-- qualquer escritorio — exatamente o que a tabela sem policy evitou.
REVOKE ALL ON FUNCTION public.ghl_store_token(UUID, TEXT, TEXT, TEXT) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.ghl_read_credentials(UUID, TEXT) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.ghl_store_token(UUID, TEXT, TEXT, TEXT) TO service_role;
GRANT EXECUTE ON FUNCTION public.ghl_read_credentials(UUID, TEXT) TO service_role;

-- ============================================
-- Chave publica de captacao
-- A rota /api/ghl/lead e publica (landing page, formulario do site) e
-- precisa saber PARA QUAL escritorio o lead vai. O id do escritorio nao
-- serve: e UUID sequencialmente enumeravel em URL publica e vaza estrutura.
-- Esta chave e opaca, rotacionavel e so identifica o destino do lead —
-- nao autoriza leitura de nada.
-- ============================================
ALTER TABLE public.firms
  ADD COLUMN lead_form_key TEXT UNIQUE DEFAULT encode(gen_random_bytes(12), 'hex');

CREATE INDEX firms_lead_form_key_idx ON public.firms(lead_form_key);
