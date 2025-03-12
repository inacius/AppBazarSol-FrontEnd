import { Injectable } from '@angular/core';
import { BancoDados } from './BancoDados.service';
import { Venda } from '../Objetos/Venda';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { Resultado } from '../Objetos/Resultado';
import { ProdutoVenda } from '../Objetos/ProdutoVenda';
import { Operadora } from '../Objetos/Operadora';
import { ServicosPC } from '../Objetos/ServicosPC';
import { RelatorioVendasPorDias } from '../Objetos/RelatorioVendasPorDias';
import { VendaProduto } from '../Objetos/VendaProduto';
import { ProdutoRelatorio } from '../Objetos/ProdutoRelatorio';


@Injectable()
export class CalculadoraService {

  todasVendas: Venda[] = new Array;
  diaMiliseg = 8.64e+7;
  formatoData = 'dd-MM-yyyy';
  locale = 'en-US';

  dataHoje: Date = new Date();


  /////variaveis global
  public contadorQuantidade:boolean = false;

  constructor(private bancoDados:BancoDados) {
    //this.dataHoje = formatDate(new Date(),'dd-MM-yyyy','en-US');    
   }

  mostrar(venda: Venda[]){
   // this.buscaVendas();
   return console.log(venda);
  }

  totalVendasDia(venda: Venda[], diasPassado: number){
    let totalDia = 0;
    const dataString = formatDate(new Date(this.dataHoje.getTime() - (this.diaMiliseg * diasPassado)), this.formatoData, this.locale);
    venda.forEach(item => {
      if (formatDate(item.data, this.formatoData, this.locale).includes(dataString))
      {
        totalDia = totalDia + item.valorTotal;
      }
    })
    return totalDia;
  }

  vendasPorDia(venda: Venda[]){
    let resultadoAuxiliar:Resultado[]=new Array;
    
    console.log(this.totalPorDiaPorData(venda,this.listaComDatasExclusivas(venda)));
    return this.totalPorDiaPorData(venda,this.listaComDatasExclusivas(venda));
    
  }

  listaComDatasExclusivas(venda: Venda[]){
    let listaDeDatas:Resultado[]=new Array;

    venda.forEach(item => {
      let dataString = formatDate(item.data, this.formatoData, this.locale);
      if(!listaDeDatas.find(x=>(formatDate(x.data, this.formatoData, this.locale).includes(dataString)))){
        let dataFormatada:Date = new Date(formatDate(item.data, this.formatoData, this.locale).replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
        listaDeDatas.push({data:dataFormatada,valor:0});            
      }
    })
    return listaDeDatas;
  }

  totalPorDiaPorData(venda: Venda[],listaDeDatas:Resultado[]){
    let resultadoAuxiliar = listaDeDatas;
    let vendaAuxiliar:Venda[]=new Array;
    let resultadoFinal:Resultado[]=new Array;

    resultadoAuxiliar.forEach(item=>{
      vendaAuxiliar = venda.filter(x => formatDate(x.data, this.formatoData, this.locale) === formatDate(item.data, this.formatoData, this.locale));
      let totalDia=0;
      
      vendaAuxiliar.forEach(x => {
        totalDia = totalDia + x.valorTotal;
      })

      resultadoFinal.push({data:item.data,valor:totalDia});     
      
    });
    return resultadoFinal;
  }

  totalRecargaVenda(venda:ProdutoVenda[],operadoras:Operadora[]){
    let idprodutoOperadora:number[] = new Array;
    let vendaAuxiliar:ProdutoVenda[] = new Array;
    let totalRecarga=0;
            
      operadoras.forEach(x=>{
      idprodutoOperadora.push(x.idProduto);
      })


      idprodutoOperadora.forEach(x=>{
        let vendaTemp:ProdutoVenda[] = venda.filter(y=>y.idProduto===x);
        vendaTemp.forEach(x=>{
          vendaAuxiliar.push(x);
        })        
      })

      vendaAuxiliar.forEach(z=>{
        totalRecarga = totalRecarga + z.totalProduto;
      })

      return totalRecarga;  

  }

  totalServicosPCVenda(venda:ProdutoVenda[],servicosPC:ServicosPC[]){
    let idServicoPC:number[] = new Array;
    let vendaAuxiliar:ProdutoVenda[] = new Array;
    let totalServicoPC=0;
            
      servicosPC.forEach(x=>{
      idServicoPC.push(x.idProduto);
      })


      idServicoPC.forEach(x=>{
        let vendaTemp:ProdutoVenda[] = venda.filter(y=>y.idProduto===x);
        vendaTemp.forEach(x=>{
          vendaAuxiliar.push(x);
        })        
      })

      vendaAuxiliar.forEach(z=>{
        totalServicoPC = totalServicoPC + z.totalProduto;
      })

      return totalServicoPC;  

  }

totalVendasHoje(relatorio:RelatorioVendasPorDias[],diasPassado:number){
  //0 retorna todos os dados
  if(diasPassado == 0){
    return relatorio;
  }else{
  let dataEmMilisegundo = this.dataHoje.getTime() - (this.diaMiliseg * diasPassado);
  let relatorioFiltrado:RelatorioVendasPorDias[]= new Array;

  // relatorio.forEach(item=>{
  //   let dataAuxiliar = new Date(item.data).getTime();
  //   if(dataAuxiliar >= dataEmMilisegundo){
  //     relatorioFiltrado.push(item);
  //   }
  // });

  return relatorioFiltrado;
}
}

padronizaData(data:Date){
  return formatDate(data,'dd-MM-yyyy','en-US');
}


totalVendaPorProduto(venda:Venda[], data:Date){
  let todasVendas:VendaProduto[] = new Array;
  let todosProdutosVendidos:VendaProduto[] = new Array;
  let resultadoAgregado = [];
  

  let vendaFiltrada = venda.filter(v=>this.padronizaData(v.data).includes(this.padronizaData(data)));  
      
      vendaFiltrada.forEach(x=>{
     todasVendas = x.produtos;
      todasVendas.forEach(y=>{
        todosProdutosVendidos.push(y);
        
      })         
     })          

     todosProdutosVendidos.reduce(function(res, value) {
       if (!res[value.idProduto]) {
         res[value.idProduto] = { Id: value.idProduto, quantidade: 0,valorTotal:0 };
         resultadoAgregado.push(res[value.idProduto])
       }
       res[value.idProduto].quantidade += value.quantidade;
       res[value.idProduto].valorTotal += (value.valor*value.quantidade);
       return res;
     }, {});

     console.log(resultadoAgregado);


     return resultadoAgregado;
}

RemoverDuplicatasDataVenda(venda:Venda[]){
    let datas:Date[]= [new Date()];    

    

}

}



