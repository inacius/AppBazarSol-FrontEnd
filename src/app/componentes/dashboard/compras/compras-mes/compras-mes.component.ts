import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularTreeGridComponent } from 'angular-tree-grid';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';

@Component({
  selector: 'app-compras-mes',
  templateUrl: './compras-mes.component.html',
  styleUrls: ['./compras-mes.component.css']
})
export class ComprasMesComponent implements OnInit {

  data= [
    { id: 1, name: 'Ashok', age: 60, parent: 0},
    { id: 2, name: 'Sam', age: 40, parent: 1},
    { id: 3, name: 'Sriya', age: 36, parent: 1},
    { id: 4, name: 'Prakash', age: 20, parent: 2},
    { id: 5, name: 'Sneha', age: 21, parent: 3},
    { id: 6, name: 'Pritam', age: 60, parent: 34},
    { id: 7, name: 'Roshan', age: 40, parent: 6},
    { id: 8, name: 'Suraj', age: 36, parent: 6},
    { id: 9, name: 'Swarup', age: 20, parent: 8},
    { id: 10, name: 'Aditya', age: 21, parent: 8},
  ];


  @ViewChild('angularGrid', {static: false}) angularGrid: AngularTreeGridComponent;
        
  expandAll() {
    this.angularGrid.expandAll();
  }
  collapseAll() {
    this.angularGrid.collapseAll();
  }


  source;

  constructor(private bancoDados:BancoDados) {
    bancoDados.ConsultaCompra().subscribe(result=>{
      console.log(result);
      this.source = result;
    });

   }

  ngOnInit() {
    
  }

  configs: any = {
    'rows': 'fornecedor.nome',
    'columns': 'dataCompra'
  };


  configs2: any = {
    id_field: 'id',
    parent_id_field: 'parent',
    parent_display_field: 'name',
    css: { // Optional      
      expand_class: 'fa fa-caret-right',
      collapse_class: 'fa fa-caret-down',
    },
    columns: [
      {
        name: 'name',
        header: 'Name',
        width: '100px'
      },
      {
        name: 'age',
        header: 'Age',
        renderer: function(value) {
          return value + ' years';
        }
      },
      {
        name: 'weight',
        header: 'Weight'
      },
      {
        name: 'gender',
        header: 'Gender',
        renderer: function(value) {
          return value ? 'Male' : 'Female';
        }
      },
      {
        name: 'phone',
        header: 'Phone',
        width: '150px'
      }
    ]
  };

}
