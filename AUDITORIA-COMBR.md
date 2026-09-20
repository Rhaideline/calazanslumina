# Auditoria de busca — calazanslumina.com.br

20 de setembro de 2026. Tudo aqui é medido, não opinado. Cada número traz de
onde veio e como refazer a medida.

---

## O resumo em cinco linhas

O site **não perdeu posição. Perdeu páginas.** A posição média está intacta em
22, e as impressões caíram 92%. Isso não é queda de ranqueamento: é queda de
cobertura. A causa raiz tem duas camadas — uma com data marcada (a consolidação
de 28/ago) e outra que já existia antes e explica por que não voltou sozinho:
**2.087 páginas repetem entre si de 64% a 81% do texto, e 2.513 delas não têm
um único link interno apontando para elas.**

Desempenho **não** é o problema, e isso precisa ser dito logo: LCP entre 188 e
664 ms, CLS zero, zero scripts de terceiro. Está melhor que o `.com`.

---

## 1 · A queda tem data

Search Console, 120 dias, propriedade `sc-domain:calazanslumina.com.br`:

```
semana de       impressões   cliques   posição
2026-07-30          1.059        15      23,3
2026-08-06          1.086        10      22,8
2026-08-13          1.006        22      20,2
2026-08-20            402         5      24,3   ← começa
2026-08-27             24         2      17,6   ← despenca
2026-09-03             22         1      20,5
2026-09-10             37         2      15,5
2026-09-17              4         0      33,2
```

Janela de 28 dias contra a anterior:

| | agora | antes | variação |
|---|---:|---:|---:|
| cliques | 9 | 58 | **−84%** |
| impressões | 342 | 4.098 | **−92%** |
| CTR | 2,63% | 1,42% | +86% |
| **posição média** | **22,1** | **22,2** | **0%** |

**A posição não mudou.** Se fosse penalidade ou perda de relevância, a posição
cairia. Ela não caiu — o site simplesmente parou de ter páginas para mostrar.

**Páginas com ao menos uma impressão: 3.059 antes, 213 depois. Sumiram 2.911.**

O gatilho é conhecido: em 28/ago o `.com.br` passou a redirecionar 301 para o
`.com`. O Google leu isso como "este site mudou de endereço" e começou a
descartar as URLs. A reversão veio dias depois, mas **redirecionamento é fácil
de fazer e caro de desfazer**: o buscador não volta atrás sozinho no mesmo
ritmo em que saiu.

---

## 2 · O veredito do próprio Google, página por página

API de Inspeção de URL, 12 páginas amostradas — as que mais perdiam impressão:

```
/cursos/marketing-digital-iniciantes/brasil/goiania     ← era a maior, 1.903 imp
   "Rastreada, mas não indexada no momento"
   último rastreio: 22 de ABRIL
   links de entrada: NENHUM CONHECIDO

/blog/hotmart-kiwify-como-vender-cursos-online-2026     ← 509 imp
   "Rastreada, mas não indexada no momento"
   último rastreio: 29 de MARÇO
   links de entrada: NENHUM CONHECIDO

/brasil/blumenau/sites-landing-pages                    ← 369 imp
   "Rastreada, mas não indexada no momento"
   último rastreio: 11 de julho
   links de entrada: NENHUM CONHECIDO

/cursos-em/goiania                                      ← 200 imp
   "Não encontrado (404)"
```

Resultado da amostra: **8 indexadas, 4 não.**

"Rastreada, mas não indexada" é a frase mais importante deste documento. Ela
não quer dizer erro técnico. Quer dizer: *o Google leu a página, entendeu, e
decidiu que não valia a pena guardar.* É um julgamento de qualidade. As duas
seções seguintes explicam por que ele julgou assim.

E `/cursos-em/goiania` é pior: **virou 404**. O padrão de URL inteiro
desapareceu no restore, levando junto 200 impressões.

---

## 3 · As páginas órfãs — o achado principal

O sitemap promete 4.673 URLs. Saí da home e andei pelos links, como o
rastreador anda. Cheguei a **330 destinos internos distintos**.

| Seção | linkadas | no sitemap | alcance |
|---|---:|---:|---:|
| `/cursos` | 17 | 2.513 | **0,7%** |
| `/enxoval-de-bebe` | 1 | 210 | **0,5%** |
| `/brasil` | 84 | 1.254 | **6,7%** |
| `/cidades` | 144 | 624 | 23% |
| `/blog` | 63 | 60 | 100% |
| `/servicos` | 6 | 6 | 100% |

**Duas mil quinhentas e treze páginas de curso, e dezessete alcançáveis.**

É exatamente isso que a Inspeção confirmou quando disse "NENHUM LINK DE ENTRADA
CONHECIDO" na página que rendia 1.903 impressões.

