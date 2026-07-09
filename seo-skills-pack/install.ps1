# Instala as 12 skills SEO no Claude Code (Windows PowerShell)
# Uso: .\install.ps1                 -> instala globalmente em ~/.claude/skills (todas as conversas)
#      .\install.ps1 -Local          -> instala no projeto atual em .claude/skills (so este projeto)
#      .\install.ps1 -Local -Path C:\caminho\do\site

param(
  [switch]$Local,
  [string]$Path = (Get-Location).Path
)

$src = Join-Path $PSScriptRoot "."
$dst = if ($Local) { Join-Path $Path ".claude\skills" } else { Join-Path $HOME ".claude\skills" }

New-Item -ItemType Directory -Force -Path $dst | Out-Null
Write-Host "Instalando em: $dst" -ForegroundColor Cyan

$skills = Get-ChildItem -Path $src -Directory
foreach ($skill in $skills) {
  $target = Join-Path $dst $skill.Name
  if (Test-Path $target) {
    Write-Host "  [skip] $($skill.Name) ja existe" -ForegroundColor Yellow
    continue
  }
  Copy-Item -Recurse $skill.FullName $target
  Write-Host "  [ok]   $($skill.Name)" -ForegroundColor Green
}

Write-Host "`nFeito. Reinicie o Claude Code pra carregar as skills." -ForegroundColor Cyan
Write-Host "Lista: seo-audit, programmatic-seo, ai-seo, schema-markup, on-page-seo-auditor,"
Write-Host "       meta-tags-optimizer, geo-content-optimizer, optimize-for-ai, seo-sitemap,"
Write-Host "       seo-google, seo-programmatic, seo-geo"
