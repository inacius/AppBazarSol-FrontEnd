import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';
import { IncluirProduto } from 'src/app/Objetos/IncluirProduto';
import { Produtos } from 'src/app/Objetos/Produtos';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-incluir-produtos',
  templateUrl: './incluir-produtos.component.html',
  styleUrls: ['./incluir-produtos.component.css']
})
export class IncluirProdutosComponent implements OnInit,OnChanges {

  @Input() produtoAtual:Produtos[]= new Array;
  @Output() produtoAtualizado = new EventEmitter<boolean>();
  
  incluirProduto: FormGroup;
  produtoIncluir:IncluirProduto;
  produtoAtualizar:Produtos;
  

  formatoData = 'dd-MM-yyyy';
  locale = 'en-US';

  


  constructor(private formBuilder:FormBuilder,private bancoDados:BancoDados) {  }

  ngOnChanges() {
    if(this.produtoAtual[0]){
      //console.log("Data "+formatDate(this.produtoAtual[0].dataUltimaCompra,'dd/MM',this.locale));
      this.incluirProduto=this.formBuilder.group({
        id:[this.produtoAtual[0].id],
        nome:[this.produtoAtual[0].nome,Validators.required],
        preco:[this.produtoAtual[0].preco,Validators.required],
        dataUCompra:[formatDate(this.produtoAtual[0].dataUltimaCompra,'yyyy-MM-dd',this.locale),Validators.required],
        controlaEstoque:[this.produtoAtual[0].controlaEstoque],
        quantidade:[this.produtoAtual[0].quantidadeEstoque,Validators.required],
        codigoBarras:[this.produtoAtual[0].codigoBarras],
        atalho:[this.produtoAtual[0].atalho],
        servico:[this.produtoAtual[0].servico]
      });
    }    
  }

  ngOnInit() {

    if(this.produtoAtual[0]){
      //console.log("Data "+this.produtoAtual[0].dataUltimaCompra);
    this.incluirProduto=this.formBuilder.group({
      id:[this.produtoAtual[0].id],
      nome:[this.produtoAtual[0].nome,Validators.required],
      preco:[this.produtoAtual[0].preco,Validators.required],
      dataUCompra:[formatDate(this.produtoAtual[0].dataUltimaCompra,'yyyy-MM-dd',this.locale),Validators.required],
      controlaEstoque:[this.produtoAtual[0].controlaEstoque],
      quantidade:[this.produtoAtual[0].quantidadeEstoque,Validators.required],
      codigoBarras:[this.produtoAtual[0].codigoBarras],
      atalho:[this.produtoAtual[0].atalho],
      servico:[this.produtoAtual[0].servico]
    });
  }else{
    //let  data =
    this.incluirProduto=this.formBuilder.group({
      id:[''],
      nome:['',Validators.required],
      preco:['',Validators.required],
      dataUCompra:[formatDate(new Date(),'yyyy-MM-dd',this.locale),Validators.required],
      controlaEstoque:[true],
      quantidade:[1,Validators.required],
      codigoBarras:[0],
      atalho:[false],
      servico:[false]
    });
  }
  }

  IncluirProduto(){
    console.log(this.incluirProduto.get('dataUCompra').value);
    this.produtoIncluir = {
    nome: this.incluirProduto.get('nome').value,
    preco: this.incluirProduto.get('preco').value,
    dataUltimaCompra: this.incluirProduto.get('dataUCompra').value,
    controlaEstoque: this.incluirProduto.get('controlaEstoque').value,
    quantidadeEstoque: this.incluirProduto.get('quantidade').value,
    codigoBarras: this.incluirProduto.get('codigoBarras').value,
    atalho: this.incluirProduto.get('atalho').value,
    servico:this.incluirProduto.get('servico').value
  };

    this.produtoAtualizar = {
    id: this.incluirProduto.get('id').value,
    nome: this.incluirProduto.get('nome').value,
    preco: this.incluirProduto.get('preco').value,
    dataUltimaCompra: this.incluirProduto.get('dataUCompra').value,
    controlaEstoque: this.incluirProduto.get('controlaEstoque').value,
    quantidadeEstoque: this.incluirProduto.get('quantidade').value,
    codigoBarras: this.incluirProduto.get('codigoBarras').value*1,
    atalho: this.incluirProduto.get('atalho').value,
    servico:this.incluirProduto.get('servico').value
  };


  console.log(this.produtoIncluir);
  if(this.produtoAtual[0]){
    console.log("Atualiza");
    this.bancoDados.AtualizaProdutoHttp(this.produtoAtualizar).subscribe(resposta=>{
      this.produtoAtualizado.emit(true);
    });
  }else{
    console.log("Incluir");
    this.bancoDados.AdicionaProdutoHttp(this.produtoIncluir);
  }

  }

}
