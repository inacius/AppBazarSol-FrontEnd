import { Component, OnInit, Input } from '@angular/core';
import { CalculadoraService } from 'src/app/BancoDados/calculadora.service';

@Component({
  selector: 'app-mostrar-total',
  templateUrl: './mostrar-total.component.html',
  styleUrls: ['./mostrar-total.component.css']
})
export class MostrarTotalComponent implements OnInit {

  @Input() valor:number;
  @Input() texto;

  constructor() { }

  ngOnInit() {
    //console.log(this.texto+" - "+this.valor);
  }

}
