import type { CursoInterativo } from '@/components/curso-viewer/types'

export const cursosInterativosExtras: CursoInterativo[] = [
  // ================================================================
  // CURSO 5 — Redes Sociais que Vendem
  // ================================================================
  {
    slug: 'redes-sociais-que-vendem',
    nome: 'Redes Sociais que Vendem',
    modulos: [
      // ============================================================
      // MÓDULO 1 — Estratégia Info-First
      // ============================================================
      {
        titulo: 'Estratégia Info-First',
        slides: [
          {
            type: 'content',
            title: 'O que mudou nas redes sociais em 2026',
            body: 'Em 2026, o algoritmo do Instagram e do TikTok mudou radicalmente: conteúdo informativo agora tem prioridade sobre conteúdo puramente promocional. As plataformas perceberam que os usuários querem aprender, não apenas comprar. Isso significa que perfis que ensinam algo útil crescem muito mais rápido do que perfis que só postam ofertas. A era do "compre agora" ficou para trás — bem-vindo à era do "aprenda comigo".',
            tip: 'Regra de ouro: para cada post de venda, faça pelo menos 4 posts educativos. Essa proporção 4:1 é o que funciona em 2026.',
          },
          {
            type: 'diagram',
            title: 'Plataformas que Você Precisa Dominar',
            diagramType: 'icons',
            data: {
              items: [
                { icon: 'instagram', label: 'Instagram' },
                { icon: 'facebook', label: 'Facebook' },
                { icon: 'tiktok', label: 'TikTok' },
                { icon: 'youtube', label: 'YouTube' },
                { icon: 'whatsapp', label: 'WhatsApp' },
              ],
            },
            caption: 'As 5 plataformas essenciais para vender nas redes sociais em 2026',
          },
          {
            type: 'content',
            title: 'Por que conteúdo informativo vende mais',
            body: 'Quando você ensina algo útil, as pessoas passam a confiar em você como especialista. Essa confiança é o que faz alguém comprar de você e não do concorrente. Pense assim: quem te ensinou a resolver um problema, provavelmente é a melhor pessoa para vender a solução completa. Além disso, conteúdo educativo é salvo e compartilhado, o que aumenta seu alcance de forma gratuita. É a estratégia mais barata e eficaz que existe.',
            tip: 'Antes de criar qualquer post, pergunte: "Isso resolve alguma dúvida real do meu cliente?" Se a resposta for sim, publique!',
          },
          {
            type: 'content',
            title: 'Autenticidade vs. perfeição: o que funciona de verdade',
            body: 'Muitos empreendedores perdem tempo tentando fazer vídeos perfeitos com iluminação profissional e cenários impecáveis. A verdade é que o público prefere pessoas reais mostrando sua rotina de verdade. Um vídeo gravado com celular no seu local de trabalho gera mais confiança do que uma produção cara que parece comercial de TV. Erros, bastidores e momentos reais humanizam a sua marca e criam conexão emocional.',
            tip: 'Comece gravando vídeos simples com seu celular. Use a câmera frontal, olhe para a câmera e fale como se estivesse conversando com um amigo.',
          },
          {
            type: 'content',
            title: 'Salvamentos e compartilhamentos: os novos KPIs',
            body: 'Esqueça curtidas como métrica principal. Em 2026, os indicadores que realmente importam são salvamentos e compartilhamentos. Quando alguém salva seu post, está dizendo que aquele conteúdo é tão bom que quer ver de novo. Quando compartilha, está recomendando você para o círculo de amizades. Essas duas ações fazem o algoritmo mostrar seu conteúdo para muito mais gente. Foque em criar posts que as pessoas queiram guardar ou enviar para alguém.',
            tip: 'No final dos seus posts, adicione frases como "Salve para consultar depois" ou "Envie para quem precisa saber disso". Isso funciona de verdade!',
          },
          {
            type: 'quiz',
            question: 'Qual é a proporção ideal entre posts educativos e posts de venda em 2026?',
            options: [
              '1 educativo para cada 4 de venda',
              '4 educativos para cada 1 de venda',
              '50% educativos e 50% de venda',
              'Só fazer posts de venda direta',
            ],
            correctIndex: 1,
            explanation: 'A proporção ideal é 4:1 — para cada post de venda, faça pelo menos 4 posts educativos. Isso constrói confiança antes de pedir a compra.',
          },
          {
            type: 'quiz',
            question: 'Quais são as métricas mais importantes para crescer nas redes sociais em 2026?',
            options: [
              'Número de seguidores e curtidas',
              'Salvamentos e compartilhamentos',
              'Quantidade de stories por dia',
              'Número de hashtags usadas',
            ],
            correctIndex: 1,
            explanation: 'Salvamentos e compartilhamentos são os KPIs mais importantes porque indicam que o conteúdo é útil e fazem o algoritmo distribuir seu post para mais pessoas.',
          },
          {
            type: 'summary',
            title: 'Resumo do Módulo 1',
            points: [
              'Em 2026, conteúdo informativo tem prioridade no algoritmo sobre posts puramente promocionais',
              'Ensinar algo útil constrói confiança e faz as pessoas comprarem de você',
              'Autenticidade supera perfeição: vídeos reais com celular geram mais conexão',
              'Salvamentos e compartilhamentos são os KPIs que realmente importam',
              'Use a proporção 4:1 — quatro posts educativos para cada um de venda',
              'Termine seus posts com um convite para salvar ou compartilhar',
            ],
          },
        ],
      },

      // ============================================================
      // MÓDULO 2 — Criação de Conteúdo
      // ============================================================
      {
        titulo: 'Criação de Conteúdo',
        slides: [
          {
            type: 'content',
            title: 'Tipos de post que funcionam de verdade',
            body: 'Existem 5 formatos que geram mais resultados em 2026: listas de dicas práticas, tutoriais passo a passo, antes e depois, mitos vs. verdades e bastidores do seu negócio. Cada formato atende a um objetivo diferente — listas educam, tutoriais mostram autoridade, antes e depois provam resultados. O segredo é alternar entre esses formatos para não cansar a audiência. Teste todos e veja qual gera mais salvamentos no seu nicho.',
            tip: 'Comece pela lista de dicas: é o formato mais fácil de criar e costuma ter ótimo desempenho. Exemplo: "5 erros que todo iniciante comete".',
          },
          {
            type: 'content',
            title: 'Templates de legenda que convertem',
            body: 'Uma boa legenda segue uma estrutura simples: gancho, desenvolvimento e chamada para ação (CTA). O gancho é a primeira frase que faz a pessoa parar de rolar o feed — use perguntas, dados surpreendentes ou afirmações polêmicas. O desenvolvimento entrega o valor prometido no gancho. A CTA diz o que a pessoa deve fazer: salvar, comentar, compartilhar ou clicar no link da bio. Essa estrutura funciona para qualquer nicho.',
            tip: 'Exemplos de ganchos que funcionam: "Você está jogando dinheiro fora se..." / "90% dos empreendedores não sabem que..." / "Pare de fazer isso agora!"',
          },
          {
            type: 'content',
            title: 'Carrosséis educativos: o formato campeão de salvamentos',
            body: 'Carrosséis (posts com várias imagens que a pessoa desliza) são o formato com maior taxa de salvamento no Instagram. A estrutura ideal tem 7 a 10 slides: capa com título chamativo, slides de conteúdo com uma ideia por slide, e slide final com CTA. Use fontes grandes que sejam legíveis no celular e limite cada slide a no máximo 3 linhas de texto. Cores contrastantes e ícones simples ajudam a manter a atenção.',
            tip: 'Use o Canva gratuito para criar carrosséis bonitos em minutos. Procure por templates de "Carrossel Instagram" e adapte com suas cores.',
          },
          {
            type: 'diagram',
            title: 'Taxa de Engajamento por Plataforma',
            diagramType: 'barchart',
            data: {
              items: [
                { label: 'TikTok', value: 85 },
                { label: 'Reels', value: 72 },
                { label: 'Carrossel', value: 65 },
                { label: 'Stories', value: 50 },
                { label: 'Post Foto', value: 30 },
                { label: 'Facebook', value: 20 },
              ],
            },
            caption: 'Engajamento médio por formato em 2026 — Reels e Carrosséis lideram',
          },
          {
            type: 'content',
            title: 'Reels curtos com dados: conteúdo que viraliza',
            body: 'Reels de 15 a 30 segundos com dados surpreendentes são o tipo de vídeo que mais viraliza em 2026. A fórmula é simples: comece com um dado impactante, explique por que isso importa, e termine com uma dica prática. Não precisa de edição profissional — texto na tela com sua narração já funciona. Use legendas automáticas porque a maioria assiste sem som. Poste pelo menos 3 Reels por semana para ganhar tração.',
            tip: 'Pesquise dados do seu nicho no Google e no IBGE. Exemplo para restaurantes: "83% das pessoas escolhem onde comer pelo Instagram".',
          },
          {
            type: 'quiz',
            question: 'Qual é a estrutura ideal de uma legenda que converte?',
            options: [
              'Texto longo com muitas hashtags no início',
              'Gancho chamativo + desenvolvimento + chamada para ação (CTA)',
              'Apenas emojis e hashtags',
              'Descrição detalhada do produto com preço',
            ],
            correctIndex: 1,
            explanation: 'A estrutura gancho + desenvolvimento + CTA funciona para qualquer nicho. O gancho para a rolagem, o desenvolvimento entrega valor e a CTA direciona a ação.',
          },
          {
            type: 'quiz',
            question: 'Qual formato de post tem a maior taxa de salvamento no Instagram?',
            options: [
              'Stories com enquetes',
              'Foto única com legenda longa',
              'Carrosséis educativos',
              'Reels de dança',
            ],
            correctIndex: 2,
            explanation: 'Carrosséis educativos com 7 a 10 slides são campeões de salvamento porque entregam muito valor em um formato fácil de consumir e guardar para consulta.',
          },
          {
            type: 'summary',
            title: 'Resumo do Módulo 2',
            points: [
              'Os 5 formatos campeões: listas de dicas, tutoriais, antes e depois, mitos vs. verdades e bastidores',
              'Toda legenda precisa de gancho + desenvolvimento + chamada para ação',
              'Carrosséis educativos de 7-10 slides são campeões de salvamento',
              'Reels curtos (15-30s) com dados surpreendentes viralizam mais',
              'Use o Canva gratuito para criar conteúdo visual profissional',
              'Sempre adicione legendas automáticas nos vídeos — a maioria assiste sem som',
            ],
          },
        ],
      },

      // ============================================================
      // MÓDULO 3 — Planejamento e Execução
      // ============================================================
      {
        titulo: 'Planejamento e Execução',
        slides: [
          {
            type: 'content',
            title: 'Calendário editorial mensal: como montar o seu',
            body: 'Um calendário editorial é um planejamento de tudo que você vai postar no mês. Comece definindo 4 pilares de conteúdo do seu negócio — por exemplo, um restaurante pode ter: receitas, bastidores, dicas de culinária e promoções. Distribua esses pilares ao longo da semana para ter variedade. Use uma planilha simples do Google Sheets ou até o bloco de notas do celular para organizar. Planejar um mês inteiro de uma vez economiza horas de trabalho.',
            tip: 'No primeiro domingo de cada mês, reserve 1 hora para planejar todo o conteúdo do mês. Isso elimina aquela sensação de "não sei o que postar hoje".',
          },
          {
            type: 'diagram',
            title: 'Planejamento Semanal de Conteúdo',
            diagramType: 'calendar',
            data: {
              days: [
                'Dica rápida (carrossel)',
                'Bastidores do negócio',
                'Produção em lote',
                'Tutorial / Passo a passo',
                'Mitos vs. Verdades',
                'Reels com dados',
                'Descanso / Análise',
              ],
            },
            caption: 'Modelo de calendário semanal equilibrado com os 4 pilares de conteúdo',
          },
          {
            type: 'content',
            title: 'Produção em lote: crie uma semana de conteúdo em 2 horas',
            body: 'Produção em lote (batch content) significa criar vários conteúdos de uma vez só em vez de um por dia. Separe um dia da semana só para isso: escreva todas as legendas, grave todos os vídeos e monte todos os designs. Depois, agende tudo de uma vez usando ferramentas gratuitas como o Meta Business Suite. Essa técnica economiza até 70% do seu tempo porque você entra em "modo criativo" e não precisa alternar entre tarefas.',
            tip: 'Quartas-feiras são ótimas para produção em lote: você já sabe o que funcionou no início da semana e pode ajustar o conteúdo do restante.',
          },
          {
            type: 'content',
            title: 'Ferramentas gratuitas de design e agendamento',
            body: 'Você não precisa gastar nada para ter um perfil profissional. O Canva gratuito tem milhares de templates para posts, carrosséis e stories. Para editar vídeos, use o CapCut, que é gratuito e tem legendas automáticas. Para agendar posts, o Meta Business Suite (antigo Facebook Creator Studio) permite agendar posts no Instagram e Facebook de graça. Essas 3 ferramentas juntas resolvem 90% das necessidades de qualquer pequeno negócio.',
            tip: 'Crie uma conta no Canva com o mesmo email do seu negócio. Assim, todos os designs ficam organizados em um só lugar.',
          },
          {
            type: 'content',
            title: 'Melhores horários para postar',
            body: 'Os melhores horários dependem do seu público, mas existem padrões gerais que funcionam para a maioria dos negócios brasileiros. De terça a quinta, entre 11h-13h e 18h-20h, são os horários com maior engajamento. Finais de semana funcionam bem entre 9h-11h. Porém, o mais importante é ser consistente: postar nos mesmos dias e horários cria o hábito no seu público. Depois de 30 dias, consulte o Instagram Insights para descobrir quando o SEU público está online.',
            tip: 'Vá até seu perfil profissional > Insights > Seu Público > Horários mais ativos. Esses são os melhores horários PARA VOCÊ, não os genéricos.',
          },
          {
            type: 'quiz',
            question: 'O que é produção em lote (batch content)?',
            options: [
              'Postar o mesmo conteúdo em todas as redes ao mesmo tempo',
              'Criar vários conteúdos de uma vez só em um dia dedicado',
              'Comprar pacotes de posts prontos na internet',
              'Copiar conteúdo de concorrentes em grande quantidade',
            ],
            correctIndex: 1,
            explanation: 'Produção em lote é separar um dia para criar vários conteúdos de uma vez (legendas, vídeos, designs) e depois agendar tudo. Isso economiza até 70% do tempo.',
          },
          {
            type: 'checklist',
            title: 'Checklist: seu kit gratuito de ferramentas',
            description: 'Certifique-se de ter conta criada nestas ferramentas gratuitas:',
            items: [
              'Canva — para criar posts, carrosséis e stories',
              'CapCut — para editar vídeos e adicionar legendas automáticas',
              'Meta Business Suite — para agendar posts no Instagram e Facebook',
              'Google Sheets — para montar seu calendário editorial mensal',
              'Instagram Insights — para descobrir os melhores horários do seu público',
            ],
          },
          {
            type: 'summary',
            title: 'Resumo do Módulo 3',
            points: [
              'Monte um calendário editorial mensal com 4 pilares de conteúdo do seu negócio',
              'Use produção em lote: crie todo o conteúdo da semana em um só dia',
              'Ferramentas gratuitas essenciais: Canva, CapCut e Meta Business Suite',
              'Melhores horários gerais: terça a quinta, 11h-13h e 18h-20h',
              'Consulte o Instagram Insights para descobrir os horários ideais do SEU público',
              'Consistência é mais importante que perfeição — poste nos mesmos dias e horários',
            ],
          },
        ],
      },

      // ============================================================
      // MÓDULO 4 — Crescimento e Métricas
      // ============================================================
      {
        titulo: 'Crescimento e Métricas',
        slides: [
          {
            type: 'content',
            title: 'Hashtags estratégicas: menos é mais',
            body: 'Em 2026, usar 30 hashtags genéricas não funciona mais. O ideal é usar entre 5 e 10 hashtags bem escolhidas. Misture hashtags grandes (acima de 1 milhão de posts), médias (100 mil a 1 milhão) e pequenas (abaixo de 100 mil). As pequenas são as mais importantes porque nelas você compete com menos gente e aparece por mais tempo. Sempre inclua hashtags específicas do seu nicho e da sua cidade para atrair clientes locais.',
            tip: 'Crie uma lista de 30 hashtags do seu nicho divididas em grandes, médias e pequenas. Para cada post, selecione 3 de cada grupo.',
          },
          {
            type: 'diagram',
            title: 'Funil de Vendas nas Redes Sociais',
            diagramType: 'funnel',
            data: {
              stages: [
                { label: 'Alcance', desc: 'Posts e Reels atraem novos seguidores' },
                { label: 'Engajamento', desc: 'Curtidas, salvamentos e comentários' },
                { label: 'Confiança', desc: 'Conteúdo educativo constrói autoridade' },
                { label: 'Conversa', desc: 'DMs e WhatsApp com leads quentes' },
                { label: 'Venda', desc: 'Cliente compra e indica para amigos' },
              ],
            },
            caption: 'O caminho do seguidor até a venda — cada etapa alimenta a próxima',
          },
          {
            type: 'content',
            title: 'Engajamento autêntico: a moeda das redes sociais',
            body: 'Engajamento não é só responder comentários — é construir relacionamentos reais. Reserve 15 minutos por dia para comentar nos perfis dos seus clientes ideais (não concorrentes). Responda TODOS os comentários e DMs em até 1 hora. Use enquetes e caixas de perguntas nos stories para gerar conversa. Quando alguém marca seu negócio, reposte e agradeça publicamente. Essas pequenas ações constroem uma comunidade que compra e indica.',
            tip: 'Defina um alarme para 3 momentos do dia: manhã, almoço e noite. Em cada um, gaste 5 minutos interagindo com seu público.',
          },
          {
            type: 'content',
            title: 'Quando e como impulsionar posts (gastar com anúncios)',
            body: 'Não impulsione qualquer post — impulsione apenas os que já tiveram bom desempenho orgânico. Se um post teve o dobro de salvamentos ou compartilhamentos do que a sua média, ele merece ser impulsionado. Comece com R$ 10 por dia, durante 3 a 5 dias, para o público da sua cidade. Use o objetivo "mais visitas ao perfil" para ganhar seguidores qualificados, ou "mais mensagens" para gerar vendas diretas. Nunca impulsione pelo botão do Instagram — use o Gerenciador de Anúncios para ter mais controle.',
            tip: 'Espere o post ter pelo menos 24 horas de alcance orgânico antes de impulsionar. Se ele já está indo bem sozinho, o anúncio vai potencializar o resultado.',
          },
          {
            type: 'content',
            title: 'Relatórios simples: acompanhe seus resultados sem complicação',
            body: 'Todo mês, anote em uma planilha simples: número de seguidores, alcance médio por post, total de salvamentos, total de compartilhamentos e número de mensagens recebidas. Compare com o mês anterior para ver se está crescendo. Não se preocupe com métricas complicadas — essas 5 números contam toda a história. Se salvamentos e mensagens estão subindo, suas vendas vão subir também. Esse relatório leva 10 minutos por mês e vale ouro.',
            tip: 'Faça seu relatório todo dia 1 do mês, olhando os dados do mês anterior no Instagram Insights. Anote em uma planilha simples do Google Sheets.',
          },
          {
            type: 'quiz',
            question: 'Quantas hashtags são ideais por post em 2026?',
            options: [
              '30 hashtags genéricas para alcançar o máximo de pessoas',
              '5 a 10 hashtags bem escolhidas, misturando tamanhos',
              'Nenhuma hashtag — elas não funcionam mais',
              'Apenas 1 hashtag, a mais popular possível',
            ],
            correctIndex: 1,
            explanation: 'O ideal é usar entre 5 e 10 hashtags estratégicas, misturando grandes, médias e pequenas. Hashtags menores são especialmente valiosas porque você compete com menos gente.',
          },
          {
            type: 'quiz',
            question: 'Qual é a melhor estratégia para impulsionar posts?',
            options: [
              'Impulsionar todos os posts assim que publicar',
              'Impulsionar apenas posts que já tiveram bom desempenho orgânico',
              'Nunca impulsionar — só crescimento orgânico funciona',
              'Impulsionar apenas posts de venda direta',
            ],
            correctIndex: 1,
            explanation: 'Impulsione apenas posts que já se destacaram organicamente (dobro de salvamentos/compartilhamentos da média). Se o post já está performando bem, o anúncio vai potencializar o resultado.',
          },
          {
            type: 'checklist',
            title: 'Checklist: relatório mensal de redes sociais',
            description: 'Anote esses 5 números todo dia 1 do mês:',
            items: [
              'Número total de seguidores (e quanto cresceu)',
              'Alcance médio por post',
              'Total de salvamentos no mês',
              'Total de compartilhamentos no mês',
              'Número de mensagens diretas recebidas',
            ],
          },
          {
            type: 'summary',
            title: 'Resumo do Módulo 4',
            points: [
              'Use 5-10 hashtags estratégicas misturando tamanhos grandes, médios e pequenos',
              'Reserve 15 minutos por dia para engajamento autêntico com seu público',
              'Impulsione apenas posts que já tiveram destaque orgânico, começando com R$ 10/dia',
              'Acompanhe 5 métricas simples por mês: seguidores, alcance, salvamentos, compartilhamentos e DMs',
              'Use o Gerenciador de Anúncios em vez do botão de impulsionar do Instagram',
              'Consistência e relacionamento genuíno valem mais do que qualquer truque de algoritmo',
            ],
          },
        ],
      },
    ],
  },

  // ================================================================
  // CURSO 6 — Funis de Vendas Simplificado
  // ================================================================
  {
    slug: 'funis-de-vendas-simplificado',
    nome: 'Funis de Vendas Simplificado',
    modulos: [
      // ============================================================
      // MÓDULO 1 — Fundamentos de Funil
      // ============================================================
      {
        titulo: 'Fundamentos de Funil',
        slides: [
          {
            type: 'content',
            title: 'O que é um funil de vendas (explicação simples)',
            body: 'Um funil de vendas é o caminho que uma pessoa percorre desde o momento em que descobre seu negócio até o momento em que compra de você. Chama-se "funil" porque muitas pessoas entram pela parte de cima (te descobrem), mas apenas uma parte delas vai comprando ao longo do caminho. Pense como uma loja física: muitas pessoas passam na frente, algumas entram, menos experimentam, e poucas compram. O funil digital é exatamente isso, mas organizado estrategicamente para aumentar as chances de venda.',
            tip: 'Não se assuste com o termo "funil". É simplesmente o caminho que seu cliente percorre. Você provavelmente já tem um funil, só não sabia o nome!',
          },
          {
            type: 'content',
            title: 'Topo, meio e fundo: as 3 etapas do funil',
            body: 'O funil tem 3 etapas claras. O Topo (descoberta) é quando a pessoa te encontra pela primeira vez — através de um post, anúncio ou indicação. O Meio (consideração) é quando ela já te conhece e está avaliando se vale a pena comprar de você — ela lê seus conteúdos, assiste seus vídeos e compara com outros. O Fundo (decisão) é quando ela está pronta para comprar e só precisa de um empurrãozinho final. Cada etapa precisa de um tipo diferente de conteúdo e abordagem.',
            tip: 'Topo = atrair atenção com conteúdo educativo. Meio = construir confiança com provas sociais. Fundo = facilitar a compra com oferta irresistível.',
          },
          {
            type: 'diagram',
            title: 'O Funil de Vendas Clássico',
            diagramType: 'funnel',
            data: {
              stages: [
                { label: 'Topo (Descoberta)', desc: 'Atrai atenção com conteúdo educativo e anúncios' },
                { label: 'Meio (Consideração)', desc: 'Constrói confiança com provas sociais e valor' },
                { label: 'Fundo (Decisão)', desc: 'Apresenta oferta irresistível com urgência' },
                { label: 'Conversão', desc: 'Cliente compra e se torna promotor da marca' },
              ],
            },
            caption: 'Muitas pessoas entram pelo topo, mas só as mais qualificadas chegam à conversão',
          },
          {
            type: 'content',
            title: 'A jornada do cliente: do desconhecido ao fã',
            body: 'Imagine a jornada da Maria: ela vê um Reel seu com uma dica útil (topo). Curiosa, ela visita seu perfil e segue você. Nos dias seguintes, ela vê mais conteúdos seus e começa a confiar na sua expertise (meio). Então você publica um depoimento de um cliente satisfeito, e a Maria pensa: "quero isso para mim também". Ela clica no link da bio e compra (fundo). Depois da compra, ela fica tão satisfeita que indica para 3 amigas. Esse é o ciclo completo — e ele pode ser planejado.',
            tip: 'Mapeie essa jornada para o SEU negócio: como as pessoas te descobrem? O que as convence? O que as faz comprar? Anote as respostas.',
          },
          {
            type: 'content',
            title: 'Exemplos reais de funis que funcionam',
            body: 'Uma nutricionista atrai com Reels de receitas saudáveis (topo), oferece um e-book gratuito "7 Dias de Cardápio" em troca do email (meio), e depois envia uma sequência de emails com depoimentos e oferta de consulta (fundo). Uma loja de roupas atrai com looks do dia no Instagram (topo), leva para o WhatsApp com "avise-me quando chegar" (meio), e manda mensagem personalizada quando o produto chega (fundo). Os funis são simples — o segredo é ter cada etapa funcionando.',
            tip: 'Comece com o funil mais simples possível: rede social > WhatsApp > venda. Depois, vá adicionando etapas conforme for crescendo.',
          },
          {
            type: 'diagram',
            title: 'Jornada do Cliente — Passo a Passo',
            diagramType: 'flowchart',
            data: {
              steps: [
                'Vê um Reel ou post educativo',
                'Visita o perfil e segue',
                'Consome mais conteúdos e confia',
                'Clica no link da bio ou manda DM',
                'Compra e indica para amigos',
              ],
            },
            caption: 'O caminho real que um cliente percorre — da descoberta até a indicação',
          },
          {
            type: 'quiz',
            question: 'Por que o processo de vendas é chamado de "funil"?',
            options: [
              'Porque precisa de um software em formato de funil',
              'Porque muitas pessoas entram pelo topo, mas menos compram no fundo',
              'Porque funciona apenas em cozinhas e restaurantes',
              'Porque o cliente precisa passar por um filtro de cadastro',
            ],
            correctIndex: 1,
            explanation: 'O formato de funil representa que muitas pessoas descobrem seu negócio (topo largo), mas apenas uma parte delas percorre todo o caminho até a compra (fundo estreito).',
          },
          {
            type: 'quiz',
            question: 'Qual tipo de conteúdo é ideal para o TOPO do funil?',
            options: [
              'Oferta com desconto e link de compra',
              'Conteúdo educativo que atrai atenção de novas pessoas',
              'Email com proposta comercial detalhada',
              'Mensagem de WhatsApp pedindo o pagamento',
            ],
            correctIndex: 1,
            explanation: 'No topo do funil, o objetivo é atrair pessoas novas. Conteúdo educativo e útil é o melhor caminho porque gera interesse sem pressão de compra.',
          },
          {
            type: 'summary',
            title: 'Resumo do Módulo 1',
            points: [
              'Funil de vendas é o caminho que o cliente percorre desde a descoberta até a compra',
              'As 3 etapas: Topo (descoberta), Meio (consideração) e Fundo (decisão)',
              'Cada etapa precisa de conteúdo diferente: educativo, prova social e oferta',
              'A jornada do cliente pode ser planejada e otimizada estrategicamente',
              'Comece com o funil mais simples: rede social > WhatsApp > venda',
            ],
          },
        ],
      },

      // ============================================================
      // MÓDULO 2 — Landing Pages
      // ============================================================
      {
        titulo: 'Landing Pages',
        slides: [
          {
            type: 'content',
            title: 'O que é uma landing page e por que ela é essencial',
            body: 'Uma landing page (página de aterrissagem) é uma página da internet com um único objetivo: converter o visitante em lead ou cliente. Diferente de um site normal com vários links e menus, a landing page não tem distração — tem apenas uma oferta e um botão de ação. Pense nela como um vendedor focado que só fala de um produto. Quando você roda um anúncio ou divulga um link na bio, a landing page é onde a pessoa "aterrissa". Sem ela, você perde vendas porque o visitante se distrai.',
            tip: 'Você pode criar landing pages gratuitas usando ferramentas como Carrd, Mailchimp ou até o próprio Canva (com link de site). Não precisa saber programar!',
          },
          {
            type: 'content',
            title: 'Títulos que convertem: a frase mais importante da página',
            body: 'O título da sua landing page é responsável por 80% da decisão do visitante de continuar lendo ou sair. Um bom título comunica o benefício principal em poucas palavras. A fórmula mais eficaz é: resultado desejado + prazo + sem objeção. Exemplo: "Emagreça 5kg em 30 dias sem passar fome". Evite títulos vagos como "Bem-vindo ao meu site". O visitante precisa entender em 3 segundos o que vai ganhar ali.',
            tip: 'Escreva 10 opções de título e peça para 5 pessoas escolherem o melhor. A opinião de pessoas reais vale mais do que qualquer teoria.',
          },
          {
            type: 'diagram',
            title: 'Com Funil vs. Sem Funil',
            diagramType: 'comparison',
            data: {
              leftLabel: 'Sem Funil',
              rightLabel: 'Com Funil',
              leftItems: [
                'Venda direta e fria',
                'Cliente desconfia e sai',
                'Perde leads por falta de follow-up',
                'Sem dados para melhorar',
              ],
              rightItems: [
                'Educa antes de vender',
                'Confiança construída com conteúdo',
                'Automação nutre leads 24h/dia',
                'Métricas claras em cada etapa',
              ],
            },
            caption: 'O funil transforma visitantes desconfiados em clientes fiéis',
          },
          {
            type: 'content',
            title: 'Formulários otimizados: peça apenas o essencial',
            body: 'Quanto mais campos seu formulário tiver, menos pessoas vão preencher. Cada campo extra reduz a conversão em aproximadamente 10%. Para capturar leads, peça apenas nome e email (ou WhatsApp). Para vendas, peça apenas o necessário para a transação. Coloque o formulário acima da "dobra" da página (visível sem rolar). Use botões com cores contrastantes e textos de ação como "Quero Receber" em vez de "Enviar". Formulários simples convertem muito mais.',
            tip: 'Teste pedir apenas o WhatsApp em vez do email. No Brasil, as pessoas respondem mais pelo WhatsApp e a taxa de conversão costuma ser maior.',
          },
          {
            type: 'content',
            title: 'Teste A/B básico: descubra o que funciona melhor',
            body: 'Teste A/B é criar duas versões da mesma página com uma única diferença e ver qual converte mais. Por exemplo: a versão A tem o título "Emagreça 5kg em 30 dias" e a versão B tem "Pare de lutar com a balança". Você divide o tráfego igualmente entre as duas e, depois de 100 visitantes em cada, vê qual teve mais conversão. Mude apenas um elemento por vez (título, imagem, cor do botão ou texto do CTA) para saber exatamente o que fez diferença.',
            tip: 'Comece testando apenas o título — é o elemento com maior impacto na conversão. Depois, teste a cor e o texto do botão de ação.',
          },
          {
            type: 'quiz',
            question: 'Qual é a principal diferença entre um site normal e uma landing page?',
            options: [
              'A landing page é mais bonita e colorida',
              'A landing page tem um único objetivo e sem distrações',
              'O site normal é gratuito e a landing page é paga',
              'A landing page só funciona com anúncios pagos',
            ],
            correctIndex: 1,
            explanation: 'A principal diferença é o foco: uma landing page tem apenas uma oferta e um botão de ação, sem menus ou links que distraiam. Isso aumenta a conversão.',
          },
          {
            type: 'quiz',
            question: 'O que acontece quando você adiciona campos extras no formulário da landing page?',
            options: [
              'A conversão aumenta porque você coleta mais informações',
              'Não faz nenhuma diferença no resultado',
              'A conversão cai aproximadamente 10% por campo extra',
              'O formulário fica mais bonito e profissional',
            ],
            correctIndex: 2,
            explanation: 'Cada campo extra reduz a conversão em cerca de 10%. Por isso, peça apenas o essencial — nome e email (ou WhatsApp) é suficiente na maioria dos casos.',
          },
          {
            type: 'summary',
            title: 'Resumo do Módulo 2',
            points: [
              'Landing page é uma página com um único objetivo: converter o visitante em lead ou cliente',
              'O título é responsável por 80% da decisão do visitante — use a fórmula resultado + prazo + sem objeção',
              'Formulários simples convertem mais — peça apenas nome e email (ou WhatsApp)',
              'Teste A/B compara duas versões para descobrir o que funciona melhor',
              'Mude apenas um elemento por vez nos testes para ter resultados confiáveis',
              'Ferramentas gratuitas como Carrd e Mailchimp permitem criar landing pages sem programar',
            ],
          },
        ],
      },

      // ============================================================
      // MÓDULO 3 — Automação e Follow-up
      // ============================================================
      {
        titulo: 'Automação e Follow-up',
        slides: [
          {
            type: 'content',
            title: 'Sequências de email que vendem no automático',
            body: 'Uma sequência de emails é uma série de mensagens enviadas automaticamente depois que alguém se cadastra na sua lista. A sequência clássica tem 5 emails: boas-vindas com entrega do material prometido, história pessoal que gera conexão, conteúdo de valor que mostra autoridade, depoimentos e provas sociais, e oferta com urgência. Cada email é enviado com 1-2 dias de intervalo. Uma vez configurada, essa sequência trabalha 24 horas por dia, 7 dias por semana.',
            tip: 'Use o Mailchimp (gratuito até 500 contatos) ou o MailerLite (gratuito até 1.000 contatos) para criar sua primeira sequência automática.',
          },
          {
            type: 'content',
            title: 'WhatsApp automático: o canal mais poderoso do Brasil',
            body: 'No Brasil, o WhatsApp tem taxa de abertura de 98%, contra 20% do email. Usar automação de WhatsApp é obrigatório para quem vende online. Ferramentas como o WhatsApp Business (gratuito) permitem criar respostas automáticas, mensagens de ausência e catálogo de produtos. Para automações mais avançadas, ferramentas como Manychat conectam o WhatsApp ao seu funil e enviam mensagens baseadas no comportamento do lead. Comece com as respostas automáticas do WhatsApp Business.',
            tip: 'Configure agora 3 respostas automáticas: saudação para novos contatos, mensagem de ausência, e resposta rápida com seus preços/serviços.',
          },
          {
            type: 'content',
            title: 'SMS de follow-up: o canal esquecido que converte',
            body: 'Poucas empresas usam SMS, e é exatamente por isso que ele funciona tão bem — sua mensagem não compete com centenas de outras. O SMS tem taxa de abertura de 95% e a maioria é lida em até 3 minutos. Use SMS para lembretes de agendamento, confirmação de pedidos e reativação de clientes inativos. Mantenha as mensagens curtas (160 caracteres), inclua o nome do cliente e sempre ofereça uma forma de responder. Ferramentas como Zenvia e Twilio permitem envio automatizado.',
            tip: 'Comece usando SMS apenas para lembretes de compromissos (ex: "Oi Maria, lembrando da sua consulta amanhã às 14h"). A taxa de no-show despenca!',
          },
          {
            type: 'content',
            title: 'O timing perfeito: quando entrar em contato',
            body: 'O momento do contato é tão importante quanto a mensagem. Um lead que acabou de se cadastrar deve receber uma resposta em até 5 minutos — depois disso, a taxa de conversão cai 80%. No follow-up, siga a regra 1-3-7-14: primeiro contato em 1 dia, segundo em 3 dias, terceiro em 7 dias, quarto em 14 dias. Nunca mande mais de uma mensagem por dia. Após o quarto contato sem resposta, coloque o lead em uma lista de "nutrir" com conteúdo mensal. Persistência educada converte.',
            tip: 'Automatize o primeiro contato para ser instantâneo. Use o WhatsApp Business ou email automático para responder nos primeiros 5 minutos.',
          },
          {
            type: 'quiz',
            question: 'Qual é a taxa de abertura do WhatsApp no Brasil comparada ao email?',
            options: [
              'WhatsApp 50% vs. Email 50%',
              'WhatsApp 98% vs. Email 20%',
              'WhatsApp 20% vs. Email 98%',
              'Ambos têm a mesma taxa de abertura',
            ],
            correctIndex: 1,
            explanation: 'No Brasil, o WhatsApp tem taxa de abertura de 98% contra apenas 20% do email. Por isso, o WhatsApp é o canal mais poderoso para vendas no Brasil.',
          },
          {
            type: 'quiz',
            question: 'Em quanto tempo você deve responder a um lead que acabou de se cadastrar?',
            options: [
              'Em até 24 horas',
              'Em até 1 hora',
              'Em até 5 minutos',
              'No dia seguinte, em horário comercial',
            ],
            correctIndex: 2,
            explanation: 'Um lead deve ser contatado em até 5 minutos após o cadastro. Depois disso, a taxa de conversão cai 80%. Por isso, automatizar o primeiro contato é essencial.',
          },
          {
            type: 'summary',
            title: 'Resumo do Módulo 3',
            points: [
              'Sequências automáticas de 5 emails convertem leads em clientes no piloto automático',
              'WhatsApp tem 98% de abertura no Brasil — é o canal obrigatório para vendas',
              'SMS é subutilizado e por isso se destaca: 95% de taxa de abertura',
              'Responda leads em até 5 minutos — após esse tempo a conversão cai 80%',
              'Siga a regra de follow-up 1-3-7-14 dias para não perder oportunidades',
              'Ferramentas gratuitas como WhatsApp Business e Mailchimp já permitem automatizar',
            ],
          },
        ],
      },

      // ============================================================
      // MÓDULO 4 — CRM e Pipeline
      // ============================================================
      {
        titulo: 'CRM e Pipeline',
        slides: [
          {
            type: 'content',
            title: 'O que é CRM e por que você precisa de um (mesmo sendo pequeno)',
            body: 'CRM (Customer Relationship Management) é uma ferramenta para organizar todos os seus contatos, leads e clientes em um só lugar. Sem um CRM, você perde oportunidades porque esquece de fazer follow-up, não sabe quem já demonstrou interesse ou qual foi a última conversa. Mesmo que você tenha apenas 10 clientes, um CRM organiza tudo e evita que leads "caiam no esquecimento". Pense no CRM como a agenda de contatos mais inteligente que você já viu.',
            tip: 'O HubSpot CRM é totalmente gratuito e atende perfeitamente pequenos negócios. Se preferir algo mais simples, o Trello ou uma planilha do Google Sheets já funcionam como CRM básico.',
          },
          {
            type: 'content',
            title: 'Pipeline visual: enxergue todas as suas vendas de uma vez',
            body: 'Um pipeline é uma visão visual de todas as suas oportunidades de venda organizadas por etapa. Imagine um quadro com colunas como: "Primeiro Contato", "Proposta Enviada", "Negociação", "Fechado" e "Perdido". Cada lead é um cartão que você move entre as colunas conforme avança na venda. Isso permite ver, de relance, quantas vendas estão em andamento, onde estão travando e quanto de faturamento está previsto. É como um painel de controle do seu negócio.',
            tip: 'Crie seu pipeline com no máximo 5 etapas. Pipelines com muitas etapas confundem mais do que ajudam. Mantenha simples!',
          },
          {
            type: 'content',
            title: 'Lead scoring básico: saiba quem está pronto para comprar',
            body: 'Lead scoring é dar pontos para cada lead com base nas ações que ele toma. Por exemplo: abriu seu email = 1 ponto, clicou no link = 3 pontos, respondeu no WhatsApp = 5 pontos, pediu orçamento = 10 pontos. Quando um lead atinge uma pontuação definida por você (ex: 15 pontos), significa que ele está "quente" e pronto para receber uma oferta. Isso evita que você perca tempo com leads frios e foque nos que têm maior chance de comprar.',
            tip: 'Comece com um scoring simples de 3 níveis: frio (0-5 pontos), morno (6-14 pontos) e quente (15+ pontos). Foque seu tempo nos leads quentes.',
          },
          {
            type: 'diagram',
            title: 'Métricas-Chave do Funil',
            diagramType: 'stats',
            data: {
              stats: [
                { value: '3-5%', label: 'Taxa de conversão média do topo ao fundo' },
                { value: '80%', label: 'Queda se resposta demora mais de 5 min' },
                { value: '5x', label: 'Mais barato reter cliente do que conquistar novo' },
                { value: '47%', label: 'Leads compram de quem responde primeiro' },
              ],
            },
            caption: 'Números reais que mostram por que cada etapa do funil importa',
          },
          {
            type: 'content',
            title: 'Relatórios de conversão: meça para melhorar',
            body: 'Sem medir, é impossível melhorar. Os relatórios essenciais são: taxa de conversão por etapa do funil (quantos % passam de uma etapa para a próxima), tempo médio de venda (quantos dias entre o primeiro contato e a compra), ticket médio (valor médio de cada venda) e taxa de fechamento (quantos leads viram clientes). Acompanhe esses números semanalmente e identifique onde está o gargalo. Se muitos leads travam na etapa de "Proposta Enviada", o problema pode ser o preço ou a proposta.',
            tip: 'Monte uma planilha simples com esses 4 indicadores e atualize toda sexta-feira. Em 30 dias, você vai ter clareza total sobre onde melhorar.',
          },
          {
            type: 'quiz',
            question: 'O que é um pipeline de vendas?',
            options: [
              'Um software de contabilidade para emitir notas fiscais',
              'Uma visão visual das oportunidades de venda organizadas por etapa',
              'Um tipo de anúncio pago nas redes sociais',
              'Um contrato de venda entre empresas',
            ],
            correctIndex: 1,
            explanation: 'Pipeline é uma visão visual (tipo quadro Kanban) onde cada lead é um cartão que se move pelas etapas da venda. Permite ver de relance o estado de todas as negociações.',
          },
          {
            type: 'quiz',
            question: 'Para que serve o lead scoring?',
            options: [
              'Para dar notas de 0 a 10 para a qualidade do seu produto',
              'Para classificar leads por pontuação e saber quem está pronto para comprar',
              'Para calcular o desconto que cada cliente vai receber',
              'Para ranquear seus posts nas redes sociais',
            ],
            correctIndex: 1,
            explanation: 'Lead scoring dá pontos para leads com base em suas ações (abrir email, clicar, responder). Leads com pontuação alta estão "quentes" e prontos para receber uma oferta de venda.',
          },
          {
            type: 'checklist',
            title: 'Checklist: configurando seu CRM básico',
            description: 'Siga esses passos para ter seu CRM funcionando ainda hoje:',
            items: [
              'Escolher a ferramenta: HubSpot (grátis), Trello ou Google Sheets',
              'Criar as etapas do pipeline: Primeiro Contato, Proposta, Negociação, Fechado, Perdido',
              'Importar seus contatos atuais (da agenda, WhatsApp e redes sociais)',
              'Definir seu lead scoring: frio (0-5), morno (6-14), quente (15+)',
              'Agendar revisão semanal do pipeline toda sexta-feira',
            ],
          },
          {
            type: 'summary',
            title: 'Resumo do Módulo 4',
            points: [
              'CRM organiza todos os contatos e leads em um só lugar — use mesmo sendo pequeno',
              'Pipeline visual mostra todas as oportunidades de venda organizadas por etapa',
              'Lead scoring classifica leads em frio, morno e quente para priorizar seu tempo',
              'Meça 4 indicadores: taxa de conversão, tempo de venda, ticket médio e taxa de fechamento',
              'HubSpot CRM é gratuito e completo para pequenos negócios',
              'Revise seu pipeline e relatórios toda semana para identificar e resolver gargalos',
            ],
          },
        ],
      },
    ],
  },

  // ================================================================
  // CURSO 7 — Ferramentas Digitais para Secretárias — Curso Gratuito
  // ================================================================
  {
    slug: 'ferramentas-digitais-secretarias',
    nome: 'Ferramentas Digitais para Secretárias — Curso Gratuito',
    modulos: [
      // ============================================================
      // MÓDULO 1 — Google Workspace: Seu Kit de Ferramentas
      // ============================================================
      {
        titulo: 'Google Workspace: Seu Kit de Ferramentas',
        slides: [
          {
            type: 'content',
            title: 'O que é o Google Workspace e por que ele é essencial',
            body: 'O Google Workspace é um conjunto de ferramentas gratuitas do Google que inclui email (Gmail), armazenamento de arquivos (Drive), documentos (Docs), planilhas (Sheets), apresentações (Slides) e muito mais. Tudo funciona pelo navegador — você não precisa instalar nada no computador. A grande vantagem é que tudo está conectado: um arquivo do Drive pode ser anexado no Gmail com um clique, e um documento pode ser editado por várias pessoas ao mesmo tempo. É o kit de ferramentas mais usado em escritórios no mundo inteiro.',
            tip: 'Se você já tem uma conta do Gmail, já tem acesso a TODAS essas ferramentas gratuitamente. Acesse drive.google.com para começar.',
          },
          {
            type: 'diagram',
            title: 'Ferramentas do Escritório Digital',
            diagramType: 'icons',
            data: {
              items: [
                { icon: 'excel', label: 'Planilhas' },
                { icon: 'word', label: 'Documentos' },
                { icon: 'email', label: 'E-mail' },
                { icon: 'calendar', label: 'Agenda' },
                { icon: 'drive', label: 'Armazenamento' },
                { icon: 'zoom', label: 'Zoom' },
                { icon: 'meet', label: 'Google Meet' },
                { icon: 'teams', label: 'Teams' },
              ],
            },
            caption: 'Principais ferramentas que toda secretária precisa dominar',
          },
          {
            type: 'content',
            title: 'Gmail profissional: organizando sua caixa de entrada',
            body: 'Como secretária, você vai lidar com dezenas de emails por dia. O segredo para não se perder é usar marcadores (labels) e filtros. Crie marcadores como "Urgente", "Financeiro", "Reuniões" e "Arquivo". Depois, crie filtros automáticos: por exemplo, todos os emails do chefe podem receber automaticamente o marcador "Urgente". Use também a função "Estrela" para marcar emails que precisam de resposta. Assim, sua caixa de entrada vira uma lista organizada de tarefas.',
            tip: 'Crie agora 5 marcadores básicos: Urgente, Financeiro, Reuniões, Fornecedores e Arquivo. Só esses 5 já vão transformar sua organização.',
          },
          {
            type: 'content',
            title: 'Google Drive: seu armário de arquivos na nuvem',
            body: 'O Google Drive é como um armário de arquivos que você acessa de qualquer computador ou celular. A conta gratuita oferece 15 GB de espaço — suficiente para milhares de documentos. Crie pastas organizadas por assunto: "Financeiro 2026", "Atas de Reunião", "Contratos", "RH". A vantagem sobre pen drives e pastas no computador é que os arquivos nunca se perdem e podem ser acessados de qualquer lugar. Se o computador quebrar, seus arquivos continuam seguros na nuvem.',
            tip: 'Regra de ouro: NUNCA salve arquivos importantes só no computador. Sempre suba uma cópia para o Google Drive. Assim, você nunca perde nada.',
          },
          {
            type: 'content',
            title: 'Compartilhamento e permissões: quem pode ver e editar',
            body: 'Uma das funções mais importantes do Google Drive é compartilhar arquivos com controle de quem pode fazer o quê. Existem 3 níveis de permissão: "Visualizador" (só pode ver), "Comentarista" (pode ver e comentar) e "Editor" (pode modificar). Quando seu chefe pede para compartilhar um relatório com um cliente, envie como "Visualizador" para que ele não altere nada por acidente. Para colegas que precisam editar junto com você, use "Editor". Sempre pense duas vezes antes de dar permissão de edição.',
            tip: 'Antes de compartilhar qualquer arquivo, pergunte-se: essa pessoa precisa EDITAR ou apenas VER? Na dúvida, envie como "Visualizador" — é mais seguro.',
          },
          {
            type: 'quiz',
            question: 'Qual é a principal vantagem de salvar arquivos no Google Drive em vez do computador?',
            options: [
              'Os arquivos ficam mais bonitos no Drive',
              'Os arquivos podem ser acessados de qualquer lugar e não se perdem se o computador quebrar',
              'O Drive deixa o computador mais rápido',
              'Os arquivos no Drive ocupam menos espaço',
            ],
            correctIndex: 1,
            explanation: 'O Google Drive armazena os arquivos na nuvem, então você pode acessar de qualquer dispositivo e eles ficam seguros mesmo que o computador quebre ou seja roubado.',
          },
          {
            type: 'quiz',
            question: 'Qual permissão você deve dar quando compartilha um relatório com um cliente externo?',
            options: [
              'Editor — para ele poder melhorar o relatório',
              'Visualizador — para ele ver sem modificar nada',
              'Proprietário — para ele ter controle total',
              'Comentarista — para ele poder reescrever tudo',
            ],
            correctIndex: 1,
            explanation: 'Sempre compartilhe com clientes e pessoas externas como "Visualizador". Assim, eles podem ver o documento, mas não alteram nada por acidente.',
          },
          {
            type: 'summary',
            title: 'Resumo do Módulo 1',
            points: [
              'Google Workspace é um conjunto gratuito de ferramentas: Gmail, Drive, Docs, Sheets e Slides',
              'Use marcadores e filtros no Gmail para organizar dezenas de emails por dia',
              'Google Drive é seu armário na nuvem — acessível de qualquer lugar, seguro contra perdas',
              'Sempre salve cópias de arquivos importantes no Drive, nunca só no computador',
              'Existem 3 níveis de permissão: Visualizador, Comentarista e Editor',
              'Na dúvida sobre compartilhamento, use "Visualizador" — é mais seguro',
            ],
          },
        ],
      },

      // ============================================================
      // MÓDULO 2 — Agenda e Organização
      // ============================================================
      {
        titulo: 'Agenda e Organização',
        slides: [
          {
            type: 'content',
            title: 'Google Calendar: sua agenda digital profissional',
            body: 'O Google Calendar (Google Agenda) é a ferramenta que vai substituir aquela agenda de papel. Ele mostra seus compromissos por dia, semana ou mês, e envia lembretes automáticos no celular. Para acessar, vá em calendar.google.com ou baixe o app no celular. Crie calendários separados por cores: "Reuniões" em azul, "Prazos" em vermelho, "Pessoal" em verde. Assim, você vê de relance o que tem no dia. Todos os compromissos ficam sincronizados entre computador e celular automaticamente.',
            tip: 'Abra o Google Calendar agora e crie 3 calendários com cores diferentes: Reuniões, Prazos e Pessoal. Vai ser o melhor investimento de 2 minutos do seu dia.',
          },
          {
            type: 'diagram',
            title: 'Processos Manuais vs. Digitais',
            diagramType: 'comparison',
            data: {
              leftLabel: 'Manual (Papel)',
              rightLabel: 'Digital (Nuvem)',
              leftItems: [
                'Agenda de papel — pode perder ou molhar',
                'Ligações para confirmar reuniões',
                'Pastas físicas ocupam espaço',
                'Sem backup — risco de perder tudo',
              ],
              rightItems: [
                'Google Calendar com lembretes automáticos',
                'Convites automáticos por e-mail',
                'Google Drive acessível de qualquer lugar',
                'Backup automático na nuvem',
              ],
            },
            caption: 'A transição do papel para o digital economiza horas e elimina riscos',
          },
          {
            type: 'content',
            title: 'Agendando reuniões como uma profissional',
            body: 'Para agendar uma reunião, clique no horário desejado no calendário e preencha: título claro (ex: "Reunião com Fornecedor XYZ"), data, horário de início e fim, local ou link da videochamada. Em "Convidados", adicione os emails dos participantes — eles receberão um convite automático e podem confirmar ou recusar. Adicione uma descrição com a pauta da reunião. Use a função "Horários Disponíveis" para encontrar um horário que funcione para todos os convidados sem precisar ficar trocando mensagens.',
            tip: 'Sempre coloque a pauta na descrição do evento. Assim, todos os participantes chegam preparados e a reunião é mais produtiva.',
          },
          {
            type: 'content',
            title: 'Lembretes inteligentes: nunca mais esqueça um compromisso',
            body: 'O Google Calendar permite configurar lembretes automáticos para cada evento. O padrão é um lembrete 30 minutos antes, mas você pode adicionar quantos quiser. Para compromissos importantes, configure dois lembretes: um no dia anterior e outro 1 hora antes. Para prazos, crie eventos de dia inteiro com lembrete 3 dias antes. Você também pode criar "Lembretes" avulsos (diferente de eventos) para tarefas simples como "Ligar para fornecedor". Lembretes avulsos ficam aparecendo até você marcá-los como concluídos.',
            tip: 'Para prazos de entrega de documentos, crie o evento 2 dias ANTES do prazo real. Assim, você tem margem de segurança caso algo dê errado.',
          },
          {
            type: 'content',
            title: 'Integrando Agenda + Gmail + Google Meet',
            body: 'A mágica do Google Workspace é que tudo se conecta. Quando você cria uma reunião no Calendar, pode adicionar automaticamente um link do Google Meet (videochamada). Esse link vai no convite enviado por email para todos os participantes. No dia da reunião, basta clicar no link para entrar na videochamada. Além disso, quando alguém te envia um email mencionando uma data ou horário, o Gmail sugere automaticamente criar um evento no Calendar. Essa integração economiza minutos preciosos todos os dias.',
            tip: 'Ao criar reuniões online, sempre marque a opção "Adicionar videoconferência do Google Meet". O link é gerado automaticamente e enviado para todos.',
          },
          {
            type: 'quiz',
            question: 'Qual é a melhor estratégia para nunca perder um prazo importante?',
            options: [
              'Anotar em um papel e colar no monitor',
              'Criar o evento no calendário 2 dias antes do prazo real, com lembretes',
              'Confiar na memória e verificar o email todo dia',
              'Pedir para um colega te lembrar',
            ],
            correctIndex: 1,
            explanation: 'Criar o evento 2 dias antes do prazo real no Google Calendar, com lembretes automáticos, garante que você nunca será pega de surpresa e terá margem de segurança.',
          },
          {
            type: 'quiz',
            question: 'O que acontece quando você adiciona convidados a um evento do Google Calendar?',
            options: [
              'Nada — eles precisam acessar seu calendário manualmente',
              'Eles recebem um convite por email e podem confirmar ou recusar',
              'Eles recebem uma ligação automática com os detalhes',
              'O evento aparece só no seu calendário, não no deles',
            ],
            correctIndex: 1,
            explanation: 'Quando você adiciona convidados, eles recebem automaticamente um email com todos os detalhes da reunião e podem confirmar, recusar ou propor outro horário.',
          },
          {
            type: 'summary',
            title: 'Resumo do Módulo 2',
            points: [
              'Google Calendar substitui a agenda de papel com lembretes automáticos e sincronização',
              'Crie calendários com cores diferentes para Reuniões, Prazos e Pessoal',
              'Ao agendar reuniões, inclua título claro, convidados e pauta na descrição',
              'Configure lembretes duplos para compromissos importantes (dia anterior + 1 hora antes)',
              'Crie eventos de prazo 2 dias antes da data real para ter margem de segurança',
              'A integração Calendar + Gmail + Meet economiza tempo e evita retrabalho',
            ],
          },
        ],
      },

      // ============================================================
      // MÓDULO 3 — Documentos e Planilhas
      // ============================================================
      {
        titulo: 'Documentos e Planilhas',
        slides: [
          {
            type: 'content',
            title: 'Google Docs: seu processador de textos na nuvem',
            body: 'O Google Docs é como o Word, mas funciona direto no navegador e salva automaticamente. Você nunca mais vai perder um documento porque esqueceu de salvar ou o computador travou. Para criar um novo documento, acesse docs.google.com e clique em "Documento em branco". Ele aceita formatação de texto, tabelas, imagens, cabeçalhos e rodapés — tudo que você precisa para o trabalho de escritório. E o melhor: várias pessoas podem editar o mesmo documento ao mesmo tempo.',
            tip: 'Quando o chefe pedir "manda o documento em Word", vá em Arquivo > Fazer Download > Microsoft Word (.docx). O Google Docs converte automaticamente!',
          },
          {
            type: 'diagram',
            title: 'Fluxo de Gestão de Documentos',
            diagramType: 'steps',
            data: {
              steps: [
                'Receber o documento (e-mail ou Drive)',
                'Renomear com padrão ANO-MES-Tipo-Assunto',
                'Salvar na pasta correta do Google Drive',
                'Definir permissões (Visualizador ou Editor)',
                'Compartilhar com as pessoas certas',
                'Arquivar versões antigas em pasta de histórico',
              ],
            },
            caption: 'Siga esses 6 passos para nunca mais perder um documento importante',
          },
          {
            type: 'content',
            title: 'Templates prontos: atas de reunião e memorandos',
            body: 'Você não precisa criar documentos do zero. O Google Docs tem templates (modelos prontos) para os documentos mais comuns do escritório. Acesse docs.google.com e clique em "Galeria de templates". Lá você encontra modelos de atas de reunião, memorandos, cartas formais, relatórios e propostas. Escolha o modelo, preencha com suas informações e pronto. Para atas de reunião, o template já vem com campos para data, participantes, pauta, decisões e próximos passos — basta preencher durante a reunião.',
            tip: 'Crie uma pasta no Drive chamada "Templates" e salve seus modelos personalizados. Quando precisar de uma ata nova, basta copiar o template.',
          },
          {
            type: 'content',
            title: 'Google Sheets: planilhas sem complicação',
            body: 'O Google Sheets é como o Excel, mas mais simples e gratuito. Para começar, acesse sheets.google.com e crie uma nova planilha. Os conceitos básicos são: cada quadradinho é uma "célula", colunas são identificadas por letras (A, B, C) e linhas por números (1, 2, 3). Para somar valores, digite =SOMA(A1:A10) na célula onde quer o resultado. Para calcular a média, use =MÉDIA(A1:A10). Essas duas fórmulas já resolvem a maioria das necessidades do dia a dia de uma secretária.',
            tip: 'Não tente aprender todas as fórmulas de uma vez. Comece com =SOMA e =MÉDIA — só essas duas já vão resolver 80% do que você precisa.',
          },
          {
            type: 'content',
            title: 'Controle de despesas do escritório com planilha',
            body: 'Criar um controle de despesas é uma das tarefas mais comuns para secretárias. Monte uma planilha com 5 colunas: Data, Descrição, Categoria (material, transporte, alimentação), Valor e Observação. No final de cada coluna de valor, use =SOMA para ter o total. Você pode usar "Filtros" para ver só uma categoria por vez, e "Formatação condicional" para destacar valores acima de um limite. Compartilhe a planilha com seu gestor como "Visualizador" para que ele acompanhe em tempo real.',
            tip: 'No final da planilha, adicione uma linha com =SOMA para cada coluna de valor. Assim, o total se atualiza automaticamente conforme você adiciona novos gastos.',
          },
          {
            type: 'content',
            title: 'Imprimindo documentos: da tela para o papel',
            body: 'Mesmo no mundo digital, imprimir ainda é necessário. No Google Docs e Sheets, use Ctrl+P (ou Cmd+P no Mac) para abrir a tela de impressão. Antes de imprimir, sempre clique em "Visualizar impressão" para ver como vai ficar no papel. Em planilhas, defina a "Área de impressão" para não imprimir células em branco. Ajuste as margens e a orientação (retrato para documentos de texto, paisagem para planilhas largas). Sempre faça uma impressão de teste antes de imprimir várias cópias.',
            tip: 'Para planilhas que não cabem em uma página, vá em Arquivo > Configurações de impressão > Ajustar à página. Isso reduz o tamanho para caber em uma folha só.',
          },
          {
            type: 'quiz',
            question: 'Como você converte um documento do Google Docs para Word (.docx)?',
            options: [
              'Não é possível converter — precisa reescrever no Word',
              'Arquivo > Fazer Download > Microsoft Word (.docx)',
              'Copiar e colar o texto em um novo documento do Word',
              'Imprimir e digitalizar novamente',
            ],
            correctIndex: 1,
            explanation: 'No Google Docs, vá em Arquivo > Fazer Download > Microsoft Word (.docx). O documento é convertido automaticamente, mantendo toda a formatação.',
          },
          {
            type: 'quiz',
            question: 'Qual fórmula do Google Sheets soma todos os valores das células A1 até A10?',
            options: [
              '=TOTAL(A1:A10)',
              '=SOMA(A1:A10)',
              '=ADICIONAR(A1+A10)',
              '=SOMAR(A1,A10)',
            ],
            correctIndex: 1,
            explanation: 'A fórmula =SOMA(A1:A10) soma todos os valores das células A1 até A10. É a fórmula mais usada em planilhas e funciona tanto no Google Sheets quanto no Excel.',
          },
          {
            type: 'summary',
            title: 'Resumo do Módulo 3',
            points: [
              'Google Docs é como o Word, mas salva automaticamente e funciona no navegador',
              'Use templates prontos para atas de reunião, memorandos e relatórios',
              'Google Sheets funciona como o Excel — comece com =SOMA e =MÉDIA',
              'Monte controle de despesas com 5 colunas: Data, Descrição, Categoria, Valor e Observação',
              'Para converter Docs para Word: Arquivo > Fazer Download > Microsoft Word (.docx)',
              'Sempre visualize a impressão antes de imprimir para evitar desperdício de papel',
            ],
          },
        ],
      },

      // ============================================================
      // MÓDULO 4 — Apresentações e Comunicação
      // ============================================================
      {
        titulo: 'Apresentações e Comunicação',
        slides: [
          {
            type: 'content',
            title: 'Google Slides: criando apresentações profissionais',
            body: 'O Google Slides é a ferramenta gratuita do Google para criar apresentações, como o PowerPoint. Acesse slides.google.com e crie uma nova apresentação. Cada slide deve ter uma ideia principal — nunca coloque texto demais em um único slide. Use fontes grandes (mínimo tamanho 24) e poucas cores (no máximo 3). Adicione imagens de qualidade para ilustrar seus pontos. A regra de ouro das apresentações é: se o slide precisa ser "lido", tem texto demais.',
            tip: 'Use a regra 6x6: no máximo 6 linhas de texto por slide e no máximo 6 palavras por linha. Isso força você a ser objetiva.',
          },
          {
            type: 'content',
            title: 'Templates profissionais: pareça uma designer sem ser uma',
            body: 'Assim como o Docs, o Google Slides tem uma galeria de templates profissionais. Escolha um template que combine com o tom da apresentação: cores sóbrias para relatórios, cores vibrantes para ideias criativas. Depois, é só substituir o texto e as imagens de exemplo pelos seus. Se quiser ainda mais opções, o site Slidesgo oferece milhares de templates gratuitos compatíveis com Google Slides. Em 5 minutos, você tem uma apresentação com visual profissional que impressiona qualquer chefe.',
            tip: 'Acesse slidesgo.com, escolha um template gratuito, clique em "Google Slides" e ele abre direto na sua conta. Depois, salve uma cópia no seu Drive.',
          },
          {
            type: 'content',
            title: 'Google Meet e Zoom: dominando as videochamadas',
            body: 'Videochamadas fazem parte da rotina de qualquer escritório moderno. No Google Meet, basta criar um evento no Calendar com videochamada ou acessar meet.google.com. Antes da reunião, teste seu microfone e câmera clicando nos ícones. Durante a reunião, use "Silenciar" quando não estiver falando para evitar ruídos. O botão "Apresentar agora" permite compartilhar sua tela ou uma apresentação. No Zoom, o funcionamento é parecido — instale o app, clique no link da reunião e pronto.',
            tip: 'Sempre entre na videochamada 2 minutos antes do horário para garantir que áudio e vídeo estão funcionando. Evite constrangimentos técnicos!',
          },
          {
            type: 'content',
            title: 'WhatsApp Business: comunicação profissional pelo celular',
            body: 'O WhatsApp Business é a versão profissional do WhatsApp, gratuita e feita para empresas. Ele permite criar um perfil comercial com endereço, horário de funcionamento e descrição da empresa. A função "Respostas Rápidas" permite salvar mensagens prontas que você usa sempre, como "Obrigada pelo contato. Nosso horário de atendimento é das 8h às 18h". As "Etiquetas" ajudam a organizar conversas por categorias como "Fornecedores", "Clientes" e "Urgente". É muito mais profissional do que usar o WhatsApp pessoal.',
            tip: 'Configure 5 respostas rápidas para as perguntas mais frequentes que você recebe. Isso vai economizar horas por semana digitando as mesmas respostas.',
          },
          {
            type: 'quiz',
            question: 'Qual é a regra 6x6 para apresentações?',
            options: [
              '6 slides no total com 6 imagens cada',
              'No máximo 6 linhas por slide e 6 palavras por linha',
              '6 cores diferentes e 6 tipos de fonte',
              'Apresentação de 6 minutos com 6 pausas',
            ],
            correctIndex: 1,
            explanation: 'A regra 6x6 diz: no máximo 6 linhas de texto por slide e 6 palavras por linha. Isso mantém os slides limpos e garante que o público preste atenção em você, não no texto.',
          },
          {
            type: 'quiz',
            question: 'O que você deve fazer 2 minutos antes de uma videochamada?',
            options: [
              'Mandar uma mensagem avisando que vai se atrasar',
              'Entrar na chamada para testar áudio e vídeo',
              'Desligar o computador e religar',
              'Enviar a pauta por email para os participantes',
            ],
            correctIndex: 1,
            explanation: 'Entrar 2 minutos antes permite testar microfone e câmera. Nada é mais constrangedor (e não profissional) do que começar uma reunião com problemas técnicos.',
          },
          {
            type: 'summary',
            title: 'Resumo do Módulo 4',
            points: [
              'Google Slides é gratuito e permite criar apresentações profissionais no navegador',
              'Use a regra 6x6: máximo 6 linhas por slide e 6 palavras por linha',
              'Templates do Slidesgo deixam sua apresentação com visual profissional em minutos',
              'Em videochamadas, entre 2 minutos antes e silencie o microfone quando não estiver falando',
              'WhatsApp Business tem respostas rápidas e etiquetas para organizar a comunicação',
              'Separe sempre o WhatsApp pessoal do profissional usando o WhatsApp Business',
            ],
          },
        ],
      },

      // ============================================================
      // MÓDULO 5 — Produtividade e Automação
      // ============================================================
      {
        titulo: 'Produtividade e Automação',
        slides: [
          {
            type: 'content',
            title: 'Atalhos de teclado que economizam horas por semana',
            body: 'Atalhos de teclado parecem um detalhe pequeno, mas economizam horas ao longo da semana. Os 5 atalhos essenciais que toda secretária deve memorizar: Ctrl+C (copiar), Ctrl+V (colar), Ctrl+Z (desfazer o último erro), Ctrl+S (salvar) e Ctrl+F (buscar texto em qualquer página ou documento). No Google Docs, Ctrl+Shift+V cola sem formatação — útil quando você copia texto de um site e quer colar limpo. Pratique esses 6 atalhos por uma semana e eles vão se tornar automáticos.',
            tip: 'Cole uma lista dos atalhos na lateral do seu monitor com post-it. Em uma semana, você não vai mais precisar do papel — já vai estar no automático.',
          },
          {
            type: 'content',
            title: 'Respostas automáticas e templates de email',
            body: 'Se você responde os mesmos tipos de email toda semana, está desperdiçando tempo. O Gmail tem a função "Templates" (Modelos): vá em Configurações > Avançado > Ative "Templates". Depois, escreva um email modelo, vá em "Mais opções" (3 pontos) > Templates > Salvar rascunho como template. Na próxima vez, basta inserir o template e personalizar com o nome da pessoa. Para períodos de ausência, configure "Resposta automática de férias" em Configurações > Geral. Essas duas funções economizam dezenas de minutos por dia.',
            tip: 'Crie templates para: confirmação de reunião, encaminhamento de documentos, resposta a fornecedores e agradecimento de recebimento.',
          },
          {
            type: 'diagram',
            title: 'Modelo de E-mail Profissional',
            diagramType: 'mockup',
            data: {
              url: 'mail.google.com',
              title: 'Gmail — Novo E-mail',
              elements: [
                { type: 'header', text: 'Para: fornecedor@empresa.com' },
                { type: 'input', text: 'Assunto: Confirmação de Reunião — 26/02/2026' },
                { type: 'text', text: 'Prezado(a) Sr(a). Silva,' },
                { type: 'text', text: 'Confirmo a reunião agendada para quarta-feira, dia 26/02, às 14h, na sala de reuniões do 3o andar.' },
                { type: 'text', text: 'Segue em anexo a pauta para sua análise prévia.' },
                { type: 'text', text: 'Atenciosamente, Ana — Secretária Executiva' },
                { type: 'button', text: 'Enviar' },
              ],
            },
            caption: 'Exemplo de e-mail profissional com estrutura clara: saudação, corpo objetivo e despedida formal',
          },
          {
            type: 'content',
            title: 'Organização digital: pastas, nomes de arquivos e rotina',
            body: 'Arquivos bem organizados economizam tempo e evitam erros. Use uma estrutura de pastas padronizada: Ano > Departamento > Tipo de documento. Nomeie arquivos de forma clara: "2026-02-Ata-Reuniao-Diretoria" é muito melhor do que "documento final v3 (2)". Nunca use espaços, acentos ou caracteres especiais em nomes de arquivo — use hífen ou underscore. Reserve 10 minutos no final do dia para organizar os arquivos que recebeu. Uma rotina de organização diária evita o acúmulo que depois leva horas para resolver.',
            tip: 'Padrão de nome de arquivo: ANO-MES-TipoDocumento-Assunto. Exemplo: 2026-02-Relatorio-Despesas-Janeiro. Isso mantém tudo em ordem cronológica.',
          },
          {
            type: 'content',
            title: 'Listas de tarefas: Google Tasks e Google Keep',
            body: 'O Google Tasks é uma lista de tarefas simples integrada ao Gmail e Calendar. Clique no ícone de lista na barra lateral do Gmail para abrir. Adicione tarefas com prazo e elas aparecem automaticamente no seu Calendar. Para anotações rápidas e listas de compras do escritório, use o Google Keep — funciona como post-its digitais que sincronizam entre celular e computador. A combinação Calendar + Tasks + Keep cobre todas as necessidades de organização de uma secretária sem precisar de ferramentas pagas.',
            tip: 'Todo início de manhã, abra o Google Tasks e liste as 3 tarefas mais importantes do dia. Foque nelas antes de abrir o email.',
          },
          {
            type: 'quiz',
            question: 'Qual atalho de teclado você usa para desfazer um erro que acabou de cometer?',
            options: [
              'Ctrl+S',
              'Ctrl+Z',
              'Ctrl+C',
              'Ctrl+F',
            ],
            correctIndex: 1,
            explanation: 'Ctrl+Z desfaz a última ação. É o "borracha mágica" do computador — funciona em quase todos os programas. Se apagou algo sem querer, Ctrl+Z traz de volta!',
          },
          {
            type: 'quiz',
            question: 'Qual é a forma correta de nomear um arquivo profissional?',
            options: [
              'documento final v3 (2).docx',
              'RELATÓRIO DE GASTOS!!!.docx',
              '2026-02-Relatorio-Despesas-Janeiro.docx',
              'novo documento (cópia).docx',
            ],
            correctIndex: 2,
            explanation: 'O padrão ANO-MES-TipoDocumento-Assunto mantém os arquivos em ordem cronológica e é fácil de encontrar. Evite espaços, acentos e nomes vagos como "documento final".',
          },
          {
            type: 'checklist',
            title: 'Checklist: sua rotina diária de organização digital',
            description: 'Reserve 10 minutos no final de cada dia para:',
            items: [
              'Organizar arquivos recebidos nas pastas corretas do Drive',
              'Renomear arquivos com o padrão ANO-MES-Tipo-Assunto',
              'Verificar emails marcados com estrela e responder pendências',
              'Atualizar sua lista de tarefas no Google Tasks para o dia seguinte',
              'Conferir o calendário do dia seguinte e preparar materiais necessários',
            ],
          },
          {
            type: 'summary',
            title: 'Resumo do Módulo 5',
            points: [
              '6 atalhos essenciais: Ctrl+C, Ctrl+V, Ctrl+Z, Ctrl+S, Ctrl+F e Ctrl+Shift+V',
              'Templates de email no Gmail economizam dezenas de minutos por dia',
              'Nomeie arquivos com o padrão: ANO-MES-TipoDocumento-Assunto',
              'Google Tasks para tarefas com prazo, Google Keep para anotações rápidas',
              'Reserve 10 minutos no final do dia para organização digital',
              'Comece cada manhã listando as 3 tarefas mais importantes do dia',
            ],
          },
        ],
      },

      // ============================================================
      // MÓDULO 6 — IA no Escritório
      // ============================================================
      {
        titulo: 'IA no Escritório',
        slides: [
          {
            type: 'content',
            title: 'ChatGPT para secretárias: seu assistente digital gratuito',
            body: 'O ChatGPT é um programa de inteligência artificial que funciona como uma conversa por escrito. Você digita uma pergunta ou pedido e ele responde na hora. Para secretárias, ele é incrivelmente útil no dia a dia: pode ajudar a redigir emails, resumir documentos longos, criar planilhas e até sugerir respostas para situações profissionais. Acesse chat.openai.com, crie uma conta gratuita e comece a usar. Pense nele como um colega muito inteligente que está sempre disponível para ajudar.',
            tip: 'Crie uma conta no ChatGPT agora mesmo — é gratuito. Comece pedindo: "Me ajude a escrever um email profissional para confirmar uma reunião".',
          },
          {
            type: 'content',
            title: 'Escrevendo emails profissionais com IA',
            body: 'Uma das maiores utilidades do ChatGPT para secretárias é escrever emails. Em vez de ficar 10 minutos pensando como escrever uma mensagem delicada, peça ao ChatGPT: "Escreva um email educado para remarcar a reunião de terça para quinta, explicando que o diretor teve um imprevisto". Ele gera um email profissional em segundos. Você revisa, ajusta o que quiser e envia. Funciona para cobranças educadas, convites, agradecimentos, reclamações formais e qualquer outro tipo de comunicação escrita.',
            tip: 'Sempre revise o email gerado pela IA antes de enviar. Confira se os nomes, datas e detalhes estão corretos. A IA escreve bem, mas só VOCÊ conhece o contexto real.',
          },
          {
            type: 'content',
            title: 'Resumindo documentos longos com IA',
            body: 'Quando seu chefe pedir para você "ler e resumir" um relatório de 30 páginas, o ChatGPT pode ajudar. Copie o texto do documento (ou partes dele) e peça: "Resuma este texto em 5 pontos principais" ou "Quais são as informações mais importantes deste relatório?". A IA identifica os pontos principais em segundos. Isso é especialmente útil para atas de reunião longas, contratos, relatórios e emails extensos. Você economiza tempo e entrega um resumo claro e organizado.',
            tip: 'Para documentos muito longos, resuma em partes. Copie uma seção por vez e peça o resumo. No final, peça um resumo dos resumos.',
          },
          {
            type: 'content',
            title: 'Fórmulas de planilha com IA: nunca mais quebre a cabeça',
            body: 'Precisa de uma fórmula no Google Sheets mas não sabe como fazer? Peça ao ChatGPT. Por exemplo: "Preciso de uma fórmula no Google Sheets que some os valores da coluna B apenas quando a coluna A diz Financeiro". Ele vai responder com a fórmula exata: =SOMASE(A:A,"Financeiro",B:B). Copie e cole na planilha. Isso funciona para fórmulas simples e complexas. Você não precisa decorar centenas de fórmulas — precisa saber pedir para a IA.',
            tip: 'Quando pedir fórmulas ao ChatGPT, descreva EXATAMENTE o que quer. Diga as colunas, o que cada uma contém e o resultado esperado. Quanto mais detalhes, melhor a resposta.',
          },
          {
            type: 'content',
            title: 'Quando NÃO usar IA: limites importantes',
            body: 'A IA é poderosa, mas tem limites que você precisa conhecer. NUNCA cole informações confidenciais da empresa (dados financeiros sigilosos, senhas, dados pessoais de funcionários ou clientes) no ChatGPT. A IA pode inventar informações que parecem verdadeiras mas são falsas — sempre verifique dados, números e datas. Não use IA para tomar decisões que são responsabilidade sua ou do seu chefe. E nunca envie um texto da IA sem revisar — erros passam, e a responsabilidade é sua. A IA é uma ferramenta, não um substituto do seu julgamento profissional.',
            tip: 'Regra de ouro: NUNCA cole no ChatGPT dados sigilosos como CPFs, salários, senhas ou contratos confidenciais. Para esses assuntos, faça manualmente.',
          },
          {
            type: 'quiz',
            question: 'Qual é a forma correta de usar o ChatGPT para escrever um email profissional?',
            options: [
              'Copiar o email gerado e enviar imediatamente sem ler',
              'Pedir ao ChatGPT para escrever, revisar o conteúdo e ajustar antes de enviar',
              'Pedir ao ChatGPT para acessar seu Gmail e enviar direto',
              'Nunca usar IA para emails — é antiprofissional',
            ],
            correctIndex: 1,
            explanation: 'A forma correta é pedir ao ChatGPT, mas SEMPRE revisar antes de enviar. Confira nomes, datas e detalhes. A IA escreve bem, mas só você conhece o contexto real da situação.',
          },
          {
            type: 'quiz',
            question: 'Qual informação você NUNCA deve colar no ChatGPT?',
            options: [
              'Um pedido para escrever um email de agradecimento',
              'CPFs, salários e dados confidenciais de funcionários',
              'Um pedido de fórmula para o Google Sheets',
              'Um texto para resumir de um artigo público',
            ],
            correctIndex: 1,
            explanation: 'Dados pessoais, financeiros e sigilosos NUNCA devem ser colocados no ChatGPT. A regra é: se a informação é confidencial, faça manualmente.',
          },
          {
            type: 'checklist',
            title: 'Checklist: usando IA de forma segura e produtiva',
            description: 'Revise antes de usar a IA no trabalho:',
            items: [
              'Criei minha conta gratuita no ChatGPT (chat.openai.com)',
              'Nunca colo dados confidenciais (CPFs, salários, senhas, contratos sigilosos)',
              'Sempre reviso textos gerados pela IA antes de enviar',
              'Verifico datas, números e nomes em qualquer texto da IA',
              'Uso IA como ferramenta de apoio, não como substituto do meu julgamento',
            ],
          },
          {
            type: 'summary',
            title: 'Resumo do Módulo 6',
            points: [
              'ChatGPT é gratuito e pode escrever emails, resumir documentos e criar fórmulas de planilha',
              'Sempre revise o conteúdo gerado pela IA — a responsabilidade pelo envio é sua',
              'Para fórmulas de planilha, descreva exatamente o que quer e a IA gera a fórmula pronta',
              'NUNCA cole dados confidenciais como CPFs, salários ou contratos sigilosos no ChatGPT',
              'A IA pode inventar informações falsas — sempre verifique dados, datas e números',
              'IA é uma ferramenta de apoio, não substitui seu julgamento profissional',
            ],
          },
        ],
      },
    ],
  },
]
