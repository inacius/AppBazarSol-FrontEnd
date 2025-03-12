import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { CalculadoraService } from 'src/app/BancoDados/calculadora.service';
import { BuscaProdutoComponent } from '../../venda/busca-produto/busca-produto.component';

@Component({
  selector: 'app-controlador-quantidade',
  templateUrl: './controlador-quantidade.component.html',
  styleUrls: ['./controlador-quantidade.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControladorQuantidadeComponent implements OnInit,OnChanges {

  @Output() enviaQuantidade = new EventEmitter<number>();
  @Input() atualizar:boolean;

  quantidade:number = 1;

  constructor(private calc:CalculadoraService) { }


  ngOnChanges() {

    this.quantidade=1;
    this.enviaQuantidade.emit(this.quantidade);
    this.atualizar=false;

  }

  ngOnInit() {
    
  }

  enviaQuantidadeDigitada(){
    if( !isNaN(this.quantidade)){
    this.enviaQuantidade.emit(this.quantidade);
    }else{
      this.quantidade=1;
    }
  }
  
  aumenta(){
    this.quantidade++;
    this.enviaQuantidade.emit(this.quantidade);
  }
  diminui(){
    if(this.quantidade>1){
    this.quantidade--;
    this.enviaQuantidade.emit(this.quantidade);
    }
  }

  digitaQuantidade(){

  }

}