Por que isso mata: sitemap é uma **sugestão**, link interno é um **voto**. Uma
página que só existe no sitemap e não é linkada de lugar nenhum é, na leitura
do buscador, uma página que o próprio dono não considerou importante o
suficiente para citar. Ela é rastreada uma vez, fica na fila, e é a primeira a
ser descartada quando o buscador precisa economizar. Foi o que aconteceu: o
último rastreio dessas páginas é de **março e abril**.

---

## 4 · A duplicata interna

Jaccard sobre trigramas de palavra, medido **só no miolo** — header, nav e
rodapé fora, entidades HTML decodificadas antes de contar. As duas armadilhas
estão documentadas em `FERRAMENTAS-AUDITORIA.md` do repositório do `.com`;
ambas já me deram número errado antes.

Faixa de referência: **abaixo de 35% saudável · 35 a 50% incomoda · acima de
50% grave**.

| Grupo | média | pior par | URLs |
|---|---:|---:|---:|
| `/brasil/<cidade>` | **81,4%** | 82,8% | 209 |
| `/enxoval-de-bebe/<cidade>` | **72,9%** | 84,7% | 209 |
| `/brasil/<cidade>/<serviço>` | **68,1%** | 85,6% | 1.045 |
| `/cidades/<cidade EUA>` | **64,4%** | 86,2% | 624 |
| `/cursos/<curso>` | 29,8% | 46,3% | 8 |
| `/cursos/<curso>/<cidade>` | 24,8% | 76,9% | 2.504 |
| `/blog` | 24,6% | 34,3% | 59 |

**2.087 URLs entre 64% e 81%.**

Para calibrar: no `.com` a mesma doença estava em 55–64%, e isso bastava para
que 1.337 páginas publicadas rendessem impressão em apenas 89. Aqui é pior.

Pares reais, para não ficar no abstrato:

```
82,8%   /brasil/sinop                          ×  /brasil/rondonopolis
84,7%   /enxoval-de-bebe/aracruz               ×  /enxoval-de-bebe/linhares
85,6%   /brasil/delmiro-gouveia/google-meu-negocio × /brasil/sao-jose-sc/...
86,2%   /cidades/randolph/sites-landing-pages  ×  /cidades/burlington/...
```

O grupo `/cursos/<curso>/<cidade>` tem **média saudável (24,8%)** — é o maior
grupo do site e o que está em melhor forma. Mas o pior par dele, a 76,9%, revela
outra coisa: `/cursos/ia-chatgpt-completo/brasil/guarapuava` contra
`/cursos/ia-chatgpt-completo/cidade/braintree`. **São dois padrões de URL para a
mesma função** — `/brasil/` e `/cidade/` —, um para cidade brasileira e outro
para cidade americana, gerando o mesmo texto.

---

## 5 · Um terço do site é conteúdo americano em domínio brasileiro

Padrões de URL no sitemap:

```
/cursos/<curso>/brasil/<cidade>        1.672
/brasil/<cidade>/<serviço>             1.045
/cursos/<curso>/cidade/<cidade EUA>      832   ← EUA
/cidades/<cidade EUA>/<serviço>          520   ← EUA
/enxoval-de-bebe/<cidade>                210
/brasil/<cidade>                         209
/cidades/<cidade EUA>                    104   ← EUA
```

**1.456 URLs de cidade americana no `.com.br` — 31% do sitemap.**

Testei se são cópia do `.com`: **não são**. A sobreposição entre os dois
domínios é de 5,1% em página de cidade e 13,2% em cidade × serviço. São textos
diferentes, escritos em épocas diferentes.

Mas isso não resolve o problema, só muda o nome dele. Essas 1.456 páginas
disputam **o mesmo assunto e o mesmo público** que o `.com` já cobre — e o
`.com` cobre melhor, porque passou pela reforma de setembro. Duas páginas suas
competindo pela mesma busca é uma perdendo para a outra.

---

## 6 · As buscas que o site realmente captura

55 consultas distintas em 28 dias. Mais de vinte são deste formato:

```
inurl:chat.whatsapp.com engajamento porto          2 imp   pos 99,5
inurl:chat.whatsapp.com memes manaus               1 imp   pos 34
inurl:chat.whatsapp.com casais salvador            1 imp   pos 66
site:.com.br "chat.whatsapp.com" dropshipping      1 imp   pos  9
```

São pessoas usando operadores de busca para **achar grupo de WhatsApp**. O site
aparece porque tem alguma página que cita links de grupo. Essas impressões
nunca virão cliente — e, pior, ensinam o buscador a associar o domínio a esse
assunto.

Das 55 consultas, **55 tiveram zero clique**. Apenas 4 estão em posição igual
ou melhor que 20 — ou seja, quase nada está perto o suficiente para que mexer
no título resolva. O problema está antes: as páginas certas não estão indexadas.

---

## 7 · Higiene de página

Amostra de 99 páginas alcançadas pela varredura:

