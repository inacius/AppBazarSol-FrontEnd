import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';
import { ProdutoVenda } from 'src/app/Objetos/ProdutoVenda';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { VendaProduto } from 'src/app/Objetos/VendaProduto';
import { IncluirVenda } from 'src/app/Objetos/IncluirVenda';
import { PainelFinalizarVendaComponent } from '../painel-finalizar-venda/painel-finalizar-venda.component';
import { CalculadoraService } from 'src/app/BancoDados/calculadora.service';
import { Operadora } from 'src/app/Objetos/Operadora';
import { ServicosPC } from 'src/app/Objetos/ServicosPC';
import { RelatorioVendasPorDias } from 'src/app/Objetos/RelatorioVendasPorDias';
import { formatDate } from '@angular/common';
import { PainelDescontoComponent } from '../painel-desconto/painel-desconto.component';


@Component({
  selector: 'app-lista-compra-atual',
  templateUrl: './lista-compra-atual.component.html',
  styleUrls: ['./lista-compra-atual.component.css']
  
})
export class ListaCompraAtualComponent implements OnInit,OnChanges {

  dataSource: MatTableDataSource<ProdutoVenda>;
  @Input() produtoVenda:ProdutoVenda;
  totalVenda:number = 0;
  listaCompra:ProdutoVenda[]=new Array;
  displayedColumns: string[] = ['nome','quantidade','preco','totalProduto','remover'];
  bloqueiaFinalizar:boolean=true;
  venda:IncluirVenda;
  vendaProdutos:VendaProduto[]=new Array;
  myDate:Date = new Date();
  operadoras:Operadora[] = new Array;
  servicosPC:ServicosPC[] = new Array;
  relatorioVendasPorDia:RelatorioVendasPorDias[] = new Array;
  totalRecarga=0;
  totalServicosPC=0;
  formatoData = 'dd-MM-yyyy';
  locale = 'en-US';
  valordesconto: any;

  constructor(private bancoDados:BancoDados,public dialog: MatDialog,private _snackBar: MatSnackBar,private calculadora: CalculadoraService) { 
    
    bancoDados.ConsultaOperadora().subscribe(retorno=>{
      this.operadoras = retorno;        
    })


    this.carregarDados();

  }


  ngOnInit() {
      this.listaCompra.length = 0;        
            
    }

  ngOnChanges(){
    console.log(this.produtoVenda);
    if(this.produtoVenda){

    this.bancoDados.AdicionaProdutoVenda(this.produtoVenda).subscribe(resposta=>{
      this.listaCompra = resposta;

      this.calculaTotal(this.listaCompra);
      this.dataSource = new MatTableDataSource(this.listaCompra);

      this.atualizaBotaoFinalizar();
    });  
  } 
  }

  carregarDados(){
    this.bancoDados.ConsultaProdutoVenda().subscribe(resposta=>{
      this.listaCompra = resposta;
      this.calculaTotal(this.listaCompra);
      console.log(resposta);
      this.dataSource = new MatTableDataSource(this.listaCompra);
      this.atualizaBotaoFinalizar();
  });
  }
  
  calculaTotal(lista:ProdutoVenda[]){
    this.totalVenda = 0;    
    lista.forEach(element=>{
      this.totalVenda = element.totalProduto+this.totalVenda;
    })
          
    }

  removeProdutoLista(id:number){
    this.listaCompra.splice(id,1);
    this.calculaTotal(this.listaCompra);
    this.dataSource = new MatTableDataSource(this.listaCompra);
    this.listaCompra.length=0;
    this.atualizaBotaoFinalizar();
    
    this.bancoDados.RemoverItemProdutoVenda(id).subscribe(resposta=>{
      console.log(resposta);
      this.carregarDados();
    });
  }
  
  atualizaBotaoFinalizar(){
    console.log("Atualiza Botao "+this.listaCompra.length);
    if(this.listaCompra.length>0){
      console.log("libera");
      this.bloqueiaFinalizar=false;
    }else{
      this.bloqueiaFinalizar=true;
      console.log("bloqueia");
    }
  }

  finalizaVenda(){

    this.openDialog();

  }


  openDialog(){
    const finalizaDialog = this.dialog.open(PainelFinalizarVendaComponent,{
      data:{totalVenda:this.totalVenda}
    });

    finalizaDialog.afterClosed().subscribe(formaPagamento=>{

      console.log("ID Forma pagamento "+formaPagamento);
      ///// 99 == Cancelar
      if (formaPagamento!=99){
        this.bancoDados.AdicionarVendaNovo(formaPagamento).subscribe(
          resposta=>{console.log(resposta);},
          error=>{console.log(error);
          },()=>{
            this.listaCompra.length = 0;
            this.dataSource = new MatTableDataSource(this.listaCompra);
            this.atualizaBotaoFinalizar();    
            this.openSnackBar("Venda Finalizada","Ok");
            this.totalVenda = 0;
          }
          )}
    });
    }


  openSnackBar(mensagem,action) {
    this._snackBar.open(mensagem,action,{duration:3000})
  }

  ajustarProduto(id:number){
    console.log("clicou "+id);
    this.openDialogDesconto(id);
    
  }


  openDialogDesconto(id:number){
    const descontoDialog = this.dialog.open(PainelDescontoComponent,{
      data:{mensagem:1}
    });    
   
    descontoDialog.afterClosed().subscribe(desconto=>{
    if(desconto){
    this.valordesconto = desconto;
    let pvAtualiza = this.listaCompra.filter(pv => pv.id == id);
    console.log(pvAtualiza[0]);
    pvAtualiza[0].preco = this.valordesconto;
    this.bancoDados.AtualizaProdutoVenda(pvAtualiza[0]).subscribe(resposta=>{
    console.log(resposta);
    
    this.carregarDados();  
    });
    }})
  }
  

}
