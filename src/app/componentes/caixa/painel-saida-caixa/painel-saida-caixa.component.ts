import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SaidaDeCaixa } from 'src/app/Objetos/SaidaDeCaixa';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-painel-saida-caixa',
  templateUrl: './painel-saida-caixa.component.html',
  styleUrls: ['./painel-saida-caixa.component.css']
})
export class PainelSaidaCaixaComponent implements OnInit {

  saidaDeCaixaForm:UntypedFormGroup;
  saidaCaixa:SaidaDeCaixa=
  {
    id:0,
    dataHora:new Date(),
    valor:0,
    comentario:''
  }

  constructor(private formBuilder:UntypedFormBuilder,private bancoDados:BancoDados,public dialog:MatDialog) { }

  ngOnInit() {

   this.saidaDeCaixaForm = this.formBuilder.group({
     valor:['',Validators.required],
     comentario:[]
   });

  }


  SaidaDeCaixa(){
    let valor = this.saidaDeCaixaForm.get('valor').value;
    let comentario = this.saidaDeCaixaForm.get('comentario').value;

    
    this.saidaCaixa.valor = valor;
    this.saidaCaixa.comentario = comentario;
     
    console.log(this.saidaCaixa);
    this.bancoDados.IncluirSaidaDeCaixa(this.saidaCaixa).subscribe(
      resposta=>{console.log(resposta);},
      error=>{console.log(error);},
      ()=>{
        console.log("Salvo com sucesso");
        this.dialog.closeAll();
      }
      )
  }

}
