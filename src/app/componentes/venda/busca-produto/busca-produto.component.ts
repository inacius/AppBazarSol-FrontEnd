import { Component, OnInit, ViewChild, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Produtos } from 'src/app/Objetos/Produtos';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';
import { IncluirProdutosComponent } from '../../incluir-produtos/incluir-produtos.component';
import { PainelDescontoComponent } from '../painel-desconto/painel-desconto.component';
import { CalculadoraService } from 'src/app/BancoDados/calculadora.service';
import { PainelSaidaCaixaComponent } from '../../caixa/painel-saida-caixa/painel-saida-caixa.component';



@Component({
  selector: 'app-busca-produto',
  templateUrl: './busca-produto.component.html',
  styleUrls: ['./busca-produto.component.css']
})
export class BuscaProdutoComponent implements OnInit,OnChanges {

  displayedColumns: string[] = ['id','nome','quantidadeEstoque','preco','adicionar'];
  dataSource: MatTableDataSource<Produtos>;
  produto:Produtos[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Output() enviaIDProduto = new EventEmitter<any>();
  @Output() enviaQuantidade = new EventEmitter<number>();
  @Input() atualizaContadorQuantidade:boolean=false;
  quantidadeRecebida:number=1;
  valordesconto:number =0;
  filtro:string='';
  atualizaContador:boolean=false;

  
  constructor(private bancoDados:BancoDados,public dialog:MatDialog,private calc:CalculadoraService) { 

    this.carregaInformacoesTabela();
    
  }
  ngOnChanges() {
    this.atualizaContador=!this.atualizaContador;
  }

  ngOnInit() {
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  adicionaProduto(idProduto:number){
    //this.atualizaContador=false;
    console.log(idProduto,this.quantidadeRecebida);
    this.enviaIDProduto.emit({id:idProduto,quantidade:this.quantidadeRecebida,valor:0});
    this.filtro='';
    this.dataSource.filter='';
    this.atualizaContador=!this.atualizaContador;
    
  }

  incluirProduto(){

    this.openDialogIncluirProduto();

  }

  saidaCaixa(){

    this.openDialogSaidaCaixa();

  }

  desconto(){
    this.openDialogDesconto();
  }

  carregaInformacoesTabela(){

    this.bancoDados.listaProdutoParaVenda().subscribe(produtos=>{
      console.log(produtos);
      this.produto = produtos;    
      this.dataSource = new MatTableDataSource(produtos);  
      this.dataSource.paginator = this.paginator;
    }
    );

  }

  openDialogIncluirProduto(){
    const incluirProdutoDialog = this.dialog.open(IncluirProdutosComponent,{
      data:{mensagem:1}
    });    
   
    incluirProdutoDialog.afterClosed().subscribe(produto=>{
      
      this.carregaInformacoesTabela();
    })
  }


  openDialogSaidaCaixa(){
    const saidaCaixaDialog = this.dialog.open(PainelSaidaCaixaComponent,{

    });

    saidaCaixaDialog.afterClosed().subscribe(saida=>{

    });
  }

  openDialogDesconto(){
    const descontoDialog = this.dialog.open(PainelDescontoComponent,{
      data:{mensagem:1}
    });    
   
    descontoDialog.afterClosed().subscribe(desconto=>{
      this.valordesconto = desconto;
///////////////////////////////////////////////// ALTERAR ID do DESCONTO
      this.enviaIDProduto.emit({id:1002,quantidade:1,valor:(desconto*-1)});
      console.log(desconto)
    })
  }

  recebeQuantidade(event:number){
    this.quantidadeRecebida = event*1;
    this.enviaQuantidade.emit(this.quantidadeRecebida);
  }

}
