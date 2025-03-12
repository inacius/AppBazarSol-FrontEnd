export interface Produto {
  idProduto: number,
  nome: string,
  preco: number,
  dataUltimaCompra: Date,
  controlaEstoque: boolean,
  quantidadeEstoque: number,
  codigoBarras: number,
  atalho: boolean
}
