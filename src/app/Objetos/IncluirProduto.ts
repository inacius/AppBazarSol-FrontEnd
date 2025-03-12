export interface IncluirProduto {
    
    nome: string,
    preco: number,
    dataUltimaCompra: Date,
    controlaEstoque: boolean,
    quantidadeEstoque: number,
    codigoBarras:number,
    atalho:boolean,
    servico:boolean
}