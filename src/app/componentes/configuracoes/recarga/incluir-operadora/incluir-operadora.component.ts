import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Operadora } from 'src/app/Objetos/Operadora';
import { OperadoraValores } from 'src/app/Objetos/OperadoraValores';


interface ControlaValores {
  id: number;
  idOperadora:number;
  valor: number;
}

@Component({
  selector: 'app-incluir-operadora',
  templateUrl: './incluir-operadora.component.html',
  styleUrls: ['./incluir-operadora.component.css']
})
export class IncluirOperadoraComponent implements OnInit {

  

  @Input() operadoraInicial:Operadora;

  
  //@ViewChild('novoValor', { static: true })novoValorInput: ElementRef<HTMLInputElement>;
  //@ViewChild('btnIncluir', { static: true })btnIncluir: ElementRef<HTMLInputElement>;
  //@ViewChild('btnAtualizar', { static: true })btnAtualizar: ElementRef<HTMLInputElement>;

  @Output() atualizaTela = new EventEmitter<boolean>();

  eNovo:boolean;


  recargaForm:UntypedFormGroup;
  valores:ControlaValores[]=new Array;
  valorAtualSelect:number=null;
  novaOperadora:Operadora;

  constructor(private formBuilder:UntypedFormBuilder,private bancoDados:BancoDados) {
    // if(this.operadoraInicial){
    //   this.eNovo = false;
    //   //console.log("True "+this.eNovo + " " + this.operadoraInicial.id );
    // }else{
    //   this.eNovo=true;
    //   //console.log("False "+this.eNovo + " " + this.operadoraInicial);
    //   this.operadoraInicial = {id:0,ativa:false,idProduto:null,nome:"",valores:null}
    // }
    //this.VerificaChegada(this.operadoraInicial);

   }

  ngOnInit() {
    console.log("ID inicial "+this.operadoraInicial.nome);

      
    //   if(this.operadoraInicial.id){
    //     this.operadoraInicial.valores.forEach(item=>{
    //     this.valores.push(item);
    //   })
    // }
    this.VerificaChegada(this.operadoraInicial);

    this.recargaForm = this.formBuilder.group({
      id:[this.operadoraInicial.id,Validators.required],
      nome:[this.operadoraInicial.nome,Validators.required],
      ativa:[this.operadoraInicial.ativa],
      valorNovo:[''],
      idProduto:[this.operadoraInicial.idProduto,Validators.required]
    });
  
  }

  ngOnChanges(){
    this.VerificaChegada(this.operadoraInicial);
    console.log("ID change "+this.operadoraInicial.nome);
  //   //console.log("Chegou do pai "+this.operadoraInicial.valores);
     this.valores.length=0;

     if(!this.eNovo){
       this.bancoDados.ConsultaValorOperadora(this.operadoraInicial.id).subscribe(resposta=>{
         resposta.forEach(item=>{
         let controlaValores:ControlaValores = {id:item.id,idOperadora:item.idOperadora,valor:item.valor};
         this.valores.push(controlaValores);
          })
         
       })
   }
    
    this.recargaForm = this.formBuilder.group({
      id:[this.operadoraInicial.id,Validators.required],
      nome:[this.operadoraInicial.nome,Validators.required],
      ativa:[this.operadoraInicial.ativa],
      valorNovo:[''],
      idProduto:[this.operadoraInicial.idProduto,Validators.required]
    });

  }

  IncluirValor(novoValor:number){
    let operadoraValor:OperadoraValores = {id:0,idOperadora:this.operadoraInicial.id,valor:novoValor*1};
    this.bancoDados.AdicionaValorOperadora(operadoraValor).subscribe(resposta=>{
      novoValor = novoValor*1;
      let controlaValores:ControlaValores = {id:resposta.id,idOperadora:this.operadoraInicial.id,valor:novoValor*1};
      this.valores.push(controlaValores);
      this.recargaForm.get('valorNovo').setValue('');
    })
    
  }

  ValorSelect(event){
    console.log(event.target.value);
    this.valorAtualSelect = event.target.value;

    
  }
  
  RemoveValor(){
    this.bancoDados.RemoveValorOperadora(this.valorAtualSelect).subscribe(resposta=>{
      console.log(resposta);
      let indice = this.valores.map(function(e) { return e.valor; }).indexOf(resposta.valor);
      this.valores.splice(indice,1);
    })
  }

  IncluirOperadora(){
    this.novaOperadora = {
      id:this.recargaForm.get('id').value,
      nome:this.recargaForm.get('nome').value,
      ativa:this.recargaForm.get('ativa').value,
      idProduto:this.recargaForm.get('idProduto').value*1
    }

    this.bancoDados.AdicionaOperadora(this.novaOperadora).subscribe(resposta=>{
      this.AtualizaTela();
    });
  }


  AtualizarOperadora(){
    this.novaOperadora = {
      id:this.recargaForm.get('id').value,
      nome:this.recargaForm.get('nome').value,
      ativa:this.recargaForm.get('ativa').value,
      idProduto:this.recargaForm.get('idProduto').value*1
    }

    console.log(this.bancoDados.AtualizaOperadora(this.novaOperadora).subscribe(resposta=>{
      //console.log(resposta);
      this.AtualizaTela()
  }));

  }

  AtualizaTela(){
    //console.log("Iniciou atualizar tela");
    this.atualizaTela.emit(true);
  }

  VerificaChegada(operadora:Operadora){
    if(operadora.id!=0){
      console.log("Atualizar");
      this.eNovo=false;
      return false;
    }else{
      console.log("Incluir");
      this.eNovo=true;
      return true;
    }
  }

}
