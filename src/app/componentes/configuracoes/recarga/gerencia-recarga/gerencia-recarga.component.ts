import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';
import { Operadora } from 'src/app/Objetos/Operadora';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-gerencia-recarga',
  templateUrl: './gerencia-recarga.component.html',
  styleUrls: ['./gerencia-recarga.component.css']
})
export class GerenciaRecargaComponent implements OnInit {

  operadoras:Operadora[];
  displayedColumns: string[] = ['id','nome','ativa'];
  @ViewChild('formOperadora', { static: true })formOperadora: ElementRef<HTMLInputElement>;
  eNovo:boolean=false;
  operadoraLocal:Operadora={id:0,ativa:false,idProduto:null,nome:""};

  dataSource: MatTableDataSource<Operadora>;


  constructor(private bancoDados:BancoDados, private changeDetectorRefs: ChangeDetectorRef) { 

    this.bancoDados.ConsultaOperadora().subscribe(retornoBD=>{
      console.log(retornoBD);
      this.operadoras = retornoBD;
      this.dataSource = new MatTableDataSource(this.operadoras);
    })

  }

  ngOnInit() {


    
  }

  ngOnChanges(){
    
    this.bancoDados.ConsultaOperadora().subscribe(retornoBD=>{
      console.log(retornoBD);
      this.operadoras = retornoBD;
      this.dataSource = new MatTableDataSource(this.operadoras);

  })
}

  AtualizadorTela(atualiza:boolean){
    console.log("Chegou atualizar tela "+atualiza);
    this.bancoDados.ConsultaOperadora().subscribe(retornoBD=>{
      console.log(retornoBD);
      this.operadoras = retornoBD;
      this.dataSource = new MatTableDataSource(this.operadoras);
    })
    //this.changeDetectorRefs.detectChanges();
  }

  AtualizaOperadora(id:number){
    //console.log("Atualiza Operadora "+id);
    //console.log(this.operadoras.filter(t=>t.id == id));
    let tempOperadora = this.operadoras.filter(t=>t.id == id);
    this.operadoraLocal = tempOperadora[0];
    //console.log(this.operadoraLocal);
    this.eNovo=true;
    //this.formOperadora.nativeElement.hidden = false;
  }

  NovaOperadora(){
    this.eNovo=true;    
    this.operadoraLocal = {id:0,ativa:false,idProduto:null,nome:""}
    //this.formOperadora.nativeElement.hidden = false;
  }

}
