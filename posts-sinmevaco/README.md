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
- `LEGENDAS.md` — legendas prontas, hashtags e sugestão de calendário
- `_PREVIEW.html` — todos os slides numa página só
- `fontes/` — DM Serif Display + DM Sans locais (renderiza offline, sem depender do Google Fonts)

## Fotos (opcional)

Cada slide já fecha sem foto. Para usar imagens próprias do sindicato, coloque os arquivos em `fotos/` com estes nomes:

```
fotos/plantao-capa.jpg  fotos/plantao-a.jpg  fotos/plantao-b.jpg
fotos/crm-capa.jpg      fotos/crm-a.jpg      fotos/crm-b.jpg
fotos/pj-capa.jpg       fotos/pj-a.jpg       fotos/pj-b.jpg
```

Depois rode `./renderizar.sh` de novo. Sem os arquivos, o degradê de fundo assume.

## Antes de publicar — confirmar com o cliente

Os dados abaixo estão no topo de `gerar_posts.py` e vieram de fontes públicas. **Confirme com o SINMEVAÇO antes de postar:**

- `HANDLE` — `@sinmevaco` (marca d'água em todos os slides)
- `FONE` — `(31) 99507-4027`
- `SITE` — `sinmevaco.com.br`
- A lista de benefícios do post 06 — jurídico, negociação coletiva e representação constam do site; leitura de contratos e orientação em PJ/cooperativa precisam de confirmação
- O logo é um lockup provisório (letra "S" + nome). Substituir pelo logo oficial do sindicato em `.logo .mark`.
