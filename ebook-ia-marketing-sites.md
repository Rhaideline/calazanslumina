# IA para Marketing Digital — Como Usar o Claude para Criar Sites Profissionais

## Por Rhaideline Calazans | Calazans Lumina

---

# MÓDULO 1 — A REVOLUÇÃO DA IA NO MARKETING DIGITAL

## 1.1 O que mudou em 2026

Há 2 anos, criar um site profissional exigia contratar um desenvolvedor (R$3.000-15.000), esperar semanas e torcer para ficar bom. Hoje, com Inteligência Artificial, você cria um site completo, profissional e otimizado para o Google em poucas horas — sozinho.

Não estou falando de Wix, WordPress ou construtores de arrastar e soltar. Estou falando de sites de código real, idênticos aos que agências cobram milhares de reais para entregar.

A diferença? Você conversa com a IA. Descreve o que quer. E ela cria.

Eu criei mais de 100 sites usando IA nos últimos 2 anos. Sites que:
- Ranqueiam na primeira página do Google
- Geram leads orgânicos todos os dias
- Têm performance 100/100 no PageSpeed
- São indistinguíveis de sites feitos por agências premium

E vou te ensinar exatamente como fazer o mesmo.

## 1.2 Por que o Claude é a melhor IA para criar sites

Existem várias IAs no mercado. ChatGPT, Gemini, Copilot, Perplexity. Todas são boas para texto. Mas para código — especificamente para criar sites — o Claude está em outro nível.

**O que o Claude faz melhor que qualquer outra IA:**

1. **Entende contexto longo** — Você pode descrever um site inteiro em um único prompt e ele cria tudo de uma vez. Outras IAs perdem o fio da meada no meio.

2. **Escreve código limpo** — O código que o Claude gera é profissional, organizado e funcional. Não é código de tutorial — é código de produção.

3. **Cria design bonito** — Diferente de outras IAs que geram código funcional mas feio, o Claude cria layouts modernos com gradientes, animações, responsividade e tipografia profissional.

4. **SEO nativo** — O Claude já sabe incluir meta tags, Schema.org, sitemap, robots.txt e todas as melhores práticas de SEO sem você precisar pedir.

5. **Claude Code (CLI)** — A versão terminal do Claude lê, edita e cria arquivos diretamente no seu computador. Você conversa e ele constrói. É como ter um desenvolvedor sentado ao seu lado 24/7.

## 1.3 O que você vai aprender

Ao final deste curso, você será capaz de:

- Criar um site profissional do zero usando apenas comandos de texto
- Publicar o site gratuitamente na internet com domínio próprio
- Otimizar o site para aparecer no Google (SEO)
- Fazer o site aparecer quando alguém pesquisar nas IAs (AEO)
- Adicionar formulários, blog, páginas por cidade, cursos online
- Integrar com WhatsApp, GoHighLevel e sistemas de pagamento
- Cobrar clientes por sites que você criou em horas (não semanas)

**Pré-requisitos:** Nenhum. Você não precisa saber programar. Se você sabe digitar e copiar/colar, consegue fazer tudo que está neste curso.

---

# MÓDULO 2 — PREPARANDO SEU AMBIENTE DE TRABALHO

## 2.1 O que você vai precisar

Antes de começar a criar sites, precisamos instalar algumas ferramentas gratuitas. O processo todo leva menos de 15 minutos.

**Lista de ferramentas (todas gratuitas):**

| Ferramenta | Para que serve | Onde baixar |
|-----------|---------------|-------------|
| Node.js | Roda o site no seu computador | nodejs.org |
| VS Code | Editor de código (onde você vê os arquivos) | code.visualstudio.com |
| Git | Controle de versão (salva seu progresso) | git-scm.com |
| Claude Code | A IA que vai criar o site | claude.ai/code |
| Vercel | Publica o site na internet (grátis) | vercel.com |

## 2.2 Instalando o Node.js

O Node.js é o motor que faz o site funcionar no seu computador antes de publicar.

**Passo a passo:**
1. Acesse nodejs.org
2. Clique no botão verde "LTS" (versão estável)
3. Abra o arquivo baixado e clique "Next" em tudo
4. Para verificar se instalou, abra o terminal e digite: `node --version`
5. Se aparecer um número (ex: v22.x.x), está instalado

