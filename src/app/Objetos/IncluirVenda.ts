import { VendaProduto } from "./VendaProduto";

export interface IncluirVenda{
    data:Date,
    valorTotal:number,
    idPagamento:number,
    produtos:VendaProduto[]
}