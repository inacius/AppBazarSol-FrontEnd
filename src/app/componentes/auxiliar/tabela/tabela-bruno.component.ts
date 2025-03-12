import { Component, OnInit, ViewChild, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Compra } from 'src/app/Objetos/Compra';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-tabela-bruno',
  templateUrl: './tabela-bruno.component.html',
  styleUrls: ['./tabela-bruno.component.css']
})
export class TabelaBrunoComponent implements OnInit,OnChanges {


  @Input() colunas:string[];
  @Input() dados;
  @Output() enviaID = new EventEmitter<number>();

  //compras:Compra[];
  dataSource: MatTableDataSource<Compra>;
  filtro:string='';
  displayedColumns: string[];

  constructor(){}

@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() 
  {
    this.displayedColumns = this.colunas;
    console.log(this.displayedColumns)
    this.carregarDados(this.dados);
  }

  ngOnChanges()
  {
    this.carregarDados(this.dados);
  }

  carregarDados(dados)
  {    
    this.dataSource = new MatTableDataSource(dados);

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

  }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    console.log(this.dataSource.data);
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  }

  selecionaItem(event: number){
    //console.log(event);
    this.enviaID.emit(event);
  }

}
