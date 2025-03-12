import { Component, OnInit, Output, EventEmitter, OnChanges, Input } from '@angular/core';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';
import { Produtos } from 'src/app/Objetos/Produtos';
import { ProdutoAtalho } from 'src/app/Objetos/ProdutoAtalho';


@Component({
  selector: 'app-painel-venda-rapida',
  templateUrl: './painel-venda-rapida.component.html',
  styleUrls: ['./painel-venda-rapida.component.css']
})
export class PainelVendaRapidaComponent implements OnInit,OnChanges {
  
  atalho:Produtos[]=[];
  listaAtalho:ProdutoAtalho[]=[];

  constructor(private bancoDados:BancoDados) {}
  
  
  ngOnInit() {
  this.bancoDados.ConsultaAtalhos().subscribe(resposta=>{
    this.listaAtalho = resposta;
    //console.log(resposta[0].filhos);
    this.listaAtalho.forEach(item=>{
      // this.bancoDados.ConsultaProduto(item.id).subscribe(idRetornado =>{
      //   this.atalho.push(idRetornado);
      // })
    })

  })
  }

  ngOnChange(){
    this.bancoDados.ConsultaAtalhos().subscribe(resposta=>{
      this.listaAtalho = resposta;
      //console.log(resposta[0].filhos);
      this.listaAtalho.forEach(item=>{
        // this.bancoDados.ConsultaProduto(item.id).subscribe(idRetornado =>{
        //   this.atalho.push(idRetornado);
        // })
      })
  
    })
  }
  
  
  @Output() enviaIDProduto = new EventEmitter<number>() ; 
  
  recebeID($event){
    this.enviaIDProduto.emit($event);
    //this.idProduto = $event;
  }
  
  ngOnChanges() {
    //this.enviaIDProduto.emit(this.idProduto);
  }
}
