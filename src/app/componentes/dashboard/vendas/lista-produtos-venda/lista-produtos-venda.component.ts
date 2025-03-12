import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Produtos } from 'src/app/Objetos/Produtos';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';
import { VendaProduto } from 'src/app/Objetos/VendaProduto';
import { Venda } from 'src/app/Objetos/Venda';
import { ProdutoVenda } from 'src/app/Objetos/ProdutoVenda';
import { CalculadoraService } from 'src/app/BancoDados/calculadora.service';
import { ProdutoRelatorio } from 'src/app/Objetos/ProdutoRelatorio';

@Component({
  selector: 'app-lista-produtos-venda',
  templateUrl: './lista-produtos-venda.component.html',
  styleUrls: ['./lista-produtos-venda.component.css']
})
export class ListaProdutosVendaComponent implements OnInit {

  @ViewChild('select', { static: true })select: ElementRef<HTMLInputElement>;

  displayedColumns: string[] = ['id','nome','valorUnitario','quantidade','valorTotal'];

  produto:Produtos[];
  venda:Venda[];
  vendaProdutos:VendaProduto[];
  listaIDProdutosVendidos:number[]=new Array;
  listaDeDatas:Date[]= new Array;
  selectedValue;


  dataSource: MatTableDataSource<ProdutoRelatorio> =  new MatTableDataSource([{data:new Date(),id:1,quantidade:1,precoTotal:1,nome:"um",valorUnitario:1}]);          

  totalPorProdutoCompleto:ProdutoRelatorio[]=new Array;


  constructor(private bancoDados:BancoDados,private calc:CalculadoraService) {

    bancoDados.ListaDataVendas().subscribe(retorno =>{
      retorno.forEach(element => {
        this.listaDeDatas.push(element);                    
      });
      this.listaDeDatas = this.listaDeDatas.sort((b,a) => new Date(a).getTime() - new Date(b).getTime());
    })

        //pega dados para tabela
        bancoDados.TotalProdutoDia(new Date()).subscribe(retorno=>{
          this.totalPorProdutoCompleto = retorno;
          this.dataSource = new MatTableDataSource(retorno);           
          this.dataSource.sort = this.sort;
          console.log(retorno);          
        });
 
   }

   @ViewChild(MatSort, { static: true }) sort: MatSort;
   
  ngOnInit() {
    
  }

  ngOnChange(){    
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  AtualizarValores(){
    console.log(this.selectedValue);

    this.totalPorProdutoCompleto.length = 0;

     //pega dados para tabela
      this.bancoDados.TotalProdutoDia(this.selectedValue).subscribe(retorno=>{
      this.totalPorProdutoCompleto = retorno;
      this.dataSource = new MatTableDataSource(retorno);           
    });

  }


  getTotalCost() {
    return this.totalPorProdutoCompleto.map(t => t.precoTotal).reduce((acc, value) => acc + value, 0);
  }

}
