import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';
import { Fornecedor } from 'src/app/Objetos/Fornecedor';

@Component({
  selector: 'app-incluir-fornecedor',
  templateUrl: './incluir-fornecedor.component.html',
  styleUrls: ['./incluir-fornecedor.component.css']
})
export class IncluirFornecedorComponent implements OnInit,OnChanges {


  formFornecedor:FormGroup;
  fornecedor:Fornecedor;
  @Input() fornecedorSelecionado:Fornecedor; // Array pq o filtro de fornecedor na consulta retorna um array.
  @Output() fornecedorAtualizado = new EventEmitter<boolean>();

  constructor(private formBuilder:FormBuilder,private bancoDados:BancoDados) { 
    console.log(this.fornecedorSelecionado);
    // bancoDados.ConsultaFornecedor(this.fornecedorSelecionado.id).subscribe(resposta=>{
    //     this.fornecedor = resposta[0];
    // })
  }

  ngOnInit() {
    console.log(this.fornecedorSelecionado);
    if(this.fornecedorSelecionado)
    {
      this.formFornecedor = this.formBuilder.group({
        id:[this.fornecedorSelecionado.id],
        nome:[this.fornecedorSelecionado.nome,Validators.required],
        contato:[this.fornecedorSelecionado.contato,Validators.required],
        endereco:[this.fornecedorSelecionado.endereco,Validators.required],
        email:[this.fornecedorSelecionado.email,Validators.required],
        telefone:[this.fornecedorSelecionado.telefone,Validators.required]
      });
    }else{
    this.formFornecedor = this.formBuilder.group({
      id:[''],
      nome:['',Validators.required],
      contato:['',Validators.required],
      endereco:['',Validators.required],
      email:['',Validators.required],
      telefone:['',Validators.required]
    });
  }
  }

  ngOnChanges(){
    this.formFornecedor = this.formBuilder.group({
      id:[this.fornecedorSelecionado.id],
      nome:[this.fornecedorSelecionado.nome,Validators.required],
      contato:[this.fornecedorSelecionado.contato,Validators.required],
      endereco:[this.fornecedorSelecionado.endereco,Validators.required],
      email:[this.fornecedorSelecionado.email,Validators.required],
      telefone:[this.fornecedorSelecionado.telefone,Validators.required]
    });
  }

  IncluirFornecedor()
  {
console.log("Incluir");

 this.fornecedor = {
   id:this.formFornecedor.get("id").value,
   nome:this.formFornecedor.get("nome").value,
   contato:this.formFornecedor.get("contato").value,
   endereco:this.formFornecedor.get("endereco").value,
   email:this.formFornecedor.get("email").value,
   telefone:this.formFornecedor.get("telefone").value
 } 

this.bancoDados.IncluirFornecedor(this.fornecedor).subscribe(resposta=>{
  console.log(resposta);
  this.LimpaFormulario();
  this.fornecedorAtualizado.emit(true);
  
});
  }

  AtualizarFornecedor()
  {
    //console.log(this.selectedValue);
    this.fornecedor = 
    {
      id:this.formFornecedor.get("id").value,
      nome:this.formFornecedor.get("nome").value,
      contato:this.formFornecedor.get("contato").value,
      endereco:this.formFornecedor.get("endereco").value,
      email:this.formFornecedor.get("email").value,
      telefone:this.formFornecedor.get("telefone").value
    } 
    console.log(this.fornecedor);
    this.bancoDados.AtualizarFornecedor(this.fornecedor).subscribe(resposta=>{
      console.log(resposta);
      this.fornecedorAtualizado.emit(true);
    })
  }



  LimpaFormulario()
  {
    this.formFornecedor = this.formBuilder.group({
      id:[''],
      nome:['',Validators.required],
      contato:['',Validators.required],
      endereco:['',Validators.required],
      email:['',Validators.required],
      telefone:['',Validators.required]
    });
  }

}
