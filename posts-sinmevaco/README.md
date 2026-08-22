# Posts SINMEVAÇO — Sindicato dos Médicos do Vale do Aço

18 slides em 1080×1350 (4:5), no formato editorial de "caso real → pergunta → a resposta está no documento → jurídico do sindicato".

```
01_plantao_reduzido/      carrossel 5 slides — redução de valor de plantão avisada em grupo
02_ameaca_de_processo/    carrossel 5 slides — paciente ameaça representação no CRM
03_contrato_pj/           carrossel 5 slides — PJ, afastamento e cláusulas de contrato
04_lgpd_laudo_whatsapp/   post único — laudo/exame por WhatsApp e LGPD
05_escala_de_plantao/     post único — troca unilateral de escala
06_beneficios_associado/  post único — o que o associado já tem incluído
```

- `gerar_posts.py` — gera todos os HTML (rode `python3 gerar_posts.py`)
- `renderizar.sh` — renderiza os HTML em PNG com Chrome headless
- `cortar_1350.py` — corta os PNG para exatamente 1080×1350 (o headless devolve pixels extras)
- `ESTUDO-SINDICATO-MEDICO.md` — **base de conhecimento com fonte**: jornada e piso (Súmula 370 TST), escala 12x36 (art. 59-A + STF), redução salarial (CF 7º VI e CLT 468), pejotização (Tema 1389, em julgamento), acumulação de cargos (CF 37 XVI), prontuário (Res. CFM 1.821), substituto processual (CF 8º III) e contribuições. Todo post novo deve sair daqui
- `LEGENDAS.md` — legendas prontas, hashtags e sugestão de calendário
- `_PREVIEW.html` — todos os slides numa página só
- `fontes/` — DM Serif Display + DM Sans locais (renderiza offline, sem depender do Google Fonts)

## Sistema visual — 12 modelos

Todos os slides usam a mesma base: marca d'água `@sinmevaco` no topo, logo no rodapé, DM Serif Display itálico para as frases de virada e DM Sans para leitura. O que muda é o fundo e a estrutura — é isso que faz o feed conversar sem ficar repetitivo.

**Quatro fundos, sempre os mesmos:**

| Fundo | Uso |
|---|---|
| `bg-navy` azul-marinho | capa, checklist, CTA, número, pergunta |
| `bg-steel` aço | agenda e metade inferior dos slides de caso |
| `bg-cream` creme | slide da virada, citação, cláusula |
| `bg-brass` bronze | declaração forte e faixa "verdade" |

**Os modelos (função → arquivo `gerar_posts.py`):**

| # | Modelo | Função | Para quê |
|---|---|---|---|
| 01 | Capa | `cover()` | abre carrossel com a pergunta do médico |
| 02 | Caso em duas partes | `split()` | conta o caso em duas cenas |
| 03 | Virada editorial | `editorial()` | a frase que muda o entendimento |
| 04 | Checklist numerado | `lista()` | o que fazer, passo a passo |
| 05 | CTA do jurídico | `cta()` | fecha carrossel com contato |
| 06 | Declaração | `statement()` | post único de impacto |
| 07 | Posicionamento | `citacao()` | fala institucional da diretoria |
| 08 | Número | `numero()` | dado em destaque, sempre com fonte |
| 09 | Mito × Verdade | `mito_verdade()` | corrige uma crença da categoria |
| 10 | Agenda | `agenda()` | assembleia, reunião, curso |
| 11 | Cláusula | `clausula()` | trecho de documento com marca-texto |
| 12 | Pergunta do associado | `pergunta()` | dúvida do direct + resposta curta |
| 13 | Cartão com foto | `cardfoto()` | capa de carrossel: pergunta + "arraste" |
| 14 | Caixa branca | `boxcard()` | mensagem institucional + botão de contato |
| 15 | Foto com moldura | `fotoframe()` | frase de impacto sobre foto |
| 16 | Cartão com barra lateral | `lateral()` | explica um serviço do sindicato |
| 17 | X vs Y | `versus()` | comparação (CLT vs PJ, CLT vs cooperativa) |
| 18 | Capa com pergunta | `capafoto()` | foto inteira + pergunta + "confira na legenda" |
| 19 | Fluxo em etapas | `fluxo()` | como funciona um processo, passo a passo |
| 20 | Capa com colchetes | `colchete()` | manifesto/tema em serifa grande |
| 21 | Cartão texturizado | `textura()` | título forte, tipografia mista |
| 22 | Mock de tela | `tela()` | métrica + palavra destacada, tom de alerta |

**Ritmo do feed (harmonia no grid):** alterne escuro → claro → bronze. Em três colunas, evite dois slides creme lado a lado e nunca poste dois bronzes seguidos — o bronze é o acento, aparece uma vez a cada 4 ou 5 posts. Carrossel sempre abre em azul-marinho: é a capa que dá a identidade da linha na grade.

