import { Component, OnInit, OnChanges } from '@angular/core';
import { ProdutoVenda } from 'src/app/Objetos/ProdutoVenda';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';
import { Venda } from 'src/app/Objetos/Venda';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})


export class VenderComponent implements OnInit,OnChanges {
  
  produtoVenda:ProdutoVenda = null;
  idAtalho:number;
  valor:number;
  vendas:Venda[];
  quantidadeRecebida:number;
  contadorQuantidade:boolean=false;
  
  diaMiliseg = 8.64e+7;
  formatoData = 'dd-MM-yyyy';
  locale = 'en-US';

  constructor(private bancoDados:BancoDados) { 


  }

  
  ngOnInit() {
  }

  ngOnChanges(){
    
  }

  adicionaProduto(id:number,quantidade:number,valor:number){     
     
    if(id){
      this.produtoVenda={id:0,idProduto:id,nome:null,quantidade:quantidade,quantidadeEstoque:0,controlaEstoque:false,preco:valor,totalProduto:0};
      this.bancoDados.AdicionaProdutoVenda(this.produtoVenda);
     //console.log(this.produtoVenda);
    }
  }

  recebeIDAtalho($event){
    //console.log("Chegou");
    //console.log($event);
    if($event.idProduto){
      this.idAtalho = $event.idProduto;
      this.valor = $event.valor
    }else{
      this.idAtalho = $event;
      this.valor = 0;
    }
    this.adicionaProduto(this.idAtalho,this.quantidadeRecebida,this.valor);
    this.contadorQuantidade = !this.contadorQuantidade;
  }

  recebeIDBusca(event){
    console.log(event);
    //console.log("id "+event.id+" quantidade "+event.quantidade+ " valor "+event.valor);
    this.adicionaProduto(event.id,event.quantidade,event.valor);
  }

  recebeQuantidade(event:number){
    //console.log(event);
    this.quantidadeRecebida = event;
    
  }

}
