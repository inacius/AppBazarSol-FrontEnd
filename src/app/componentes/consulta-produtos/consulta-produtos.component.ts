import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';
import { Produtos } from 'src/app/Objetos/Produtos';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-consulta-produtos',
  templateUrl: './consulta-produtos.component.html',
  styleUrls: ['./consulta-produtos.component.css']
})
export class ConsultaProdutosComponent implements OnInit {
  
  displayedColumns: string[] = ['id','nome','quantidadeEstoque','preco'];

  produto:Produtos[];
  produtoSelecionado:Produtos[];

  dataSource: MatTableDataSource<Produtos>;
  filtro:string='';

  constructor(private bancoDados:BancoDados) { 

    this.bancoDados.pegaDadoHttp().subscribe(produtos=>{
      console.log(produtos);
      this.produto = produtos;    
      this.dataSource = new MatTableDataSource(produtos);  
      this.dataSource.paginator = this.paginator;
    }
    );
    
    //this.dataSource.paginator = this.paginator;


  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  ngOnInit() {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  selecionaProduto(event: number){
    console.log(event);
    this.produtoSelecionado = this.produto.filter(x=> x.id === event);
    console.log(this.produtoSelecionado);
  }

  verificaProdutoAtualizado(event){
    console.log(event);
    this.bancoDados.pegaDadoHttp().subscribe(produtos=>{
      console.log(produtos);
      this.produto = produtos;    
      this.dataSource = new MatTableDataSource(produtos);  
      this.dataSource.paginator = this.paginator;
      this.dataSource.filter='';
      this.filtro='';
    }
    );
  }



}
