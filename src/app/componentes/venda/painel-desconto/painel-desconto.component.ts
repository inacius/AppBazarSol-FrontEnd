import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-desconto',
  templateUrl: './painel-desconto.component.html',
  styleUrls: ['./painel-desconto.component.css']
})
export class PainelDescontoComponent implements OnInit {

  valorDesconto:number;

  constructor() { }

  ngOnInit() {
  }

}
