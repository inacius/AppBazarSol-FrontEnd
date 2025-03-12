import { Fornecedor } from "./Fornecedor";

export interface Compra
{
    id : number,
    valor : number,
    dataCompra : Date,
    parcelas : number,
    dataPrimeiroPagamento : Date,
    nf : number
    fornecedor:Fornecedor
    dataUltimoPagamento : Date
}


