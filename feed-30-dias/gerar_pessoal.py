# -*- coding: utf-8 -*-
"""Gera o lookbook da biblioteca e os três carrosséis do perfil pessoal.

Renderizar mora aqui de propósito: o gerador apaga os PNG antigos antes de
escrever os HTML, então gerar num passo e renderizar noutro já deixou uma
pasta com um slide só — e eu só percebi depois de publicar.
"""
import subprocess
from pathlib import Path

import pessoal
from conteudo_pessoal import CARROSSEIS, FOTO

SAIDA = Path(__file__).parent / "pessoal"
CHROME = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome"

# conteúdo de mostruário: curto, real e suficiente pra julgar cada layout
AMOSTRAS = {
    "c1_empilhada": dict(linhas=["Coisas que eu", "acho chique", "numa mãe",
                                 "que trabalha"], chapeu="sem ironia nenhuma"),
    "c2_mista":     dict(serif="Ocupada", sans="não é presente",
                         sob="maternidade e trabalho"),
    "c3_pergunta":  dict(chamada="Me conta,",
                         manuscrito="o que você parou de fazer<br>depois que virou mãe?"),
    "c4_diario":    dict(manuscrito="meu dia<br>em um post",
                         episodio="ep 1:<br>a manhã<br>que deu certo"),
    "c5_editorial": dict(rotulo="ninguém diz isso em voz alta",
                         hook="Virar mãe me deixou<br>melhor no meu trabalho."),
    "m1_sangria":   dict(numero=1, frase="O meu sim<br>ficou caro.",
                         apoio="Quando o tempo passa a ter dono, você para de dizer sim por educação. Hoje eu recuso em uma linha."),
    "m2_placa":     dict(numero=2, frase="Dia cheio deixou<br>de ser troféu.",
                         apoio="Dia cheio é sintoma, não resultado. Ninguém me paga pelas minhas horas — me paga pelo que sai delas.",
                         plano="baixo"),
    "m3_mono":      dict(numero=3, frase="Aprendi a<br>terminar hoje.", mono=True,
                         plano="leve",
                         apoio="Quando “depois” virou uma coisa que pode não existir, tarefa pela metade deixou de ser opção."),
    "p1_desfoque":  dict(texto="Não foi apesar dela.<br>Foi por causa dela."),
    "f1_fecho":     dict(linha="Você não ficou menor.<br>Você ficou mais exata.",
                         salvar="Salva pra reler no dia em que duvidarem de você.",
                         mandar="Manda pra uma mãe que acha que vai ter que escolher.",
                         comentar="Comenta o que ficou melhor no seu trabalho."),
}
# m3 é a m1 com o tratamento ligado — o índice separa, o código não
FUNCAO = {"m3_mono": "m1_sangria"}


def _limpa(pasta):
    pasta.mkdir(parents=True, exist_ok=True)
    for velho in list(pasta.glob("*.html")) + list(pasta.glob("*.png")):
        velho.unlink()


def renderiza(pasta):
    from PIL import Image
    for html in sorted(pasta.glob("[0-9a-z]*.html")):
        png = html.with_suffix(".png")
        subprocess.run([
            CHROME, "--headless", "--disable-gpu", "--no-sandbox",
            "--hide-scrollbars", "--force-device-scale-factor=1",
            f"--window-size={pessoal.L},{pessoal.A + 180}",
            "--virtual-time-budget=8000", f"--screenshot={png}",
            f"file://{html.resolve()}"], check=True, capture_output=True)
        im = Image.open(png)
        if im.size != (pessoal.L, pessoal.A):
            im.crop((0, 0, pessoal.L, pessoal.A)).save(png)


def lookbook():
    """Uma peça por layout, com a mesma foto — é assim que se compara."""
    pasta = SAIDA / "00_lookbook"
    _limpa(pasta)
    for nome, _titulo, _fam, _uso, _ref in pessoal.LAYOUTS:
        fn = getattr(pessoal, FUNCAO.get(nome, nome))
        html = fn(foto=FOTO, **AMOSTRAS[nome])
        (pasta / f"{nome}.html").write_text(html, encoding="utf-8")
    renderiza(pasta)
    print(f'  {"00_lookbook":<24} {len(pessoal.LAYOUTS)} layouts')


def carrossel(c):
    pasta = SAIDA / c["id"]
    _limpa(pasta)
    n = len(c["slides"])
    for i, (disp, kw) in enumerate(c["slides"], start=1):
        fn = getattr(pessoal, FUNCAO.get(disp, disp))
        extra = {} if i in (1, n) else {"i": i, "n": n}
        html = fn(foto=c["foto"] if "foto" in kw else FOTO, **kw, **extra)
        (pasta / f"{i:02d}_{disp}.html").write_text(html, encoding="utf-8")
    renderiza(pasta)
    print(f'  {c["id"]:<24} {n} slides   capa {c["capa"]}')


def main():
    lookbook()
    for c in CARROSSEIS:
        carrossel(c)


if __name__ == "__main__":
    main()
