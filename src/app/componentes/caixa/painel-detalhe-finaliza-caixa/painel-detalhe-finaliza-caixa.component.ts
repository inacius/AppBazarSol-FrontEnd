import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-painel-detalhe-finaliza-caixa',
  templateUrl: './painel-detalhe-finaliza-caixa.component.html',
  styleUrls: ['./painel-detalhe-finaliza-caixa.component.css']
})
export class PainelDetalheFinalizaCaixaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

}
