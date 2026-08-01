/* ⚠️ RASCUNHO — REQUER REVISÃO JURÍDICA ANTES DE PUBLICAR.
 *
 * Lista apenas as tecnologias que o site DE FATO carrega hoje: GoHighLevel
 * (formulário/CRM), Vercel (hospedagem) e Google. Se entrar pixel de Meta,
 * TikTok ou qualquer outro rastreador, ACRESCENTAR AQUI — política de cookies
 * que omite rastreador ativo é pior que política nenhuma.
 *
 * NÃO promete banner de consentimento de cookies: o site não tem um, e a regra
 * do projeto proíbe popup/modal cobrindo a tela. O texto explica o controle
 * pelo navegador, que é o mecanismo real disponível.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import LegalDoc, { LegalSection } from '@/components/LegalDoc'

export const metadata: Metadata = {
  title: 'Política de Cookies | Calazans Lumina',
  description:
    'Quais cookies e tecnologias de rastreamento o site da Calazans Lumina utiliza, para que servem e como você controla cada um pelo seu navegador.',
  alternates: { canonical: 'https://calazanslumina.com.br/cookies' },
  openGraph: {
    title: 'Política de Cookies | Calazans Lumina',
    description: 'Quais cookies usamos e como você controla.',
    url: 'https://calazanslumina.com.br/cookies',
    type: 'article',
  },
}

export default function CookiesPage() {
  return (
    <LegalDoc
      titulo="Política de Cookies"
      resumo="O que é armazenado no seu navegador quando você visita este site — e como desligar."
      atualizadoEm="31 de julho de 2026"
    >
      <LegalSection n={1} titulo="O que são cookies">
        <p>
          Cookies são arquivos pequenos que um site grava no seu navegador. Servem para lembrar preferências,
          manter sessões ativas e medir como as páginas são usadas. Junto deles existem tecnologias parecidas,
          como <em>localStorage</em> e pixels de medição, e esta política trata de todas em conjunto.
        </p>
      </LegalSection>

      <LegalSection n={2} titulo="O que este site usa">
        <p>
          <strong>Necessários.</strong> Mantêm o site funcionando: entrega das páginas, segurança e
          balanceamento de carga na hospedagem (Vercel). Sem eles o site não opera, então não podem ser
          desligados por aqui.
        </p>
        <p>
          <strong>Formulário e atendimento (GoHighLevel / LeadConnector).</strong> O formulário de orçamento é
          carregado a partir da infraestrutura do GoHighLevel, que grava identificadores próprios para associar
          o envio ao seu contato e evitar duplicidade. É o que permite retornarmos o seu pedido.
        </p>
        <p>
          <strong>Medição de audiência (Google).</strong> Registram, de forma agregada, quais páginas são
          visitadas, por quanto tempo e de onde veio o acesso. Usamos isso para decidir o que melhorar. Não
          identificam você pelo nome.
        </p>
        <p>
          <strong>Conteúdo incorporado.</strong> Páginas com vídeo ou mapa carregam conteúdo do respectivo
          provedor, que pode gravar cookies próprios quando você interage com esse conteúdo.
        </p>
      </LegalSection>

      <LegalSection n={3} titulo="O que este site não faz">
        <p>
          Não usamos cookies para vender seus dados, não montamos perfis para revenda e não exibimos anúncios
          de terceiros dentro do site.
        </p>
      </LegalSection>

      <LegalSection n={4} titulo="Como controlar">
        <p>
          Todo navegador permite bloquear ou apagar cookies. O caminho costuma ser
          <strong> Configurações → Privacidade e segurança → Cookies</strong>. Nos principais:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Chrome</strong> — Configurações → Privacidade e segurança → Cookies e outros dados do site</li>
          <li><strong>Safari</strong> — Preferências → Privacidade → Gerenciar dados de sites</li>
          <li><strong>Firefox</strong> — Configurações → Privacidade e Segurança → Cookies e dados de sites</li>
          <li><strong>Edge</strong> — Configurações → Cookies e permissões de site</li>
        </ul>
        <p>
          Você também pode navegar em janela anônima, que descarta os cookies ao fechar. Bloquear todos os
          cookies pode fazer o <strong>formulário de orçamento parar de funcionar</strong>, porque ele depende
          da sessão criada pelo provedor.
        </p>
      </LegalSection>

      <LegalSection n={5} titulo="Relação com seus dados pessoais">
        <p>
          Quando um cookie permite identificar você, os dados resultantes são tratados conforme a{' '}
          <Link href="/privacidade" className="text-brand-mint hover:text-brand-dark transition-colors">
            Política de Privacidade
          </Link>
          , incluindo os direitos de acesso e eliminação previstos na LGPD.
        </p>
      </LegalSection>

      <LegalSection n={6} titulo="Mudanças">
        <p>
          Se passarmos a usar novas tecnologias de medição ou rastreamento, esta página é atualizada antes
          — e a data de última atualização no topo muda junto.
        </p>
      </LegalSection>
    </LegalDoc>
  )
}
