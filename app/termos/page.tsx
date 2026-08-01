/* ⚠️ RASCUNHO — REQUER REVISÃO JURÍDICA ANTES DE PUBLICAR.
 *
 * Redigido a partir do que o site de fato oferece: serviços de agência sob
 * orçamento e cursos digitais de acesso imediato.
 *
 * ATENÇÃO AO ART. 49 DO CDC (direito de arrependimento em 7 dias na compra
 * fora do estabelecimento). Esse direito é LEGAL e não depende de a empresa
 * oferecer garantia comercial — por isso ele está descrito aqui mesmo não
 * havendo política de garantia/devolução nos cursos.
 *
 * NÃO cita CNPJ: a titular não possui pessoa jurídica registrada até 31/07/2026.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import LegalDoc, { LegalSection } from '@/components/LegalDoc'

export const metadata: Metadata = {
  title: 'Termos de Uso | Calazans Lumina',
  description:
    'Condições de uso do site da Calazans Lumina, regras de contratação de serviços, compra de cursos digitais, propriedade intelectual e limitação de responsabilidade.',
  alternates: { canonical: 'https://calazanslumina.com.br/termos' },
  openGraph: {
    title: 'Termos de Uso | Calazans Lumina',
    description: 'Condições de uso do site, serviços e cursos da Calazans Lumina.',
    url: 'https://calazanslumina.com.br/termos',
    type: 'article',
  },
}

export default function TermosPage() {
  return (
    <LegalDoc
      titulo="Termos de Uso"
      resumo="As regras de uso deste site, da contratação de serviços e da compra dos cursos."
      atualizadoEm="31 de julho de 2026"
    >
      <LegalSection n={1} titulo="Quem somos e o que este documento faz">
        <p>
          Este site é operado por <strong>Rhaideline Calazans</strong>, sob o nome comercial
          <strong> Calazans Lumina</strong>, com base em Framingham, Massachusetts, Estados Unidos.
          Ao navegar, preencher formulários ou comprar qualquer produto aqui, você concorda com estes termos.
          Se não concordar, não utilize o site.
        </p>
      </LegalSection>

      <LegalSection n={2} titulo="O que oferecemos">
        <p>
          <strong>Serviços de agência</strong> — criação de sites e landing pages, funis e automações em
          GoHighLevel, CRM com inteligência artificial no WhatsApp, gestão de redes sociais e otimização de
          Google Business Profile. Esses serviços são <strong>sempre orçados caso a caso</strong>: escopo,
          prazo, preço e forma de pagamento são definidos em proposta específica, que prevalece sobre este
          documento em caso de divergência.
        </p>
        <p>
          <strong>Cursos digitais</strong> — materiais em formato digital, de acesso imediato após a
          confirmação do pagamento.
        </p>
        <p>
          O conteúdo institucional do site tem caráter informativo e <strong>não constitui promessa de
          resultado</strong>. Os números apresentados em nosso portfólio referem-se a projetos específicos,
          em contextos específicos, e não representam garantia de desempenho equivalente.
        </p>
      </LegalSection>

      <LegalSection n={3} titulo="Compra de cursos e direito de arrependimento">
        <p>
          A compra de cursos é feita por processador de pagamento externo. O acesso é liberado após a
          confirmação do pagamento.
        </p>
        <p>
          <strong>Direito de arrependimento (art. 49 do Código de Defesa do Consumidor).</strong> Sendo uma
          compra realizada fora de estabelecimento comercial, o consumidor no Brasil pode desistir da
          contratação <strong>no prazo de 7 dias corridos</strong> contados da compra ou do recebimento do
          acesso, o que ocorrer por último. Nesse caso, os valores pagos são devolvidos integralmente,
          corrigidos. Para exercer esse direito, basta escrever para{' '}
          <a href="mailto:contato@lc.calazanslumina.com.br" className="text-brand-mint hover:text-brand-dark transition-colors">
            contato@lc.calazanslumina.com.br
          </a>{' '}
          dentro do prazo.
        </p>
        <p>
          Esse é um direito previsto em lei e independe de qualquer política comercial de garantia.
          Fora dessa hipótese, <strong>não há política de devolução</strong> para produtos digitais já
          acessados.
        </p>
      </LegalSection>

      <LegalSection n={4} titulo="Uso permitido e proibido">
        <p>Ao usar este site, você concorda em não:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>copiar, revender, redistribuir ou compartilhar o conteúdo dos cursos, no todo ou em parte;</li>
          <li>compartilhar credenciais de acesso a área restrita com terceiros;</li>
          <li>usar meios automatizados para extrair conteúdo do site em massa;</li>
          <li>tentar obter acesso não autorizado a qualquer sistema, conta ou dado;</li>
          <li>enviar, por meio dos formulários, conteúdo ilícito, ofensivo ou de terceiros sem autorização.</li>
        </ul>
        <p>
          O descumprimento pode acarretar suspensão imediata do acesso, sem prejuízo das medidas legais
          cabíveis.
        </p>
      </LegalSection>

      <LegalSection n={5} titulo="Propriedade intelectual">
        <p>
          Todo o conteúdo deste site — textos, layout, identidade visual, materiais dos cursos, código-fonte
          e marca <strong>Calazans Lumina</strong> — é protegido por direitos autorais e pertence à titular ou
          é usado sob licença.
        </p>
        <p>
          A compra de um curso concede <strong>licença de uso pessoal e intransferível</strong> do material.
          Não transfere titularidade nem autoriza reprodução, revenda, adaptação ou uso do conteúdo para
          treinar sistemas automatizados.
        </p>
        <p>
          Os cases exibidos em nosso{' '}
          <Link href="/portfolio" className="text-brand-mint hover:text-brand-dark transition-colors">portfólio</Link>{' '}
          referem-se a projetos executados para os respectivos clientes. Marcas e nomes de terceiros
          pertencem aos seus titulares e são citados apenas para identificar o trabalho realizado.
        </p>
      </LegalSection>

      <LegalSection n={6} titulo="Links e serviços de terceiros">
        <p>
          Este site contém links e integrações com serviços de terceiros — GoHighLevel, WhatsApp,
          processadores de pagamento, Google. Não controlamos esses serviços e não respondemos pelo conteúdo,
          pelas políticas ou pela disponibilidade deles. O uso de cada um se rege pelos termos do respectivo
          fornecedor.
        </p>
      </LegalSection>

      <LegalSection n={7} titulo="Limitação de responsabilidade">
        <p>
          O site é oferecido no estado em que se encontra. Buscamos mantê-lo disponível e correto, mas não
          garantimos operação ininterrupta nem ausência total de erros.
        </p>
        <p>
          Não respondemos por decisões de negócio tomadas com base no conteúdo informativo do site ou dos
          cursos, nem por resultados comerciais esperados e não alcançados. Nada nesta cláusula afasta as
          responsabilidades que a legislação consumerista aplicável imponha de forma inafastável.
        </p>
      </LegalSection>

      <LegalSection n={8} titulo="Dados pessoais">
        <p>
          O tratamento de dados pessoais está descrito na{' '}
          <Link href="/privacidade" className="text-brand-mint hover:text-brand-dark transition-colors">
            Política de Privacidade
          </Link>
          , e o uso de cookies na{' '}
          <Link href="/cookies" className="text-brand-mint hover:text-brand-dark transition-colors">
            Política de Cookies
          </Link>
          . Ambas integram estes Termos.
        </p>
      </LegalSection>

      <LegalSection n={9} titulo="Alterações">
        <p>
          Estes termos podem ser alterados a qualquer momento. A versão vigente é sempre a publicada nesta
          página, com a data de última atualização indicada no topo. O uso continuado do site após uma
          alteração significa concordância com a nova versão.
        </p>
      </LegalSection>

      <LegalSection n={10} titulo="Lei aplicável e foro">
        <p>
          Para consumidores domiciliados no Brasil, aplica-se a legislação brasileira, incluindo o Código de
          Defesa do Consumidor, sendo competente o foro do domicílio do consumidor. Para as demais relações,
          aplica-se a legislação do Estado de Massachusetts, Estados Unidos.
        </p>
      </LegalSection>
    </LegalDoc>
  )
}
