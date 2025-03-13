import { Component, OnInit, ViewChild } from '@angular/core';
import { Compra } from 'src/app/Objetos/Compra';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  displayedColumns: string[] = ['id','dataCompra','fornecedor','valor','nf','parcelas'];

  compras:Compra[];
  dataSource: MatTableDataSource<Compra>;
  filtro:string='';
  compraSelecionado;
  eNovo:boolean = false;

  constructor(private bancoDados:BancoDados){
    bancoDados.ConsultaCompra().subscribe(resposta=>
    {
      console.log(resposta);
      this.compras = resposta;
      this.dataSource = new MatTableDataSource(resposta);

      this.dataSource.filterPredicate = (data, filter: string)  => {
        const accumulator = (currentTerm, key) => {
          return key === 'fornecedor' ? currentTerm + data.fornecedor.nome : currentTerm + data[key];
        };
        const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
        // Transform the filter by converting it to lowercase and removing whitespace.
        const transformedFilter = filter.trim().toLowerCase();
        return dataStr.indexOf(transformedFilter) !== -1;
      };


      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }

@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
@ViewChild(MatSort, { static: true }) sort: MatSort;

ngOnInit()
 {

 }

 applyFilter(event: Event) {

  const filterValue = (event.target as HTMLInputElement).value;
  console.log(this.dataSource.data);
  this.dataSource.filter = filterValue.trim().toLowerCase();
  
}

selecionaCompra(event: number){
  console.log(event);
  console.log(this.compras);
  this.compraSelecionado = this.compras.filter(x=> x.id === event)[0];
  console.log(this.compraSelecionado);
}


verificaCompraAtualizado(event:Event){
  console.log(event);
  this.bancoDados.ConsultaCompra().subscribe(resposta=>
    {
      console.log(resposta);
      this.compras = resposta;
      this.dataSource = new MatTableDataSource(resposta);

      this.dataSource.filterPredicate = (data, filter: string)  => {
        const accumulator = (currentTerm, key) => {
          return key === 'fornecedor' ? currentTerm + data.fornecedor.nome : currentTerm + data[key];
        };
        const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
        // Transform the filter by converting it to lowercase and removing whitespace.
        const transformedFilter = filter.trim().toLowerCase();
        return dataStr.indexOf(transformedFilter) !== -1;
      };


      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filter='';
    })
}


novaCompra()
{
this.eNovo=true;
}


}
