# Fotos de fundo

A camada de foto está pronta e testada: o arquivo entra **colorido** (regra da casa), com um
scrim que garante a leitura do texto e resolve o dourado sobre a imagem. Sem arquivo, o campo
gráfico assume e a peça continua fechada.

## Como usar

Coloque o arquivo aqui com o nome do slot e rode `./renderizar.sh`. Nada mais.

| Slot | Onde entra | Cena que pede |
|---|---|---|
| `atraso-capa.jpg` `atraso-a.jpg` `atraso-b.jpg` | carrossel do atraso de pagamento | médico conferindo contracheque, sala de plantão |
| `plantao-capa.jpg` `plantao-a.jpg` `plantao-b.jpg` | plantão reduzido | corredor de hospital, escala na parede |
| `crm-capa.jpg` `crm-a.jpg` `crm-b.jpg` | ameaça de processo | prontuário, mesa de consultório |
| `pj-capa.jpg` `pj-a.jpg` `pj-b.jpg` | contrato PJ | contrato sobre a mesa, caneta |
| `stf.jpg` | pejotização no STF | prédio institucional, documento |
| `moldura.jpg` | não assine hoje | contrato sendo assinado |
| `versus.jpg` | CLT vs PJ | — opcional, a peça fecha sem foto |
| `convencao.jpg` | como a convenção funciona | assembleia, mesa de negociação |
| `fluxo.jpg` | fluxo do jurídico | atendimento, escritório |
| `colchete.jpg` | quando o hospital atrasa | fachada de hospital |
| `tela.jpg` | seu contrato não protege | celular, mensagem |
| `cartao-capa.jpg` | cartão com pergunta | médico em cena de trabalho |

## O banco que vocês já têm

O `SINMEVACO_4_POSTS_BANCO_IMAGENS_2026-07-22/generate_4_posts.py` aponta para um banco local
que **não está versionado** — dez geradores do repositório dependem dele:

```
_MEDIA_STOCK/foto_medico_uti.jpg
_MEDIA_STOCK/foto_documento_lei.jpg
_MEDIA_STOCK/foto_reuniao_grupo.jpg
_MEDIA_STOCK/foto_prontuario_stethoscope.jpg
```

Essas quatro cobrem a maioria dos slots acima: `foto_documento_lei` serve contrato, cláusula e
STF; `foto_reuniao_grupo` serve convenção e assembleia; `foto_prontuario_stethoscope` serve CRM
e prontuário; `foto_medico_uti` serve plantão.

A única imagem que sobreviveu ao versionamento no repositório é um robô Pepper
(`photo-1485827404703-89b55fcc595e.jfif`), sobra de outro projeto — não serve para o sindicato.
