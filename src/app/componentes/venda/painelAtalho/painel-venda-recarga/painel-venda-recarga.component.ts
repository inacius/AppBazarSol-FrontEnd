import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';
import { Operadora } from 'src/app/Objetos/Operadora';
import { OperadoraValores } from 'src/app/Objetos/OperadoraValores';

@Component({
  selector: 'app-painel-venda-recarga',
  templateUrl: './painel-venda-recarga.component.html',
  styleUrls: ['./painel-venda-recarga.component.css']
})
export class PainelVendaRecargaComponent implements OnInit {

  @ViewChild('PainelInferior', { static: true })painelInferior: ElementRef<HTMLInputElement>;

  operadoras:Operadora[];
  valores:OperadoraValores[];
  idProdutoOperadora:number;

  constructor(private bancoDados:BancoDados) {

    this.bancoDados.ConsultaOperadora().subscribe(retorno=>{
      this.operadoras=retorno;
    })
   }

  ngOnInit() {
  }

  mostraOpcoes(id:number){
    this.painelInferior.nativeElement.hidden=false;
    console.log(id);
    let index = this.operadoras.map(function(e) { return e.id; }).indexOf(id);
    this.idProdutoOperadora = this.operadoras[index].idProduto;
    this.bancoDados.ConsultaValorOperadora(id).subscribe(resposta=>{
      this.valores=resposta;
    })
   // this.valores = this.operadoras[id].valores;
    //this.operadoraSelecionada = this.operadoras[id].idProduto;
  }

}
