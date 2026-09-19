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

- `casa.py` — tokens de marca (cores, fontes, logo), formato 1080×1440 (3:4)
- `modelos.py` — miolo dos carrosséis (passo, erro, lista, prova, agenda…)
- `modelos2.py` — os 12 modelos de capa/estático (a variedade que aparece
  na grade do perfil): 6 com foto real, 6 só forma/tipografia
- `capas.py` — qual dos 12 modelos cada publicação usa, com o conteúdo real
- `conteudo.py` — o calendário inteiro: datas, legendas, slides, cenas de reel
- `reels.py` + `reel_fotos.py` + `gerar_reels.py` — motor dos reels (Ken
  Burns sobre foto real via ffmpeg zoompan)
- `fotos/` — 7 fotos já existentes no repositório da agência (não veio de
  banco de imagem — está bloqueado nesta rede; ver estudo, nota de rede)
- `gerar.py` → gera todo HTML · `renderizar.sh` → screenshot + recorte

Para regenerar tudo do zero: `python3 gerar.py && ./renderizar.sh &&
python3 gerar_reels.py`

## O limite que preciso deixar claro

Os reels usam foto de banco parada + movimento de câmera (Ken Burns), não
filmagem real. É o melhor placeholder possível com o que existe no
repositório — mas a própria pesquisa de B2B mostra que vídeo de celular
da Rhaideline, com boa luz, bate qualquer coisa montada assim. O roteiro
de cada reel (a legenda em `FEED-MENSAL.md`, cena por cena) já está pronto
pra ela regravar quando quiser — é só trocar o "ator".
