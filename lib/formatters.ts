/** Formata preço BRL com 2 decimais: 9.9 -> "9,90", 10 -> "10,00", 297 -> "297,00" */
export function formatPreco(preco: number): string {
  return preco.toFixed(2).replace('.', ',')
}

/** Versão compacta sem zeros à direita: 9.9 -> "9,90" mas 10 -> "10" */
export function formatPrecoCompacto(preco: number): string {
  return Number.isInteger(preco) ? String(preco) : preco.toFixed(2).replace('.', ',')
}
