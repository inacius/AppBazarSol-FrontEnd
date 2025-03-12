import { Component, OnInit } from '@angular/core';
import { RelatorioGeral } from 'src/app/Objetos/RelatorioGeral';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';
import { GraficoDados } from 'src/app/Objetos/GraficoDados';

@Component({
  selector: 'app-relatorio-balanco',
  templateUrl: './relatorio-balanco.component.html',
  styleUrls: ['./relatorio-balanco.component.css']
})
export class RelatorioBalancoComponent implements OnInit {

  listaDeDatas:Date[]=new Array;
  relatorioGeral:RelatorioGeral = {comprasPagasAno:0,comprasPagasMes:0,comprasRealizadasAno:0,comprasRealizadasMes:0,recargaAno:0,recargaDia:0,recargaMes:0,saidasAno:0,saidasDia:0,saidasMes:0,servicoAno:0,servicoDia:0,servicoMes:0,vendasAno:0,vendasDia:0,vendasMes:0};
  balancoMes:number;
  balancoAno:number;


  formatoData = 'dd-MM-yyyy';
  locale = 'en-US';

  graficoDados:GraficoDados[] = new Array;

  constructor(private bancoDados:BancoDados) 
  { 

    bancoDados.ListaDataVendas().subscribe(retorno =>{
      //console.log(retorno);
      this.listaDeDatas = retorno;
      
      
      bancoDados.ConsultaRelatorioGeral(this.listaDeDatas[0]).subscribe(resposta=>{
        console.log(resposta);
        this.relatorioGeral = resposta;
        this.balancoMes = this.relatorioGeral.vendasMes - this.relatorioGeral.comprasPagasMes;
        this.balancoAno = this.relatorioGeral.vendasAno - this.relatorioGeral.comprasPagasAno;        
        //console.log(this.relatorioGeral.vendasDia);

      });

    bancoDados.ConsultaBalanco().subscribe(resposta=>{
      console.log(resposta);
      
      resposta.forEach(p=>{
        let anoMes = p.mes+"/"+p.ano;
        let graficoDadosAuxiliar:GraficoDados = {id:0,anoMes:"",valores1Nome:"Total Compras",valores2Nome:"Total Vendas",valores3Nome:"Balanco", valores1:0,valores2:0,valores3:0};
        graficoDadosAuxiliar.anoMes = anoMes;
        graficoDadosAuxiliar.valores1 = p.totalCompras;
        graficoDadosAuxiliar.valores2 = p.totalVenda;        
        graficoDadosAuxiliar.valores3 = p.totalVenda - p.totalCompras;

        this.graficoDados.push(graficoDadosAuxiliar);
      });
      this.graficoDados = this.graficoDados.slice();

    })  
    })
  }

  ngOnInit() 
  {

  } 

}
