import { Component, OnInit,Inject, OnChanges } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-painel-finalizar-venda',
  templateUrl: './painel-finalizar-venda.component.html',
  styleUrls: ['./painel-finalizar-venda.component.css']
})
export class PainelFinalizarVendaComponent implements OnInit,OnChanges {

  
  formaPagamentoSelecionado:number;
  //formasPagamento:String[]=["Dinheiro","Debito","Credito", "Outros"];
  formapagamento:any;

  favoriteSeason: string ;
  seasons = [
    {
      key: 'Dinheiro',
      checked: true,
      id:0
    },
    {
      key: 'Debito',
      checked: false,
      id:1
    },{
      key: 'Credito',
      checked: false,
      id:2
    },{
      key: 'Outros',
      checked: false,
      id:3      
    }];
  
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
    this.formaPagamentoSelecionado = 0;
    this.formapagamento= 'Dinheiro'
   }

  
  ngOnInit() {
  }
  ngOnChanges(){
  }
  
  radioChange(event:number){
    console.log(event);
    this.formaPagamentoSelecionado = event*1;
  }


}
