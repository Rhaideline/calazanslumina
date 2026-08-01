/* ⚠️ RASCUNHO — REQUER REVISÃO JURÍDICA ANTES DE PUBLICAR.
 *
 * Texto redigido a partir do que o site de fato coleta e para onde de fato
 * envia (formulário GoHighLevel, WhatsApp, processadores de pagamento).
 * Cobre LGPD (Lei 13.709/2018) para titulares no Brasil e 201 CMR 17.00 para
 * residentes de Massachusetts, porque a operação atende os dois mercados.
 *
 * NÃO cita CNPJ: a titular não possui pessoa jurídica registrada até
 * 31/07/2026. Se abrir MEI/CNPJ, acrescentar razão social e número aqui e no
 * bloco de identificação do Footer.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import LegalDoc, { LegalSection } from '@/components/LegalDoc'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Calazans Lumina',
  description:
    'Como a Calazans Lumina coleta, usa, compartilha e protege seus dados pessoais. Direitos do titular sob a LGPD (Lei 13.709/2018) e sob a legislação de Massachusetts.',
  alternates: { canonical: 'https://calazanslumina.com.br/privacidade' },
  openGraph: {
    title: 'Política de Privacidade | Calazans Lumina',
    description: 'Como tratamos seus dados pessoais — LGPD e 201 CMR 17.00.',
    url: 'https://calazanslumina.com.br/privacidade',
    type: 'article',
  },
}

export default function PrivacidadePage() {
  return (
    <LegalDoc
      titulo="Política de Privacidade"
      resumo="O que coletamos, por que coletamos, com quem compartilhamos e como você pede para apagar."
      atualizadoEm="31 de julho de 2026"
    >
      <LegalSection n={1} titulo="Quem trata seus dados">
        <p>
          O tratamento dos dados pessoais coletados neste site é feito por <strong>Rhaideline Calazans</strong>,
          que atua sob o nome comercial <strong>Calazans Lumina</strong>, com base em Framingham, Massachusetts,
          Estados Unidos. Para qualquer assunto relativo a dados pessoais — incluindo pedidos de acesso,
          correção ou exclusão — o canal é{' '}
          <a href="mailto:contato@lc.calazanslumina.com.br" className="text-brand-mint hover:text-brand-dark transition-colors">
            contato@lc.calazanslumina.com.br
          </a>.
        </p>
        <p>
          Como atendemos clientes no Brasil e nos Estados Unidos, aplicamos a esta política tanto a
          <strong> Lei Geral de Proteção de Dados (Lei 13.709/2018)</strong>, para titulares no Brasil, quanto o
          <strong> 201 CMR 17.00</strong>, regulamento de proteção de informações pessoais de residentes de
          Massachusetts.
        </p>
      </LegalSection>

      <LegalSection n={2} titulo="Quais dados coletamos">
        <p>
          <strong>Dados que você nos entrega.</strong> Quando você preenche o formulário de orçamento em qualquer
          página deste site, coletamos <strong>nome, e-mail e telefone</strong>. Se você acrescentar informações
          na mensagem — nome da empresa, cidade, o que precisa — essas informações também são registradas.
        </p>
        <p>
          <strong>Dados de compra.</strong> Ao comprar um curso, os dados de pagamento são coletados e
          processados <em>diretamente pelo processador de pagamento</em>. Nós não recebemos, não armazenamos e
          não temos acesso ao número do seu cartão.
        </p>
        <p>
          <strong>Dados de navegação.</strong> Coletamos dados técnicos gerados pelo seu acesso: endereço IP,
          tipo de navegador e dispositivo, páginas visitadas, tempo de permanência e a origem do acesso. Esses
          dados vêm de cookies e tecnologias similares — veja a{' '}
          <Link href="/cookies" className="text-brand-mint hover:text-brand-dark transition-colors">Política de Cookies</Link>.
        </p>
        <p>
          <strong>Não coletamos dados sensíveis.</strong> Este site não pede origem racial ou étnica, convicção
          religiosa, opinião política, filiação sindical, dado genético, biométrico ou sobre saúde e vida sexual.
          Não solicite esse tipo de informação nos campos livres do formulário.
        </p>
      </LegalSection>

      <LegalSection n={3} titulo="Por que tratamos esses dados (base legal)">
        <p>
          <strong>Para responder você.</strong> Dados do formulário são usados para retornar seu contato,
          entender sua necessidade e enviar proposta. Base legal: procedimentos preliminares relacionados a
          contrato, a pedido do titular (LGPD, art. 7º, V).
        </p>
        <p>
          <strong>Para executar o que foi contratado.</strong> Se você vira cliente, os dados são usados para
          prestar o serviço e emitir cobrança. Base legal: execução de contrato (art. 7º, V).
        </p>
        <p>
          <strong>Para melhorar o site.</strong> Dados de navegação agregados nos mostram quais páginas
          funcionam. Base legal: legítimo interesse (art. 7º, IX), sempre respeitando seus direitos.
        </p>
        <p>
          <strong>Para enviar conteúdo e ofertas.</strong> Só com o seu consentimento, dado no momento do
          cadastro (art. 7º, I). Você pode retirar esse consentimento a qualquer momento, e o link de
          descadastro está em todo e-mail que enviamos.
        </p>
      </LegalSection>

      <LegalSection n={4} titulo="Com quem compartilhamos">
        <p>
          Não vendemos seus dados. Não cedemos sua base para terceiros fazerem marketing próprio.
          Compartilhamos apenas com os prestadores necessários para o site e o atendimento funcionarem:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>GoHighLevel (LeadConnector)</strong> — CRM que recebe os formulários e hospeda o histórico
            de conversas. Servidores nos Estados Unidos.
          </li>
          <li>
            <strong>WhatsApp (Meta)</strong> — quando você inicia a conversa pelo botão de WhatsApp, o conteúdo
            passa pela infraestrutura da Meta e fica sujeito à política de privacidade dela.
          </li>
          <li>
            <strong>Processadores de pagamento</strong> — recebem os dados necessários para cobrar a compra dos
            cursos.
          </li>
          <li>
            <strong>Vercel</strong> — hospedagem do site, com logs técnicos de acesso.
          </li>
          <li>
            <strong>Google</strong> — métricas de audiência e o perfil da empresa no Google.
          </li>
        </ul>
        <p>
          Também podemos compartilhar dados quando houver <strong>obrigação legal</strong> ou ordem de
          autoridade competente.
        </p>
      </LegalSection>

      <LegalSection n={5} titulo="Transferência internacional">
        <p>
          Nossa operação é sediada nos Estados Unidos e os prestadores acima mantêm servidores fora do Brasil.
          Isso significa que, se você é titular no Brasil, <strong>seus dados são transferidos para os Estados
          Unidos</strong>. A transferência ocorre para a execução do contrato ou de procedimentos preliminares
          a seu pedido (LGPD, art. 33, VI e IX). Ao enviar o formulário, você está ciente disso.
        </p>
      </LegalSection>

      <LegalSection n={6} titulo="Por quanto tempo guardamos">
        <p>
          Dados de contato de quem pediu orçamento e não fechou: <strong>até 2 anos</strong> a partir do último
          contato, para retomar a conversa. Dados de clientes: pelo prazo do contrato e pelo período exigido
          pela legislação fiscal aplicável depois do encerramento. Dados de navegação: conforme a duração de
          cada cookie, descrita na Política de Cookies.
        </p>
        <p>Passados esses prazos, os dados são eliminados ou anonimizados.</p>
      </LegalSection>

      <LegalSection n={7} titulo="Seus direitos">
        <p>Sob a LGPD, você pode a qualquer momento:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>confirmar se tratamos dados seus e <strong>acessar</strong> esses dados;</li>
          <li><strong>corrigir</strong> dados incompletos, inexatos ou desatualizados;</li>
          <li>pedir <strong>anonimização, bloqueio ou eliminação</strong> de dados desnecessários ou tratados fora da lei;</li>
          <li>pedir a <strong>portabilidade</strong> a outro fornecedor;</li>
          <li><strong>eliminar</strong> dados tratados com base no seu consentimento;</li>
          <li>saber <strong>com quem compartilhamos</strong> seus dados;</li>
          <li><strong>revogar o consentimento</strong>;</li>
          <li><strong>opor-se</strong> a tratamento feito com base em legítimo interesse.</li>
        </ul>
        <p>
          Para exercer qualquer um deles, escreva para{' '}
          <a href="mailto:contato@lc.calazanslumina.com.br" className="text-brand-mint hover:text-brand-dark transition-colors">
            contato@lc.calazanslumina.com.br
          </a>. Respondemos em até <strong>15 dias</strong>. Podemos pedir uma confirmação de identidade antes
          de atender — é uma proteção contra alguém pedir seus dados se passando por você.
        </p>
      </LegalSection>

      <LegalSection n={8} titulo="Segurança">
        <p>
          O site trafega inteiramente sob HTTPS. O acesso ao CRM onde ficam os dados de contato é restrito e
          protegido por autenticação. Em linha com o 201 CMR 17.00, limitamos o acesso às informações pessoais
          a quem precisa delas para trabalhar e revisamos periodicamente esses acessos.
        </p>
        <p>
          Nenhum sistema é 100% inviolável. Se ocorrer um incidente de segurança que possa acarretar risco
          relevante a você, <strong>comunicaremos você e a Autoridade Nacional de Proteção de Dados</strong>,
          conforme o art. 48 da LGPD, e cumpriremos as obrigações de notificação aplicáveis em Massachusetts.
        </p>
      </LegalSection>

      <LegalSection n={9} titulo="Crianças e adolescentes">
        <p>
          Este site é destinado a maiores de 18 anos e não direcionamos conteúdo a crianças. Não coletamos
          intencionalmente dados de menores de 18 anos. Se identificarmos um cadastro nessa situação, os dados
          são eliminados. Se você é responsável e acredita que um menor nos enviou dados, escreva para o e-mail
          acima.
        </p>
      </LegalSection>

      <LegalSection n={10} titulo="Mudanças nesta política">
        <p>
          Esta política pode ser atualizada. Quando isso acontecer, a data de última atualização no topo desta
          página muda. Se a alteração for significativa — nova finalidade ou novo compartilhamento — avisaremos
          pelos canais de contato que você nos deu.
        </p>
      </LegalSection>
    </LegalDoc>
  )
}