- **90 títulos acima de 60 caracteres.** O maior tem **110**. Acima de ~60 o
  Google corta, e o que ele corta é justamente o fim, onde costuma estar a
  cidade ou o diferencial.
- **8 páginas com título E descrição idênticos** — o genérico da home
  (*"Calazans Lumina | Agencia de Marketing Digital #1 para Brasileiros…"*).
- **8 páginas com 1 a 66 palavras**, respondendo 200 e linkadas:
  `/cursos/<curso>/aprender` (1 palavra) e `/cursos/<curso>/download`.
  Página de uma palavra com o título da home é o tipo de coisa que derruba a
  confiança do buscador no site inteiro.
- **2 links internos quebrados**, apontando para 404:
  `/blog/brasileiros-massachusetts-presenca-digital` e
  `/blog/seo-local-brasileiros-eua`.
- 9 páginas sem meta description, 12 sem `<h1>`.
- Acentuação ausente nos títulos: *"Agencia"*, *"Amamentacao"*, *"Posicoes"*.

---

## 8 · Sitemap

- **4.673 URLs**, arquivo único, todas únicas.
- **Todas com o mesmo `lastmod`: 2026-09-10** (a data do restore). Aqui isso é
  defensável, porque tudo foi restaurado no mesmo dia — mas não pode continuar
  assim no próximo ciclo.
- **Submetido em 27 de agosto** — o dia *anterior* à consolidação. Nunca mais
  foi reenviado, nem depois da reversão, nem depois do restore de 10/set.
- Última leitura do Google: 15/set. 0 erros, 2 avisos.
- O sitemap promete 4.673; a varredura alcançou 310 delas por link.

---

## 9 · O que está certo, e não deve ser mexido

Sendo justo com o que já funciona:

- **Desempenho.** LCP 188–664 ms, CLS 0 em todas as rotas testadas, iPhone 13
  emulado, site no ar. **Zero scripts de terceiro** — sem pixel, sem chat, sem
  widget. Está melhor que o `.com`, que carrega Meta Pixel, GA4, chat do GHL e
  ReputationHub.
- **Canonical.** Auto-referente e correto em todas as páginas testadas.
- **`robots` e `robots.txt`.** `index, follow`, com rastreadores de IA
  explicitamente liberados.
- **`www`.** 308 para o apex, preservando o caminho. Correto.
- **Blog.** 24,6% de sobreposição — o grupo mais saudável do site, e o único
  com 100% de alcance por link interno.
- **Página de curso** (`/cursos/<curso>`, 8 URLs): 29,8%. Saudável.

---

## O que eu faria, em ordem de impacto

Cada item traz por que está nessa posição.

**1. Decidir o que este domínio é.** Antes de qualquer correção técnica. Hoje o
`.com.br` é quatro sites empilhados: cursos, marketing para cidade brasileira,
enxoval de bebê e cidades americanas. As cidades americanas competem com o
`.com`. Enquanto isso não for decidido, qualquer trabalho de SEO é feito em cima
de areia. **Esta é sua decisão, não minha.**

**2. Linkar as órfãs.** É a correção de maior efeito e a mais barata: 2.513
páginas de curso com 17 links. Sem isso, nada mais adianta — não vale otimizar
uma página que o Google não tem motivo para visitar.

**3. Matar a duplicata dos grupos acima de 64%.** No `.com` a medida foi achar
os blocos idênticos e substituí-los por conteúdo que varia. Lá eram 465
palavras repetidas em 1.246 páginas; aqui o percentual é maior, então o bloco
repetido provavelmente é maior também. Medir bloco a bloco antes de escrever.

**4. Limpar o lixo que envenena o julgamento.** As 8 páginas de uma palavra, os
2 links para 404, o padrão `/cursos-em/` que virou 404, os 8 títulos idênticos.
São poucos itens e tiram sinal ruim de circulação.

**5. Títulos.** 90 de 99 acima de 60 caracteres, e acentuação faltando.

**6. Reenviar o sitemap** — depois dos itens acima, não antes. Reenviar agora
só faz o Google confirmar mais rápido o que ele já concluiu.

---

## Como refazer cada medida

Os scripts estão em `Downloads/lumina-com/` (fora do versionamento):

```
_gsc_auditoria.py    impressão, clique, consulta e página, 28 dias e comparação
_gsc_queda.py        semana a semana, 120 dias, e o que sumiu depois do corte
_gsc_inspecao.py     veredito do Google por URL (API de Inspeção de URL)
_dup_combr.py        Jaccard entre irmãs, por grupo de URL
_estrutura_combr.py  varredura a partir da home: órfãs, títulos, 404, páginas finas
```

Credenciais: conta de serviço `claude-gsc@…`, chave em `~/.chaves/gsc.json`,
`siteOwner` nas duas propriedades desde setembro.
