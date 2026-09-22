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

Sistema próprio, separado do feed da agência. **Dez layouts, uma foto, um
formato.** O sistema inteiro — tokens, regras e cada layout com preview —
está publicado como Design System:
https://claude.ai/artifact/NywUbdA6DCGZpzrgN1gJrf

Cinco das dez peças vieram dos modelos de Canva que a cliente mandou; as
outras cinco são proposta da casa. Elas convivem no mesmo sistema de
tokens, mesma régua tipográfica e mesma linha de base — que é o que as
torna intercambiáveis de verdade.

| família | peças |
| --- | --- |
| capas | C1 Empilhada · C2 Mista · C3 Pergunta · C4 Diário · C5 Editorial |
| miolo | M1 Sangria · M2 Placa · M3 Monocromia |
| pausa e fecho | P1 Desfoque · F1 Fecho |

Com uma imagem só em nove slides, o ritmo vem de três eixos que preservam
a cena inteira: **layout** (sangria × placa), **tratamento** (cor ×
monocromia × desfoque) e **posição do texto**. Variar por plano fechado foi
testado e descartado — nesta foto ela ri de boca aberta e todo
enquadramento fechado cai na boca.

### Modelo REVISTA — `revista.py`

Família nova, do último modelo de Canva que ela mandou, criada depois do
diagnóstico dela: *"o carrossel após a capa tem muita cara de IA"*. Está
certo, e dá pra nomear as três marcas que produziam essa sensação:

1. degradê preto pesado cobrindo o terço de baixo da foto, em todo slide
2. parágrafo de apoio de três a quatro linhas em toda peça
3. nenhuma estrutura repetida — cada slide era um pôster solto

O modelo resolve os três: **barra de topo** com categoria e arroba (repete
nas seis peças e é o que faz o conjunto parecer template desenhado),
**foto limpa** sem degradê — onde precisa de fundo entra bloco chapado com
filete —, **pilha de tipo** com caixa-alta fina contra palavra gigante em
serifa, e **pouca palavra**: uma frase e no máximo uma linha de apoio.

Peças: `capa` · `item` · `destaque` · `frase` · `fecho`.
Conteúdo em `conteudo_revista.py`, gerador em `gerar_revista.py`.

A pilha carrega o próprio escurecimento em vez de depender de um degradê
de peça inteira — assim ela pode parar onde a foto for calma. Nesta foto
isso é acima dos olhos dela: a primeira versão pousava a palavra gigante
exatamente em cima do olhar.

- `pessoal.py` — a biblioteca, com o índice `LAYOUTS` no fim
- `conteudo_pessoal.py` — três carrosséis prontos, um por linguagem de capa
- `gerar_pessoal.py` — escreve, **renderiza** o lookbook e os três
  carrosséis. Renderizar mora ali de propósito: o gerador apaga os PNG
  antigos antes de escrever, e gerar num passo e renderizar noutro já
  deixou uma pasta com um slide só.
- `verificar_contraste.py` — mede o contraste no PNG renderizado, não nas
  cores do CSS
- `ESTUDO-PESSOAL-2026.md` — os onze achados de pesquisa com fonte

## O limite que preciso deixar claro

Os reels usam foto de banco parada + movimento de câmera (Ken Burns), não
filmagem real. É o melhor placeholder possível com o que existe no
repositório — mas a própria pesquisa de B2B mostra que vídeo de celular
da Rhaideline, com boa luz, bate qualquer coisa montada assim. O roteiro
de cada reel (a legenda em `FEED-MENSAL.md`, cena por cena) já está pronto
pra ela regravar quando quiser — é só trocar o "ator".
