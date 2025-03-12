import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Compra } from 'src/app/Objetos/Compra';
import { Fornecedor } from 'src/app/Objetos/Fornecedor';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';


@Component({
  selector: 'app-incluir-compra',
  templateUrl: './incluir-compra.component.html',
  styleUrls: ['./incluir-compra.component.css']
})
export class IncluirCompraComponent implements OnInit,OnChanges {

  formCompra:FormGroup;
  compra:Compra = {id:0,valor:0,dataCompra:new Date(),parcelas:0,dataPrimeiroPagamento:new Date(),fornecedor:null,nf:123,dataUltimoPagamento:new Date()};
  listaFornecedores:Fornecedor[];
  selectedValue:Fornecedor = {id:0,nome:'',contato:'',email:'',endereco:'',telefone:''};
  compraSelecionado;
  @Input() compraSelecionada:Compra;
  @Output() compraAtualizada = new EventEmitter<boolean>();
  dataCompraAjustado;
  dataPrimeiroPagamentoAjustado;

  constructor(private formBuilder:FormBuilder,private bancoDados:BancoDados) {
    bancoDados.ConsultaFornecedor(0).subscribe(resposta=>{
      console.log(resposta);
      this.listaFornecedores = resposta;
    })
   }
  ngOnChanges() {
        
    this.formCompra = this.formBuilder.group({
      id : [this.compraSelecionada.id],
      valor : [this.compraSelecionada.valor,Validators.required],
      dataCompra : [Validators.required],
      parcelas : [this.compraSelecionada.parcelas,Validators.required],
      dataPrimeiroPagamento : [Validators.required],
      nf : [this.compraSelecionada.nf,Validators.required],
      fornecedor : [this.compraSelecionada.fornecedor,Validators.required]
    });

    console.log(this.compraSelecionada);
    console.log(new Date(this.compraSelecionada.dataCompra));
    this.dataCompraAjustado = this.compraSelecionada.dataCompra;
    this.dataPrimeiroPagamentoAjustado = this.compraSelecionada.dataPrimeiroPagamento;
    this.selectedValue = this.compraSelecionada.fornecedor;

    console.log(this.formCompra.get("dataCompra").value);    
    console.log(this.formCompra.get("dataPrimeiroPagamento").value);



  }

  ngOnInit() 
  {
    if(this.compraSelecionada)
    {
      this.formCompra = this.formBuilder.group({
        id : [this.compraSelecionada.id],
        valor : [this.compraSelecionada.valor,Validators.required],
        dataCompra : [Validators.required],
        parcelas : [this.compraSelecionada.parcelas,Validators.required],
        dataPrimeiroPagamento : [Validators.required],
        nf : [this.compraSelecionada.nf,Validators.required],
        fornecedor : [this.compraSelecionada.fornecedor,Validators.required]
      });



      console.log(this.compraSelecionada);
      console.log(new Date(this.compraSelecionada.dataCompra));
      this.dataCompraAjustado = this.compraSelecionada.dataCompra;
      this.dataPrimeiroPagamentoAjustado = this.compraSelecionada.dataPrimeiroPagamento;
      this.selectedValue = this.compraSelecionada.fornecedor;


    }
    else
    {
          this.formCompra = this.formBuilder.group({
            id : [''],
            valor : ['',Validators.required],
            dataCompra : ['',Validators.required],
            parcelas : ['',Validators.required],
            dataPrimeiroPagamento : ['',Validators.required],
            nf : ['',Validators.required],
            fornecedor : ['',Validators.required]
          });
    }
  }

  incluirCompra()
  {
    this.compra.id = parseInt(this.formCompra.get("id").value);
    this.compra.valor = parseFloat(this.formCompra.get("valor").value);
    this.compra.dataCompra = this.formCompra.get("dataCompra").value;
    this.compra.parcelas = parseInt(this.formCompra.get("parcelas").value);
    this.compra.dataPrimeiroPagamento = this.formCompra.get("dataPrimeiroPagamento").value;
    this.compra.nf = this.formCompra.get("nf").value;
    this.compra.fornecedor = this.selectedValue;
    console.log(this.compra);
    this.bancoDados.IncluirCompra(this.compra).subscribe(resposta=>{
      console.log(resposta);
      this.LimpaFormulario();
      this.compraAtualizada.emit(true);
    })
  }


  AtualizarCompra()
  {
    console.log(this.selectedValue);
    this.compra.id = parseInt(this.formCompra.get("id").value);
    this.compra.valor = parseFloat(this.formCompra.get("valor").value);
    this.compra.dataCompra = this.formCompra.get("dataCompra").value;
    this.compra.parcelas = parseInt(this.formCompra.get("parcelas").value);
    this.compra.dataPrimeiroPagamento = this.formCompra.get("dataPrimeiroPagamento").value;
    this.compra.nf = this.formCompra.get("nf").value;
    this.compra.fornecedor = this.selectedValue;
    console.log(this.compra);
    this.bancoDados.AtualizarCompra(this.compra).subscribe(resposta=>{
      console.log(resposta);
      this.compraAtualizada.emit(true);
    })
  }


  LimpaFormulario()
  {
    this.formCompra = this.formBuilder.group({
      id : [''],
      valor : ['',Validators.required],
      dataCompra : ['',Validators.required],
      parcelas : ['',Validators.required],
      dataPrimeiroPagamento : ['',Validators.required],
      nf : ['',Validators.required],
      fornecedor : ['',Validators.required]
    });
  }

}
