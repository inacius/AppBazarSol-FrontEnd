import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Produtos } from "src/app/Objetos/Produtos";
import { Operadora } from "../Objetos/Operadora";
import { ProdutoAtalho } from "../Objetos/ProdutoAtalho";
import { Venda } from "../Objetos/Venda";
import { IncluirVenda } from "../Objetos/IncluirVenda";
import { IncluirProduto } from "../Objetos/IncluirProduto";
import { formatDate } from "@angular/common";
import { RelatorioVendasPorDias } from "../Objetos/RelatorioVendasPorDias";
import { IncluirRelatorioVendasPorDias } from "../Objetos/IncluirRelatorioVendasPorDia";
import { ServicosPC } from "../Objetos/ServicosPC";
import { ProdutoVenda } from "../Objetos/ProdutoVenda";
import { OperadoraValores } from "../Objetos/OperadoraValores";
import { TotalProdutoDia } from "../Objetos/TotalProdutoDia";
import { ProdutoRelatorio } from "../Objetos/ProdutoRelatorio";
import { Produto } from "../Produto";
import { AbreFechaCaixa } from "../Objetos/AbreFechaCaixa";
import { SaidaDeCaixa } from "../Objetos/SaidaDeCaixa";
import { Fornecedor } from "../Objetos/Fornecedor";
import { Compra } from "../Objetos/Compra";
import { RelatorioGeral } from "../Objetos/RelatorioGeral";
import { RelBalanco } from "../Objetos/RelBalanco";
import { RelCompraPorFornecedor } from "../Objetos/RelCompraPorFornecedor";

const httpOptions = {
    headers : new HttpHeaders({
        'Content-Type': 'application/json'
    })
};



@Injectable ()

export class BancoDados {


  diaMiliseg = 8.64e+7;
  formatoData = 'yyyy-MM-dd';
  locale = 'en-US';

  URL: string;
  //ID Produto desconto
  Desconto:number = 1043;


    novoProduto = {id: 7,nome: 'Espelho',preco: 21,dataUltimaCompra: '04/03/2020',controlaEstoque: 1,quantidade: 1};    

