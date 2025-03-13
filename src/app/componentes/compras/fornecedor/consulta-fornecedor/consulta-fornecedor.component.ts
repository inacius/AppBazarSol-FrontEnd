import { Component, OnInit, ViewChild } from '@angular/core';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Fornecedor } from 'src/app/Objetos/Fornecedor';

@Component({
  selector: 'app-consulta-fornecedor',
  templateUrl: './consulta-fornecedor.component.html',
  styleUrls: ['./consulta-fornecedor.component.css']
})
export class ConsultaFornecedorComponent implements OnInit {

  displayedColumns: string[] = ['id','nome','contato','email','telefone'];
  dataSource: MatTableDataSource<Fornecedor>;
  fornecedor:Fornecedor[];
  fornecedorSelecionado;
  eNovo=false;
  filtro;

  constructor(private bancoDados:BancoDados) {

    bancoDados.ConsultaFornecedor(0).subscribe(resposta=>{
      this.fornecedor=resposta;
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
    })

   } 


   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  selecionaFornecedor(event: number){
    console.log(event);
    console.log(this.fornecedor);
    this.fornecedorSelecionado = this.fornecedor.filter(x=> x.id === event)[0];
    console.log(this.fornecedorSelecionado);
  }


  verificaFornecedorAtualizado(event:Event){
    console.log(event);
    this.bancoDados.ConsultaFornecedor(0).subscribe(resposta=>{
      console.log(resposta);
      this.fornecedor = resposta;    
      this.dataSource = new MatTableDataSource(this.fornecedor);  
      this.dataSource.paginator = this.paginator;
      this.dataSource.filter='';
      //this.filtro='';
    }
    );
  }

  novoFornecedor(){
    this.eNovo=true;
  }
}
