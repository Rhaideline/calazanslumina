# Feed de 30 dias — Calazans Lumina

22 publicações para @calazanslumina · 21/09 a 20/10/2026 · 5 por semana.
9 carrosséis, 8 reels, 5 estáticos (ver `ESTUDO-CRAFT-2026.md`, item 2, para
por que essa mistura e não outra).

## Onde está cada coisa

- **`FEED-MENSAL.md`** — o calendário com data, legenda completa e hashtags
  de cada publicação. É o documento pra usar no dia a dia.
- **`ESTUDO-CRAFT-2026.md`** — a pesquisa que decidiu cada escolha de design,
  com fonte. Inclui a correção do item 11: por que o sistema ganhou fita
  adesiva, carimbo torto e monoespaçada (tendência "Imperfect by Design",
  Canva 2026) depois da primeira versão ter saído limpa demais.
- **`<id_do_post>/`** — uma pasta por publicação:
  - carrossel: `01_capa.png` até `0N_modelo.png`
  - estático: `01_capa.png`
  - reel: `reel.mp4` (1080×1920, H.264+AAC, 17-20s)

## O sistema (código, se precisar regenerar ou ajustar)

Tudo sai de um repertório só — `modelos3.py`, 16 dispositivos gráficos. A
versão anterior tinha duas camadas (capa bonita + miolo genérico) e foi o
que a cliente apontou; ela está no histórico do git, não no diretório.

- `casa.py` — tokens de marca (cores, fontes), formato 1080×1440 (3:4)
- `modelos3.py` — os 16 modelos. Cada um tem um recurso gráfico próprio,
  não é o mesmo bloco com padding diferente:

  | | |
  |---|---|
  | `mascara` foto dentro das letras | `grade` grade editorial de 12 colunas |
  | `fantasma` algarismo gigante vazado | `vazado` linha cheia + linha em contorno |
  | `duotone` foto em duas cores | `reticula` foto virando pontos |
  | `lombada` texto vertical na borda | `recorte` foto fatiada em tiras |
  | `trama` palavra repetida, uma linha em vermelho | `mosaico` quatro fotos assimétricas |
  | `planta` ficha técnica com medidas | `travessa` frase atravessando claro/escuro |
  | `linha` linha do tempo com marcos | `colunas` duas colunas confrontadas |
  | `aspas` citação com aspa desenhada | `veladura` foto sob camada de cor |

- `feed3.py` — qual modelo cada uma das 66 peças usa, com o conteúdo real.
  Cada carrossel é capa → mapa (grade/linha/colunas) → detalhe (fantasma
  numerado) → respiro (aspas/travessa/retícula) → fecho vazado vermelho,
  que é igual em todos e funciona como assinatura da casa.
- `conteudo.py` — o calendário inteiro: datas, legendas, slides, cenas
- `reels3.py` + `reel_fotos.py` + `gerar_reels3.py` — motor dos reels, mesmo
  repertório em 9:16 (abertura, dito, travessa, cifra, vazado)
- `showcase3.py` — um exemplo de cada modelo, para escolher sem abrir o feed
- `fotos/` — 7 fotos já existentes no repositório da agência (não veio de
  banco de imagem — está bloqueado nesta rede; ver estudo, nota de rede)

Para regenerar tudo do zero:

```
python3 gerar3.py && ./renderizar.sh && python3 gerar_reels3.py
```

## Perfil pessoal — @rhaicalazans

Voz e sistema separados do feed da agência. Cada decisão está justificada
com fonte em **`ESTUDO-PESSOAL-2026.md`**, inclusive as que corrigiram
entregas minhas anteriores.

**1080×1440 (3:4)**, nove slides, **foto em todos** — a cliente comparou as
duas versões e escolheu esta.

Com uma imagem só em nove slides, o ritmo tem que vir de outro lugar. Vem de
três eixos que preservam a cena inteira: **layout** (sangria × placa
emoldurada), **tratamento** (cor × monocromia quente × desfoque) e **posição
do texto**. Variar por plano fechado foi testado e descartado: nesta foto
ela está rindo de boca aberta e todo enquadramento fechado cai na boca.

- `pessoal.py` — `capa`, `placa`, `baixo` (com `mono`), `desfoque`, `fecho`
- `conteudo_pessoal.py` — o carrossel, a legenda e as instruções de
  publicação (inclusive a música, que é o item de maior alcance e não é
  código)
- `gerar_pessoal.py` — escreve os HTML **e renderiza**. Renderizar mora ali
  de propósito: o gerador apaga os PNG antigos antes de escrever, então
  gerar num passo e renderizar noutro já deixou a pasta com um slide só.
- `verificar_contraste.py` — mede o contraste no PNG renderizado, não nas
  cores do CSS. Foi assim que eu peguei o acento da marca reprovando em
  3,2:1 sobre o papel, que a folha de estilo não tinha como contar.

Fontes em `fontes/`: Playfair Display itálico, somada às da casa. Caveat foi
baixada e descartada — letra de mão lê como recado de geladeira, não como
editorial.

## O limite que preciso deixar claro

Os reels usam foto de banco parada + movimento de câmera (Ken Burns), não
filmagem real. É o melhor placeholder possível com o que existe no
repositório — mas a própria pesquisa de B2B mostra que vídeo de celular
da Rhaideline, com boa luz, bate qualquer coisa montada assim. O roteiro
de cada reel (a legenda em `FEED-MENSAL.md`, cena por cena) já está pronto
pra ela regravar quando quiser — é só trocar o "ator".
