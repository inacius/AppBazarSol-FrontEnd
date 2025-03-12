import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tabela-formulario',
  templateUrl: './tabela-formulario.component.html',
  styleUrls: ['./tabela-formulario.component.css']
})
export class TabelaFormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() 
  {
    this.formulario = this.formBuilder.group({
      campo1:[''],
      campo2:['Teste'],
      campo3:['Teste'],
      campo4:['Teste'],
      campo5:[''],
      campo6:[''],
      campo7:[''],
      campo8:[''],
      campo9:['']
    })
  }

}