## Semana 01 — pronta para publicar

`semana-01/` traz uma semana inteira sobre o mesmo assunto (atraso no pagamento de plantão), para o feed contar uma história e não três:

- **Segunda** `1_seg_carrossel_atraso/` — carrossel de 5 slides (capa → caso → cláusula → checklist → CTA)
- **Quarta** `2_qua_mito_verdade/` — post único, bronze
- **Sexta** `3_sex_pergunta/` — post único, azul-marinho, puxa dúvida no direct


## Cores e logo do sindicato

Paleta oficial, tirada do feed e do logo do SINMEVAÇO:

| Token | Hex | Onde entra |
|---|---|---|
| `navy` | `#17231A` | verde profundo — fundo escuro principal |
| `navy2` | `#0D140F` | base do degradê escuro |
| `navy3` | `#2E7048` | verde médio — caixas, botões, faixa "verdade" |
| `steel` | `#24523A` | verde médio escuro — fundo secundário |
| `cream` | `#F5F4EF` | off-white — fundo claro e texto sobre escuro |
| `cream2` | `#E7E3D9` | apoio do fundo claro |
| `brass` | `#C6AC73` | dourado — acento sobre fundo escuro |
| `brass2` | `#D5BE8C` | dourado claro — numerais e kickers |
| `ink` | `#16211A` | verde quase preto — texto sobre fundo claro |

**Duas regras que vêm do feed do sindicato:** o dourado nunca é fundo, só acento de texto sobre o verde escuro; e sobre o creme quem acentua é o verde, não o dourado. Os botões seguem o padrão do sindicato — pílula branca com texto verde.

Para ajustar qualquer tom, edite o dicionário `CORES` no topo de `gerar_posts.py` e rode `python3 gerar_posts.py && ./renderizar.sh`. Os nove tokens alimentam os 31 slides.

**Logo:** salve o arquivo oficial como `logos/logo.png` (PNG com fundo transparente, altura mínima 200px). Ele entra sozinho dentro do selo redondo branco no rodapé de todos os slides. Enquanto o arquivo não estiver lá, o selo mostra "MSV" como provisório.

## Fotos (opcional)

Cada slide já fecha sem foto. Para usar imagens próprias do sindicato, coloque os arquivos em `fotos/` com estes nomes:

```
fotos/plantao-capa.jpg  fotos/plantao-a.jpg  fotos/plantao-b.jpg
fotos/crm-capa.jpg      fotos/crm-a.jpg      fotos/crm-b.jpg
fotos/pj-capa.jpg       fotos/pj-a.jpg       fotos/pj-b.jpg
fotos/atraso-capa.jpg   fotos/atraso-a.jpg   fotos/atraso-b.jpg
fotos/cartao-capa.jpg   fotos/moldura.jpg    fotos/versus.jpg
fotos/convencao.jpg     fotos/fluxo.jpg      fotos/colchete.jpg
fotos/tela.jpg
```

Os modelos 15, 17, 18, 20 e 22 foram desenhados **em cima de foto** — sem imagem eles funcionam, mas rendem muito mais com uma. Os demais fecham sozinhos.

Depois rode `./renderizar.sh` de novo. Sem os arquivos, o degradê de fundo assume.

## Antes de publicar — confirmar com o cliente

Os dados abaixo estão no topo de `gerar_posts.py` e vieram de fontes públicas. **Confirme com o SINMEVAÇO antes de postar:**

- `HANDLE` — `@sinmevaco` (marca d'água em todos os slides)
- `FONE` — `(31) 99507-4027`
- `SITE` — `sinmevaco.com.br`
- A lista de benefícios do post 06 — jurídico, negociação coletiva e representação constam do site; leitura de contratos e orientação em PJ/cooperativa precisam de confirmação
- Modelo 07 — a frase está atribuída à "Diretoria do SINMEVAÇO". Se for publicar como fala de alguém, use uma frase aprovada pela pessoa
- Modelo 10 — a data (12 de março) e a pauta são exemplo: editar antes de postar
- Modelo 11 virou checklist de contrato ("o que procurar"), não citação de CCT — pode publicar como está
- Slide 3 do carrossel da semana 01 agora cita a CLT, art. 459 (pagamento até o 5º dia útil do mês subsequente) — texto de lei, não de convenção
- Se for citar a CCT do SINMEVAÇO em algum post, use o texto real do documento vigente. Nenhum slide faz isso hoje
- Nova pasta de fotos da semana: `fotos/atraso-capa.jpg`, `fotos/atraso-a.jpg`, `fotos/atraso-b.jpg`
- O selo do rodapé ainda mostra "MSV" provisório: basta salvar o logo oficial em `logos/logo.png`