## 2.3 Instalando o VS Code

O VS Code é onde você vai ver e editar os arquivos do site. Pense nele como o "Word para código".

**Passo a passo:**
1. Acesse code.visualstudio.com
2. Clique em "Download"
3. Instale normalmente
4. Abra o VS Code e instale a extensão "Claude Code" (clique no ícone de quadradinhos na barra lateral → pesquise "Claude" → instale)

## 2.4 Instalando o Git

O Git salva cada versão do seu site. Se algo der errado, você volta para a versão anterior.

**Passo a passo:**
1. Acesse git-scm.com
2. Clique em "Download"
3. Instale com todas as opções padrão
4. Crie uma conta gratuita em github.com (é onde seus projetos ficam salvos na nuvem)

## 2.5 Instalando o Claude Code

O Claude Code é a ferramenta que vai criar os sites para você. É o Claude rodando direto no seu terminal.

**Passo a passo:**
1. Acesse claude.ai e crie uma conta (ou faça login)
2. Assine o plano Pro ($20/mês) — é o investimento mais importante do seu negócio
3. Abra o terminal (no VS Code, pressione Ctrl + `) e digite:

```
npm install -g @anthropic-ai/claude-code
```

4. Após instalar, digite `claude` no terminal para iniciar
5. Faça login com sua conta Anthropic quando solicitado

**Pronto!** Agora quando você digitar `claude` no terminal, a IA vai estar pronta para criar sites.

## 2.6 Criando conta na Vercel

A Vercel é onde o site vai ficar hospedado (publicado na internet). O plano gratuito é suficiente para começar.

**Passo a passo:**
1. Acesse vercel.com
2. Clique em "Sign Up"
3. Conecte com sua conta do GitHub
4. Pronto — a Vercel vai publicar automaticamente seus sites quando você fizer push no GitHub

---

# MÓDULO 3 — CRIANDO SEU PRIMEIRO SITE COM CLAUDE

## 3.1 A arte do prompt — como pedir um site para o Claude

O segredo de criar sites incríveis com IA está em como você pede. Um bom prompt gera um site profissional. Um prompt vago gera um site genérico.

**Regra de ouro: Seja específico sobre o resultado, não sobre o processo.**

❌ **Prompt ruim:**
"Cria um site para mim"

✅ **Prompt bom:**
"Cria um site profissional para uma empresa de pintura em Massachusetts chamada JH Painting Services. O site precisa ter: homepage com hero section e fotos de trabalho, página de serviços (interior, exterior, deck staining), sobre a empresa (fundada por Jafet Hernandez, 10+ anos de experiência), galeria before/after, depoimentos de clientes, formulário de orçamento gratuito, e footer com telefone e endereço. Cores: azul escuro e branco. Estilo: profissional e confiável."

**Os 7 elementos de um prompt perfeito para sites:**

1. **Quem é o cliente** — nome da empresa, nicho, localização
2. **Páginas** — homepage, sobre, serviços, contato, blog
3. **Conteúdo** — textos, números, diferenciais
4. **Estilo visual** — cores, mood (moderno, clássico, premium)
5. **Funcionalidades** — formulário, WhatsApp, agendamento
6. **SEO** — "otimize para ranquear no Google para [keywords]"
7. **Tecnologia** — "use Next.js com Tailwind CSS"

## 3.2 Passo a passo: Do zero ao site publicado em 30 minutos

Vamos criar um site real agora. Siga cada passo.

**Passo 1: Crie a pasta do projeto**

Abra o terminal no VS Code e digite:

```
mkdir meu-primeiro-site
cd meu-primeiro-site
```

**Passo 2: Inicie o Claude Code**

```
claude
```

**Passo 3: Dê o comando para criar o site**

Cole este prompt (adaptando para seu cliente):

```
Crie um site profissional completo usando Next.js 15 com App Router e Tailwind CSS para uma empresa de limpeza em Boston chamada "Clean Pro Boston".

O site precisa ter:

PÁGINAS:
- Homepage com hero section, serviços, depoimentos, CTA
- Página Sobre (história da empresa, 5+ anos experiência)
- Página Serviços (limpeza residencial, comercial, pós-obra)
- Página Contato com formulário (nome, email, telefone, mensagem)

DESIGN:
- Cores: azul (#1e40af) e branco, com verde como accent
- Fonte: Inter para texto, serif para títulos
- Layout moderno, limpo, profissional
- Totalmente responsivo (mobile-first)

SEO:
- Meta tags otimizadas para "cleaning service Boston"
- Schema.org LocalBusiness
- Sitemap.xml
- robots.txt

FUNCIONALIDADES:
- Formulário de contato funcional
- Botão de WhatsApp flutuante
- Google Maps embed
- Animações suaves de scroll

Inicialize o projeto com npm, configure tudo e crie todos os arquivos.
```

**Passo 4: Aguarde o Claude criar**

O Claude vai:
- Criar o projeto Next.js
- Instalar dependências
- Criar todos os componentes
- Estilizar com Tailwind
- Configurar SEO
- Gerar todas as páginas

Isso leva de 5 a 15 minutos dependendo da complexidade.

**Passo 5: Veja o resultado**

```
npm run dev
```

Abra o navegador em `http://localhost:3000` e veja seu site funcionando.

**Passo 6: Publique na Vercel**

```
git init
git add .
git commit -m "primeiro site"
```

Crie um repositório no GitHub e faça push:

```
gh repo create meu-primeiro-site --public --source=. --push
```

Depois:
```
vercel --prod
```

**Pronto! Seu site está no ar.**

## 3.3 Refinando o site — como pedir ajustes

O primeiro resultado nunca é perfeito. O poder do Claude está nos refinamentos. Você conversa naturalmente:

```
"Troca a cor do hero para um gradiente escuro.
Aumenta o tamanho do título.
Adiciona uma seção de números (5+ anos, 500+ clientes, 100% satisfação).
O formulário precisa ter um campo de dropdown para tipo de serviço."
```

O Claude faz as alterações nos arquivos existentes sem quebrar nada.

**Dicas para refinamentos eficazes:**

- Peça uma coisa de cada vez (ou agrupe por área: "no hero, faça X e Y")
- Seja visual: "quero o botão maior, verde, com seta para a direita"
- Referencie sites: "quero o estilo de hero parecido com o da Apple"
- Peça para ver: "mostra como ficou o código do hero"

## 3.4 Checklist de um site profissional

Antes de entregar para o cliente, verifique:

**Design:**
- [ ] Responsivo no celular, tablet e desktop
- [ ] Fontes legíveis (16px mínimo para corpo)
- [ ] Cores consistentes em todas as páginas
- [ ] Imagens otimizadas (WebP, lazy loading)
- [ ] Favicon configurado

**SEO:**
- [ ] Title tag único em cada página (max 60 caracteres)
- [ ] Meta description em cada página (max 160 caracteres)
- [ ] H1 único por página
- [ ] Schema.org (LocalBusiness, FAQPage, BreadcrumbList)
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] Open Graph tags para redes sociais

**Performance:**
- [ ] PageSpeed 90+ no mobile
- [ ] Carregamento em menos de 3 segundos
- [ ] Sem erros no console do navegador

**Funcionalidade:**
- [ ] Formulário funcionando
- [ ] Links todos corretos
- [ ] Telefone clicável no mobile
- [ ] Botão WhatsApp funcionando

---

# MÓDULO 4 — SEO COM IA: RANQUEANDO NO GOOGLE

## 4.1 O que é SEO e por que você PRECISA fazer

SEO (Search Engine Optimization) é o que faz seu site aparecer quando alguém pesquisa no Google. Sem SEO, seu site é invisível.

**Dado real:** O site RS Development Group saiu de 358 impressões/mês para 88.103 impressões/mês em 4 meses. Crescimento de 24.500%. Tudo orgânico, zero reais em anúncios. Como? SEO.

## 4.2 Pedindo SEO para o Claude

O Claude já sabe SEO. Você só precisa pedir:

```
"Adicione SEO completo ao site:
- Meta tags otimizadas para [serviço] em [cidade]
- Schema.org LocalBusiness com nome, endereço, telefone, horário
- FAQPage schema com 5 perguntas frequentes sobre [serviço]
- BreadcrumbList em todas as páginas
- Sitemap.xml dinâmico
- robots.txt permitindo todos os crawlers
- Open Graph para redes sociais
- canonical URL em cada página"
```

## 4.3 A estratégia que gera +24.500% de impressões: Páginas por cidade

Este é o segredo mais poderoso de SEO local que existe. E o Claude cria em minutos.

**O conceito:** Em vez de ter 1 página de serviço, você cria 1 página para CADA cidade que atende. Cada página é otimizada para "[serviço] em [cidade]".

**Exemplo real:**
- `/massachusetts/somerville/deck-construction` → ranqueia para "deck contractor somerville"
- `/massachusetts/lynn/roofing` → ranqueia para "roofing services lynn"
- `/massachusetts/newton/painting` → ranqueia para "painter newton ma"

**Como pedir para o Claude:**

```
"Crie páginas dinâmicas por cidade para o site.

Use generateStaticParams para gerar uma página para cada cidade de Massachusetts:
Framingham, Marlborough, Hudson, Worcester, Boston, Cambridge, Somerville, Newton, Brookline, etc (100+ cidades).

Cada página deve ter:
- H1: [Serviço] em [Cidade], MA
- Texto único mencionando a cidade naturalmente
- Schema.org LocalBusiness com a cidade
- FAQ com perguntas sobre o serviço na cidade
- CTA com formulário de orçamento
- Links internos para outras cidades e serviços"
```

**Resultado:** 100+ páginas indexadas no Google, cada uma competindo por keywords locais diferentes.

## 4.4 AEO — Aparecendo nas IAs (ChatGPT, Gemini, Perplexity)

AEO (Answer Engine Optimization) é o SEO para inteligências artificiais. Quando alguém pergunta ao ChatGPT "melhor pintor em Boston", você quer que seu site apareça na resposta.

**Como fazer:**

```
"Crie um arquivo public/llms.txt com informações estruturadas sobre a empresa para IAs.

Inclua:
- Nome da empresa, serviços, localização
- Perguntas frequentes com respostas diretas
- Dados de contato
- Diferenciais

Também crie public/llms-full.txt com informações mais detalhadas.

No robots.txt, permita todos os bots de IA:
User-agent: GPTBot
Allow: /
User-agent: Claude-Web
Allow: /
User-agent: PerplexityBot
Allow: /"
```

## 4.5 Blog SEO — Artigos que trazem tráfego

Um blog com artigos otimizados é uma máquina de tráfego orgânico.

```
"Crie um blog com 10 artigos otimizados para SEO sobre [nicho].

Cada artigo deve ter:
- 1500+ palavras
- H1 com keyword principal
- 3-5 H2 subtítulos
- Meta description otimizada
- Schema Article
- Links internos para páginas de serviço
- CTA no final

Temas sugeridos:
1. Quanto custa [serviço] em [cidade] em 2026
2. Como escolher o melhor [profissional] em [cidade]
3. [Serviço]: guia completo para iniciantes
4. X dicas antes de contratar [serviço]
5. [Serviço] vs [alternativa]: qual escolher"
```

---

# MÓDULO 5 — FUNCIONALIDADES AVANÇADAS

## 5.1 Integrando com GoHighLevel

O GoHighLevel (GHL) é a plataforma que transforma seu site em uma máquina de vendas. Formulários captam leads direto no CRM, chatbots respondem automaticamente, e workflows fazem follow-up sem você mover um dedo.

**Como integrar:**

```
"Adicione um formulário de contato que envia os dados via webhook para o GoHighLevel.

O formulário precisa ter:
- Nome completo
- Email
- Telefone
- Tipo de serviço (dropdown)
- Mensagem

Ao submeter, envie POST para: [URL do webhook do GHL]
Mostre mensagem de sucesso após envio."
```

## 5.2 Chatbot IA no WhatsApp

Um chatbot IA que responde seus clientes 24/7 é o diferencial que separa amadores de profissionais.

**No GoHighLevel:**
1. Vá em AI Agents → Conversation AI
2. Crie um bot com personalidade (secretária virtual)
3. Treine com FAQ do negócio
4. Ative em Auto Pilot nos canais: SMS, Chat Widget, WhatsApp

**Prompt para treinar o bot:**

```
Personalidade: Você é [Nome], assistente virtual da [Empresa] — [descrição do negócio].
Você é profissional, educada e objetiva.

Goal: Coletar 5 informações do cliente:
1. Tipo de serviço desejado
2. Nome completo
3. Endereço do serviço
4. Telefone
5. Melhor horário para contato

Faça uma pergunta por vez. Nunca pule etapas.
```

## 5.3 Sistema de pagamento

Para vender cursos, serviços ou produtos pelo site:

```
"Adicione uma página de cursos com sistema de pagamento.

Cada curso deve ter:
- Capa visual (SVG ou imagem)
- Título, descrição, preço
- Botão de compra que redireciona para link de pagamento externo
- Badge de preço (Grátis ou R$XX)

Os links de pagamento são externos (PagBank, Stripe ou FastPay Direct)."
```

## 5.4 Páginas de cursos online

Quer vender cursos como eu? Peça ao Claude:

```
"Crie um sistema de cursos online no site.

Cada curso tem:
- Página de vendas com descrição, módulos, para quem é, FAQ
- Página de acesso protegida (rota com slug secreto)
- Conteúdo em markdown renderizado como HTML
- Navegação entre módulos e aulas
- Progresso visual (módulo X de Y)

Cursos disponíveis:
1. [Nome] — [descrição] — R$[preço]
2. [Nome] — [descrição] — Grátis
..."
```

---

# MÓDULO 6 — CASES REAIS: RESULTADOS COMPROVADOS

## 6.1 Case Wolf's Siding — +706% cliques em 3 meses

**Cliente:** Wolf's Siding Inc. — empresa de siding em Massachusetts
**Site:** wolfs-siding.com

**O que foi criado com Claude:**
- Site com 800+ páginas (cidade × serviço × material)
- Blog com guias completos sobre siding
- Schema.org em todas as páginas
- FAQ por cidade

**Resultados (Google Search Console):**

| Métrica | Dez 2025 | Mar 2026 | Crescimento |
|---------|----------|----------|-------------|
| Impressões | 14.500 | 47.900 | +230% |
| Cliques | 16 | 129 | +706% |
| Posição média | 26.8 | 15.5 | ↑11 posições |
| Leads via formulário | 0 | 18 | ∞ |

**Keywords na página 1 do Google:**
- "vinyl siding contractor" — posição 6.5
- "siding contractors near me" — posição 8.8
- "siding companies near me" — posição 9.2

**Tempo total de criação:** ~2 semanas (site + SEO + blog + automações GHL)

## 6.2 Case RS Development Group — +24.500% impressões

**Cliente:** RS Development Group — general contractor em Massachusetts
**Site:** rs-developmentgroup.com

**O que foi criado com Claude:**
- Site com 600+ páginas (cidade × serviço)
- Blog SEO com artigos completos
- Páginas por cidade para toda Massachusetts

**Resultados:**

| Métrica | Nov 2025 | Mar 2026 | Crescimento |
|---------|----------|----------|-------------|
| Impressões | 358 | 88.103 | +24.500% |
| Cliques | 13 | 155 | +1.092% |
| Páginas indexadas | 1 | 100+ | +10.000% |
| Leads orgânicos | 0 | 13 | ∞ |

**O mais impressionante:** Em novembro 2025, o site era invisível. Só tinha a homepage indexada. Em março 2026, tinha 100+ páginas no Google e recebia leads diariamente — 100% orgânico.

## 6.3 Case JH Painting — Chatbot IA qualificando leads 24/7

**Cliente:** JH Painting Services — empresa de pintura em Marlborough, MA
**Site:** jhpaintingservices.com

**O que foi implementado:**
- Site com 600+ páginas
- Chatbot IA (GPT 4.1) como secretária virtual "Jafet"
- Pipeline CRM com 5 etapas
- IVR inteligente para chamadas telefônicas
- Sistema de voicemail com transcrição automática
- Templates de avaliação no WhatsApp
- Widget de reputação: 5.0 ⭐ (20+ reviews)

**O bot em ação:**
> Cliente: "Hi, I need painting for my house"
> Bot: "Thanks for reaching out! Just to make sure we send the right specialist — would this be for interior painting, exterior painting, or something else?"
> Cliente: "INTERIOR"
> Bot: "Great, we'd love to help with your interior painting project! Can I get your full name, please?"

O bot qualifica, coleta dados e agenda — 24 horas por dia, 7 dias por semana.

## 6.4 Quanto cobrar por sites criados com IA

Você aprendeu a criar sites profissionais com IA. Agora, quanto cobrar?

**Tabela de preços sugerida:**

| Tipo de site | Tempo real | Cobrar |
|-------------|-----------|--------|
| Site básico (2-3 páginas) | 2-4 horas | R$1.500-3.000 |
| Site completo (5-8 páginas) | 1-2 dias | R$3.000-6.000 |
| Site com SEO (50+ páginas) | 3-5 dias | R$5.000-10.000 |
| Site com SEO local (200+ páginas) | 1-2 semanas | R$8.000-15.000 |
| Site + GHL (automações + chatbot) | 2-3 semanas | R$10.000-20.000 |

**A conta:** Se você cobra R$5.000 por um site que leva 2 dias para criar, está ganhando R$2.500/dia. Isso é R$50.000/mês trabalhando 20 dias.

A IA não tira seu emprego. A IA multiplica seu valor.

---

# MÓDULO 7 — PROMPTS PRONTOS (COPIE E USE)

## 7.1 Prompts para criar sites

**Prompt 1 — Site completo para empresa de serviços:**
```
Crie um site profissional completo usando Next.js 15 com App Router e Tailwind CSS para [EMPRESA] — [DESCRIÇÃO DO NEGÓCIO] em [CIDADE, ESTADO].

PÁGINAS:
- Homepage com hero impactante, serviços, depoimentos, galeria, CTA
- Sobre (história, experiência, equipe)
- Serviços ([listar serviços])
- Galeria/Portfolio (before & after)
- Contato (formulário + mapa + telefone)
- Blog (5 artigos iniciais sobre [nicho])

DESIGN:
- Cores: [cor principal] e [cor secundária]
- Estilo: [moderno/clássico/premium/minimalista]
- Totalmente responsivo

SEO COMPLETO:
- Schema.org LocalBusiness + FAQPage + BreadcrumbList
- Meta tags otimizadas para "[serviço] [cidade]"
- Sitemap.xml dinâmico
- Open Graph para redes sociais
```

**Prompt 2 — Landing page de alta conversão:**
```
Crie uma landing page de alta conversão para [OFERTA].

Estrutura:
1. Hero: headline impactante + sub-headline + CTA
2. Problema: 3 dores do público-alvo
3. Solução: como [EMPRESA] resolve
4. Benefícios: 4-6 benefícios com ícones
5. Prova social: depoimentos + números
6. FAQ: 5 perguntas frequentes
7. CTA final: formulário ou botão WhatsApp

Use urgência, escassez e prova social.
Cores: [cor]. Estilo: [estilo].
```

**Prompt 3 — Adicionar páginas por cidade (SEO local):**
```
Adicione páginas dinâmicas por cidade ao site.

Crie um arquivo com 100+ cidades de [ESTADO].
Use generateStaticParams para gerar uma página por cidade.

Cada página deve ter:
- H1: "[Serviço] em [Cidade], [Estado]"
- 3 parágrafos de texto único mencionando a cidade
- Schema.org LocalBusiness com cidade
- FAQPage com 3 perguntas sobre [serviço] em [cidade]
- Grid de serviços com links
- CTA com formulário
- Breadcrumbs
- Links para cidades vizinhas
```

## 7.2 Prompts para SEO

**Prompt 4 — Blog SEO completo:**
```
Crie 10 artigos de blog otimizados para SEO sobre [NICHO] em [LOCALIZAÇÃO].

Cada artigo deve ter:
- 1500+ palavras
- H1 com keyword principal
- 3-5 subtítulos H2
- Meta description de 150 caracteres
- Schema Article
- Links internos para páginas de serviço
- CTA no final para formulário/WhatsApp
- Linguagem acessível, sem jargões técnicos

Temas:
1. Quanto custa [serviço] em [cidade] em 2026
2. [Serviço]: guia completo para quem vai contratar
3. X erros que encarece seu projeto de [serviço]
4. Como escolher o melhor [profissional] em [cidade]
5. [Material A] vs [Material B]: qual escolher
6. Quando é hora de trocar/renovar [item]
7. Quanto tempo dura um projeto de [serviço]
8. Precisa de licença para [serviço] em [estado]?
9. [Número] tendências de [nicho] para 2026
10. Por que contratar um profissional vs DIY
```

**Prompt 5 — AEO (visibilidade em IAs):**
```
Crie os arquivos de AEO para o site:

1. public/llms.txt — resumo estruturado do site (empresa, serviços, contato, FAQ)
2. public/llms-full.txt — versão completa com todos os detalhes, serviços, preços, localização
3. Adicione no robots.txt permissão para GPTBot, Claude-Web, PerplexityBot
4. Adicione speakable schema para voice search
5. Crie uma seção de "Respostas Diretas" no llms-full.txt com formato:
   "Se alguém perguntar X, responda Y"
```

## 7.3 Prompts para automações

**Prompt 6 — Formulário com webhook GHL:**
```
Crie um componente de formulário de contato que:
- Campos: nome, email, telefone, tipo de serviço (dropdown), mensagem
- Validação client-side
- Envia via POST para webhook: [URL]
- Mostra loading durante envio
- Mostra mensagem de sucesso com animação
- Design moderno com Tailwind CSS
```

**Prompt 7 — Widget de avaliações Google:**
```
Crie um componente que mostra avaliações do Google.

Dados estáticos (não precisa de API):
- Rating: 5.0
- Total: 20 reviews
- 3-4 reviews com nome, data, texto e estrelas

Design: cards horizontais com scroll, estrelas amarelas, ícone Google.
```

---

# MÓDULO BÔNUS — CHECKLIST E PRÓXIMOS PASSOS

## Checklist antes de publicar

**Obrigatório:**
- [ ] Site funciona no celular
- [ ] Formulário de contato funcional (teste com seu email)
- [ ] Todos os links funcionam (sem 404)
- [ ] Telefone é clicável no mobile
- [ ] Logo e favicon configurados
- [ ] HTTPS ativo (Vercel faz automaticamente)

**SEO:**
- [ ] Google Search Console configurado
- [ ] Sitemap submetido
- [ ] Schema.org sem erros (teste em search.google.com/test/rich-results)
- [ ] PageSpeed 90+ mobile

**Antes de entregar ao cliente:**
- [ ] Domínio próprio configurado
- [ ] Email profissional (ex: contato@empresa.com)
- [ ] Google Business Profile criado e verificado
- [ ] Redes sociais linkadas no footer

## Próximos passos

1. **Pratique** — Crie 3 sites para negócios fictícios. A prática faz perfeito.
2. **Monte seu portfólio** — Use os sites que criou como cases.
3. **Venda** — Aborde negócios locais que têm sites ruins ou nenhum site.
4. **Automatize** — Adicione GoHighLevel para vender automações junto com o site.
5. **Escale** — Com a IA criando os sites, você foca em vendas e atendimento.

---

## Sobre a Autora

**Rhaideline Calazans** é fundadora da Calazans Lumina, agência de marketing digital para brasileiros nos EUA e Brasil. Com 8+ anos de experiência e 100+ projetos entregues, ela usa IA diariamente para criar sites que ranqueiam na primeira página do Google.

Seus cases incluem crescimentos de +24.500% em impressões (RS Development Group), +706% em cliques (Wolf's Siding) e chatbots IA que qualificam leads 24/7 (JH Painting Services).

**Contato:**
- Site: calazanslumina.com.br
- WhatsApp: +55 31 98294-8067
- Instagram: @calazanslumina

---

© 2026 Calazans Lumina. Todos os direitos reservados.