    //novoProduto: String = "{id: 6}";    
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string){

    this.URL = baseUrl;

    };

    produtos: Produtos;
    operadora:Operadora

    ProdutoJsonServer(){
        return this.http.get<IncluirProduto[]>('http://localhost:3000/Produtos')
    }

    pegaDadoHttp(){
        
        return  this.http
        .get<Produtos[]>(this.URL+"Produtos") 
    }

    listaProdutoParaVenda(){
        
        return  this.http
        .get<Produtos[]>(this.URL+"Produtos/ListaParaVendas") 
    }

    AdicionaProdutoHttp(produto:IncluirProduto){
      return this.http.post<IncluirProduto>(this.URL + "Produtos",produto ,httpOptions).subscribe(resposta => {
    console.log(resposta)    
})
    }    

    AtualizaProdutoHttp(produto:Produtos){
      return this.http.put<Produtos>(this.URL + "Produtos/"+produto.id, produto ,httpOptions);
     }
     
     TotalProdutoDia(data:Date){
        formatDate(data,this.formatoData,this.locale)
        return this.http.get<ProdutoRelatorio[]>(this.URL + "vendas/VendasDoDiaDetalhado?data="+formatDate(data,this.formatoData,this.locale))
     
    }

    AdicionaProdutoVenda(produto:ProdutoVenda){
        return this.http.post<ProdutoVenda[]>(this.URL + "ProdutoVenda",produto ,httpOptions);
      }
      
    RemoverItemProdutoVenda(id:number)  {
        return this.http.delete<ProdutoVenda>(this.URL+"ProdutoVenda/"+id);
    }

    ConsultaProdutoVenda() {
        return this.http.get<ProdutoVenda[]>(this.URL+"ProdutoVenda")
      }

    AtualizaProdutoVenda(produto:ProdutoVenda){
        return this.http.put<ProdutoVenda[]>(this.URL + "ProdutoVenda/"+produto.id,produto ,httpOptions);
    }  

    AdicionaOperadora(operadora:Operadora){
        return this.http.post<Operadora>(this.URL+'Operadoras',operadora ,httpOptions)
    }

    AtualizaOperadora(operadora:Operadora){
        return this.http.put<Operadora>(this.URL+'Operadoras/'+operadora.id,operadora ,httpOptions)
    }

    ConsultaOperadora(){        
        return this.http.get<Operadora[]>(this.URL+"Operadoras")
    }

    AdicionaValorOperadora(operadorasvalores:OperadoraValores){
        return this.http.post<OperadoraValores>(this.URL+'operadorasvalores',operadorasvalores ,httpOptions)
    }

    ConsultaValorOperadora(id:number){
        return this.http.get<OperadoraValores[]>(this.URL+'operadorasvalores/'+id)
    }

    RemoveValorOperadora(operadorasvalores:number){
        return this.http.delete<OperadoraValores>(this.URL+'operadorasvalores/'+operadorasvalores)
    }

    ConsultaAtalhos(){
        return this.http.get<ProdutoAtalho[]>(this.URL+'produtos/atalho?atalho=true')
    }


    AdicionarVendaNovo(venda:number){
        return this.http.post<Venda>(this.URL+'vendas',venda ,httpOptions)
    }

    ListaDataVendas(){
        return this.http.get<Date[]>(this.URL+'vendas/listadias')
    } 

    ConsultaRelatorioVendaPorDia(data:string){
        return this.http.get<RelatorioVendasPorDias[]>(this.URL+'vendas/VendasPorDia?data='+data)
    }

    ConsultaRelatorioVendaPorDiaFechaCaixa(data){
        return this.http.get<RelatorioVendasPorDias[]>(this.URL+'vendas/TotalVendasFechaCaixa?data='+data)
    }

    ConsultaRelatorioVendaDoDia(data:string){
        return this.http.get<RelatorioVendasPorDias[]>(this.URL+'vendas/VendasDoDia?data='+data)
    }

    ConsultaRelatorioGeral(data:Date){
        return this.http.get<RelatorioGeral>(this.URL+'vendas/RelatorioGeral?data='+data)
    }

    AbrirCaixa(caixa:AbreFechaCaixa){
        return this.http.post<AbreFechaCaixa>(this.URL+'abrefechacaixa',caixa ,httpOptions)
    }

    FecharCaixa(caixa:AbreFechaCaixa){
        return this.http.put<AbreFechaCaixa>(this.URL+'abrefechacaixa/'+caixa.id,caixa ,httpOptions)
    }

    ConsultaCaixa(id:number){
        return this.http.get<AbreFechaCaixa>(this.URL+'abrefechacaixa/'+id)
    }

    ConsultaDatasCaixa(){
        return this.http.get<Date[]>(this.URL+'abrefechacaixa/datas')
    }

    ConsultaDiaCaixa(data:Date){
        return this.http.get<AbreFechaCaixa>(this.URL+'abrefechacaixa/data?data='+data)
    }

    IncluirSaidaDeCaixa(saidaCaixa:SaidaDeCaixa){
        return this.http.post<SaidaDeCaixa>(this.URL+'saidadecaixa',saidaCaixa ,httpOptions)
    }

    SaidaDeCaixaPorDia(data:Date){
        return this.http.get<SaidaDeCaixa>(this.URL+'saidadecaixa/TotalSaidaDia?data='+data)
    }

    IncluirFornecedor(fornecedor:Fornecedor){
        return this.http.post<Fornecedor[]>(this.URL + "Fornecedor",fornecedor ,httpOptions);
      }

    AtualizarFornecedor(fornecedor:Fornecedor){
        return this.http.put<Fornecedor[]>(this.URL + "Fornecedor/"+fornecedor.id,fornecedor ,httpOptions);
    }  
    ConsultaFornecedor(id:number){
        let idBusca;
        if(id==0)
        {
            idBusca="";
            console.log("Id Fornecedor "+idBusca);
        }else{
            idBusca="/"+id
            console.log("Id Fornecedor "+idBusca);
        }
        return this.http.get<Fornecedor[]>(this.URL + "Fornecedor"+idBusca);
      }  

    
      IncluirCompra(compra:Compra)
      {          
        return this.http.post<Compra[]>(this.URL + "Compra/"+compra.fornecedor.id,compra ,httpOptions);
      }

      AtualizarCompra(compra:Compra)
      {          
        return this.http.put<Compra[]>(this.URL + "Compra/"+compra.id,compra ,httpOptions);
      }


      ConsultaCompra()
      {          
        return this.http.get<Compra[]>(this.URL + "Compra");
      }

      ConsultaBalanco()
      {          
        return this.http.get<RelBalanco[]>(this.URL + "vendas/Balanco");
      }

      ConsultaCompraPorFornecedor()
      {          
        return this.http.get<RelCompraPorFornecedor[]>(this.URL + "Compra/ComprasPorFornecedor/");
      }
}
