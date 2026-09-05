"""Escreve FEED-MENSAL.md a partir do CALENDARIO do gerador.

O calendario mora no codigo; este script so o publica em markdown, para que o
documento nunca divirja do que foi renderizado.
"""
from pathlib import Path

import gerar_posts as G

PILARES = {
    "Direito":   ("O que a norma ja garante", "Tira o direito do abstrato: artigo, resolucao, sumula. Sempre com a fonte na legenda."),
    "Caso real": ("Caso real, o que fazer",   "Uma situacao que o medico reconhece, e o passo a passo que protege."),
    "Correcao":  ("Mito x verdade",           "Corrige uma crenca da categoria. E o formato que mais gera comentario."),
    "Bastidor":  ("O sindicato por dentro",   "Mostra o trabalho que ninguem ve. E a resposta ao 'o sindicato nao faz nada'."),
    "Convite":   ("Convite",                  "Pergunta no direct, assembleia, filiacao. Uma acao so por peca."),
}

ANCORAS = {
    "semana-01/1_seg_carrossel_atraso": "Resolucao CFM 2.462/2026 · CLT art. 459",
    "25_mito_quatro_horas": "Sumula 370 do TST · Lei 3.999/1961",
    "27_prontuario_20_anos": "Resolucao CFM 1.821/2008",
    "12_pergunta_associado": "orientacao processual",
    "14_caixa_contato": "servico do sindicato",
    "03_contrato_pj": "requisitos do vinculo · CLT art. 3o",
    "11_clausula_reajuste": "checklist de contrato",
    "21_erros_contrato": "clausulas contratuais",
    "17_clt_vs_pj": "CLT x contrato civil",
    "30_provar_vinculo": "CLT art. 3o",
    "01_plantao_reduzido": "CF art. 7o, VI · CLT art. 468",
    "20_capa_colchete": "CF art. 7o, VI",
    "26_substituto_processual": "CF art. 8o, III · STF · cancelamento da Sumula 310 do TST",
    "05_escala_de_plantao": "CLT art. 59-A · STF",
    "29_feriado_12x36": "CLT art. 59-A, paragrafo unico",
    "23_pejotizacao_stf": "Tema 1389 do STF (em julgamento)",
    "09_mito_verdade_sindicato": "CF art. 8o, III",
    "19_fluxo_juridico": "atendimento juridico",
    "28_contribuicoes": "Lei 13.467/2017 · STF 2023 e dezembro/2025",
    "08_numero_35_anos": "fundacao em 17/05/1991",
}

FORMATO = {}


def main():
    datas = G.datas_do_mes()
    dias = ["segunda", "terca", "quarta", "quinta", "sexta"]
    primeiros = {p: s[0][1] for p, s in G.POSTS}
    plano = G.variacao(primeiros)
    slides = {p: len(s) for p, s in G.POSTS}

    linhas = [
        "# Feed do mes — SINMEVACO",
        "",
        f"{len(G.CALENDARIO)} publicacoes, {datas[0].strftime('%d/%m/%Y')} a {datas[-1].strftime('%d/%m/%Y')}, "
        "uma por dia util.",
        "",
        "Este arquivo e gerado por `gerar_calendario.py` a partir do `CALENDARIO` "
        "que esta dentro do `gerar_posts.py` — o mesmo que define o que foi renderizado. "
        "Mudou o calendario, rode de novo.",
        "",
        "## Os cinco pilares",
        "",
        "| Pilar | O que e | Por que existe |",
        "|---|---|---|",
    ]
    for chave, (nome, porque) in PILARES.items():
        linhas.append(f"| **{chave}** | {nome} | {porque} |")

    linhas += [
        "",
        "Nenhum pilar aparece dois dias seguidos, e o motor de variacao garante que "
        "duas publicacoes vizinhas nunca caiam na mesma familia de fundo.",
        "",
        "## O mes",
        "",
    ]

    for semana in range(4):
        bloco = list(zip(G.CALENDARIO, datas))[semana * 5:(semana + 1) * 5]
        if not bloco:
            break
        ini, fim = bloco[0][1], bloco[-1][1]
        linhas += [
            f"### Semana {semana + 1} — {ini.strftime('%d/%m')} a {fim.strftime('%d/%m')}",
            "",
            "| Dia | Pilar | Formato | Gancho | Ancora | Fundo |",
            "|---|---|---|---|---|---|",
        ]
        for (pasta, pilar, gancho), data in bloco:
            n = slides.get(pasta, 1)
            fmt = f"carrossel · {n}" if n > 1 else "unico"
            tema, _ = plano.get(pasta, ("", ""))
            fam = G.familia(primeiros.get(pasta, ""))
            fundo = {"t-claro": "papel", "t-verde": "verde", "t-escuro": "escuro"}.get(tema, fam)
            linhas.append(
                f"| {data.strftime('%d/%m')} {dias[data.weekday()]} | {pilar} | {fmt} | "
                f"{gancho} | {ANCORAS.get(pasta, '—')} | {fundo} |")
        linhas.append("")

    linhas += [
        "## Banco de reserva",
        "",
        "Pecas prontas fora do mes, para substituir qualquer publicacao que precise sair "
        "(data comemorativa, nota de apoio, urgencia da diretoria):",
        "",
    ]
    for pasta in G.RESERVA:
        n = slides.get(pasta, 1)
        linhas.append(f"- `{pasta}` — {'carrossel de ' + str(n) + ' slides' if n > 1 else 'post unico'}")

    linhas += [
        "",
        "## Regras que valem para toda peca",
        "",
        "1. Toda afirmacao juridica tem ancora em `ESTUDO-SINDICATO-MEDICO.md`. Sem fonte, nao vai ao ar.",
        "2. A capa abre uma pergunta que o carrossel responde no meio, nunca no primeiro slide.",
        "3. Um unico italico por peca, so no acento — regra da casa.",
        "4. Nada de texto abaixo de 24px.",
        "5. Uma acao por peca. Dois CTAs e nenhum CTA.",
        "6. Onde a norma ainda esta em julgamento, a peca diz que esta em julgamento.",
        "",
    ]
    Path("FEED-MENSAL.md").write_text("\n".join(linhas), encoding="utf-8")
    print(f"FEED-MENSAL.md: {len(G.CALENDARIO)} publicacoes, {len(G.RESERVA)} na reserva")


if __name__ == "__main__":
    main()
