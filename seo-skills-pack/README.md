# Pacote SEO · 12 Skills pra Claude Code

12 skills empacotadas pra você usar em **qualquer outro site** Next.js, WordPress, Astro, Hugo, etc.

Origem: corey/marketingskills, aaron-he-zhu/seo-geo-claude-skills, calm-north/seojuice-skills, agricidaniel/claude-seo (todas baixadas dos repos oficiais em 2026-05-16).

## Instalação

### Windows (PowerShell)

```powershell
# Global (todas as conversas do Claude Code)
.\install.ps1

# Apenas neste projeto
.\install.ps1 -Local
```

### macOS / Linux / Git Bash

```bash
./install.sh           # global
./install.sh --local   # apenas neste projeto
```

Depois disso, **reinicie o Claude Code**. As skills aparecem como atalhos.

## Skills inclusas

| Skill | Pra que serve |
|---|---|
| **seo-audit** | Auditoria SEO completa (técnico, on-page, conteúdo, performance) |
| **programmatic-seo** | Criar centenas/milhares de páginas SEO em escala (curso × cidade, etc.) |
| **ai-seo** | Otimizar pro Google AI Overviews + ChatGPT + Perplexity |
| **schema-markup** | Gerar JSON-LD (Course, FAQ, LocalBusiness, BreadcrumbList) |
| **on-page-seo-auditor** | Audita títulos, headers, imagens, links de cada página |
| **meta-tags-optimizer** | Reescreve meta title + description com CTAs que dão CTR |
| **geo-content-optimizer** | Otimiza conteúdo pra AI citation (Generative Engine Optimization) |
| **optimize-for-ai** | Adapta conteúdo pra ser citado por LLMs (Princeton CITE framework) |
| **seo-sitemap** | Gera + valida sitemap.xml, robots.txt, llms.txt |
| **seo-google** | Setup completo pra Google Search Console + indexação |
| **seo-programmatic** | Versão alternativa pra programmatic SEO (Daniel) |
| **seo-geo** | GEO/local SEO (Google Business, citations, NAP, reviews) |

## Comando único pra rodar a auditoria

Cole isso na conversa do Claude Code em **qualquer outro site**:

```
Faz uma auditoria SEO completa nesse site usando a skill seo-audit. Depois aplica os fixes
priorizados que NÃO impactam performance (PageSpeed é sagrado): só metadata, JSON-LD,
HTML estático e arquivos como robots.txt / sitemap.xml / llms.txt.

Use também as skills programmatic-seo (se tiver páginas por cidade ou serviço),
ai-seo + optimize-for-ai (pra Google AI Overviews), schema-markup (JSON-LD),
meta-tags-optimizer (CTAs nos meta descriptions) e on-page-seo-auditor.

Bloqueado:
- Google Maps embeds, vídeos above-fold
- Bibliotecas JS novas
- Web fonts adicionais
- Qualquer coisa que mexa no bundle JS

Entrega: punch-list priorizado (CRITICAL > HIGH > MEDIUM > GEO/AI) + faz os fixes
de CRITICAL e HIGH no mesmo passo, build, commit e deploy.
```

## O que essas skills fizeram no Calazans Lumina

- **Antes:** PageSpeed 95/95/100/100, FAQ schema com 2 perguntas genéricas, sem LocalBusiness, sem hreflang.
- **Depois:** PageSpeed mantido (zero regressão), FAQ schema com 5 Q&A contextuais + objeções, LocalBusiness em cada uma das 482 cidades, hreflang pt-BR + x-default, quotable intro com stats (Princeton GEO: +37% AI citation), llms.txt expandido.
- **Total:** 4.820 páginas estáticas atingidas com 1 helper compartilhado (`lib/seo-schemas.ts`).

Histórico das mudanças: ver commits `feat(seo): SEO audit fixes` na branch main.
