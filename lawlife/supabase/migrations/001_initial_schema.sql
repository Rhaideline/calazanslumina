-- ============================================
-- Law Life - Schema Inicial
-- Escritorios, membros, clientes, processos, prazos
-- LGPD compliant com RLS + trilha de auditoria
--
-- Mesma espinha dorsal do MedSaaS (Doctor Wise), com o dominio
-- trocado: clinica -> escritorio, paciente -> cliente, consulta ->
-- processo/prazo. O que muda de verdade e o sigilo profissional: o
-- Art. 34 do Estatuto da OAB pesa igual (ou mais) que a LGPD aqui,
-- entao TODO acesso a cliente e processo passa por RLS de escritorio.
-- ============================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================
-- TABELA: firms (escritorios)
-- ============================================
CREATE TABLE public.firms (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  cnpj TEXT UNIQUE,
  oab_registration TEXT,               -- registro da sociedade na OAB
  oab_state TEXT CHECK (oab_state IS NULL OR length(oab_state) = 2),
  phone TEXT,
  email TEXT,
  address TEXT,
  city TEXT,
  state TEXT CHECK (state IS NULL OR length(state) = 2),
  zip_code TEXT,
  logo_url TEXT,
  plan_tier TEXT NOT NULL DEFAULT 'free' CHECK (plan_tier IN ('free', 'starter', 'professional', 'enterprise')),
  settings JSONB NOT NULL DEFAULT '{}',
  lgpd_dpo_contact TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================
-- TABELA: profiles (extends auth.users)
-- ============================================
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT NOT NULL,
  avatar_url TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================
-- TABELA: firm_members (junction)
-- ============================================
CREATE TABLE public.firm_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  firm_id UUID NOT NULL REFERENCES public.firms(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'lawyer' CHECK (role IN ('super_admin', 'firm_admin', 'lawyer', 'paralegal', 'secretary', 'client')),
  practice_areas TEXT[] DEFAULT '{}',  -- trabalhista, familia, previdenciario...
  oab_number TEXT,
  oab_state TEXT CHECK (oab_state IS NULL OR length(oab_state) = 2),
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(firm_id, user_id)
);

-- ============================================
-- TABELA: clients (clientes do escritorio)
-- ============================================
CREATE TABLE public.clients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  firm_id UUID NOT NULL REFERENCES public.firms(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  person_type TEXT NOT NULL DEFAULT 'PF' CHECK (person_type IN ('PF', 'PJ')),
  document_encrypted BYTEA,            -- CPF/CNPJ cifrado (nunca em texto puro)
  birth_date DATE,
  phone TEXT,
  email TEXT,
  address TEXT,
  city TEXT,
  state TEXT CHECK (state IS NULL OR length(state) = 2),
  zip_code TEXT,
  -- lead = ainda nao virou cliente; a captacao do GHL entra por aqui
  status TEXT NOT NULL DEFAULT 'lead' CHECK (status IN ('lead', 'active', 'inactive', 'archived')),
  origin TEXT,                         -- site, indicacao, ghl-form, instagram...
  notes TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX clients_firm_idx ON public.clients(firm_id);
CREATE INDEX clients_status_idx ON public.clients(firm_id, status);

-- ============================================
-- TABELA: cases (processos e consultivos)
-- ============================================
CREATE TABLE public.cases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  firm_id UUID NOT NULL REFERENCES public.firms(id) ON DELETE CASCADE,
  client_id UUID NOT NULL REFERENCES public.clients(id) ON DELETE CASCADE,
  responsible_id UUID REFERENCES public.firm_members(id) ON DELETE SET NULL,
  -- numero unico do CNJ: NNNNNNN-DD.AAAA.J.TR.OOOO (nulo enquanto nao distribuido)
  case_number TEXT,
  title TEXT NOT NULL,
  practice_area TEXT NOT NULL,         -- trabalhista, civel, familia, criminal...
  court TEXT,                          -- tribunal / vara
  jurisdiction TEXT,                   -- comarca
  stage TEXT NOT NULL DEFAULT 'prospeccao' CHECK (stage IN (
    'prospeccao', 'consulta', 'contrato', 'distribuido',
    'instrucao', 'recurso', 'execucao', 'encerrado', 'perdido'
  )),
  claim_value NUMERIC(14,2),           -- valor da causa
  fee_agreement JSONB NOT NULL DEFAULT '{}',  -- honorarios: fixo, exito %, parcelas
  opened_at DATE,
  closed_at DATE,
  notes TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX cases_firm_idx ON public.cases(firm_id);
CREATE INDEX cases_client_idx ON public.cases(client_id);
CREATE UNIQUE INDEX cases_number_unique ON public.cases(firm_id, case_number)
  WHERE case_number IS NOT NULL;

-- ============================================
-- TABELA: deadlines (prazos, audiencias, compromissos)
-- ============================================
CREATE TABLE public.deadlines (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  firm_id UUID NOT NULL REFERENCES public.firms(id) ON DELETE CASCADE,
  case_id UUID REFERENCES public.cases(id) ON DELETE CASCADE,
  client_id UUID REFERENCES public.clients(id) ON DELETE SET NULL,
  responsible_id UUID REFERENCES public.firm_members(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  kind TEXT NOT NULL DEFAULT 'prazo' CHECK (kind IN ('prazo', 'audiencia', 'reuniao', 'diligencia', 'tarefa')),
  -- prazo fatal: perder significa preclusao. Nunca some da lista sozinho.
  is_fatal BOOLEAN NOT NULL DEFAULT false,
  due_at TIMESTAMPTZ NOT NULL,
  location TEXT,
  status TEXT NOT NULL DEFAULT 'pendente' CHECK (status IN ('pendente', 'cumprido', 'adiado', 'cancelado')),
  completed_at TIMESTAMPTZ,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX deadlines_firm_due_idx ON public.deadlines(firm_id, due_at);
CREATE INDEX deadlines_case_idx ON public.deadlines(case_id);

-- ============================================
-- TABELA: audit_logs (APPEND ONLY - LGPD + sigilo OAB)
-- ============================================
CREATE TABLE public.audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  firm_id UUID REFERENCES public.firms(id),
  user_id UUID REFERENCES auth.users(id),
  action TEXT NOT NULL CHECK (action IN ('create', 'read', 'update', 'delete', 'export', 'sync')),
  table_name TEXT NOT NULL,
  record_id UUID,
  old_data JSONB,
  new_data JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX audit_logs_firm_idx ON public.audit_logs(firm_id, created_at DESC);

-- ============================================
-- FUNCOES HELPER para RLS
-- ============================================

CREATE OR REPLACE FUNCTION public.get_user_firm_id()
RETURNS UUID AS $$
  SELECT firm_id FROM public.firm_members
  WHERE user_id = auth.uid() AND is_active = true
  LIMIT 1;
$$ LANGUAGE sql SECURITY DEFINER STABLE;

CREATE OR REPLACE FUNCTION public.get_user_role()
RETURNS TEXT AS $$
  SELECT role FROM public.firm_members
  WHERE user_id = auth.uid()
    AND firm_id = public.get_user_firm_id()
    AND is_active = true
  LIMIT 1;
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- updated_at automatico
CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER firms_touch BEFORE UPDATE ON public.firms
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE TRIGGER profiles_touch BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE TRIGGER firm_members_touch BEFORE UPDATE ON public.firm_members
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE TRIGGER clients_touch BEFORE UPDATE ON public.clients
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE TRIGGER cases_touch BEFORE UPDATE ON public.cases
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
CREATE TRIGGER deadlines_touch BEFORE UPDATE ON public.deadlines
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================

ALTER TABLE public.firms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.firm_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deadlines ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- PROFILES
CREATE POLICY "profiles_select_own" ON public.profiles
  FOR SELECT USING (id = auth.uid());
CREATE POLICY "profiles_update_own" ON public.profiles
  FOR UPDATE USING (id = auth.uid());
CREATE POLICY "profiles_insert_own" ON public.profiles
  FOR INSERT WITH CHECK (id = auth.uid());

-- FIRMS
CREATE POLICY "firms_select_members" ON public.firms
  FOR SELECT USING (
    id IN (SELECT firm_id FROM public.firm_members WHERE user_id = auth.uid() AND is_active = true)
  );
CREATE POLICY "firms_update_admin" ON public.firms
  FOR UPDATE USING (
    id = public.get_user_firm_id()
    AND public.get_user_role() IN ('firm_admin', 'super_admin')
  );
CREATE POLICY "firms_insert_any" ON public.firms
  FOR INSERT WITH CHECK (true);

-- FIRM_MEMBERS
CREATE POLICY "firm_members_select" ON public.firm_members
  FOR SELECT USING (firm_id = public.get_user_firm_id());
CREATE POLICY "firm_members_insert_admin" ON public.firm_members
  FOR INSERT WITH CHECK (
    firm_id = public.get_user_firm_id()
    AND public.get_user_role() IN ('firm_admin', 'super_admin')
  );
CREATE POLICY "firm_members_update_admin" ON public.firm_members
  FOR UPDATE USING (
    firm_id = public.get_user_firm_id()
    AND public.get_user_role() IN ('firm_admin', 'super_admin')
  );
-- primeiro membro (criacao do escritorio no registro)
CREATE POLICY "firm_members_insert_self" ON public.firm_members
  FOR INSERT WITH CHECK (
    user_id = auth.uid()
    AND NOT EXISTS (SELECT 1 FROM public.firm_members WHERE user_id = auth.uid())
  );

-- CLIENTS / CASES / DEADLINES: isolamento por escritorio
CREATE POLICY "clients_select" ON public.clients
  FOR SELECT USING (firm_id = public.get_user_firm_id());
CREATE POLICY "clients_insert" ON public.clients
  FOR INSERT WITH CHECK (firm_id = public.get_user_firm_id());
CREATE POLICY "clients_update" ON public.clients
  FOR UPDATE USING (firm_id = public.get_user_firm_id());

CREATE POLICY "cases_select" ON public.cases
  FOR SELECT USING (firm_id = public.get_user_firm_id());
CREATE POLICY "cases_insert" ON public.cases
  FOR INSERT WITH CHECK (firm_id = public.get_user_firm_id());
CREATE POLICY "cases_update" ON public.cases
  FOR UPDATE USING (firm_id = public.get_user_firm_id());

CREATE POLICY "deadlines_select" ON public.deadlines
  FOR SELECT USING (firm_id = public.get_user_firm_id());
CREATE POLICY "deadlines_insert" ON public.deadlines
  FOR INSERT WITH CHECK (firm_id = public.get_user_firm_id());
CREATE POLICY "deadlines_update" ON public.deadlines
  FOR UPDATE USING (firm_id = public.get_user_firm_id());

-- AUDIT_LOGS: imutavel, so admin le
CREATE POLICY "audit_logs_insert" ON public.audit_logs
  FOR INSERT WITH CHECK (true);
CREATE POLICY "audit_logs_select_admin" ON public.audit_logs
  FOR SELECT USING (
    firm_id = public.get_user_firm_id()
    AND public.get_user_role() IN ('firm_admin', 'super_admin')
  );
