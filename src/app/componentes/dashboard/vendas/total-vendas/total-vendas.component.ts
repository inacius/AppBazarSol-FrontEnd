import { Component, OnInit } from '@angular/core';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';
import { Venda } from 'src/app/Objetos/Venda';
import { Resultado } from 'src/app/Objetos/Resultado';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { formatDate, CurrencyPipe } from '@angular/common';
import { CalculadoraService } from 'src/app/BancoDados/calculadora.service';
import { RelatorioVendasPorDias } from 'src/app/Objetos/RelatorioVendasPorDias';


@Component({
  selector: 'app-total-vendas',
  templateUrl: './total-vendas.component.html',
  styleUrls: ['./total-vendas.component.css']
})
export class TotalVendasComponent implements OnInit {

  vendas:Venda[]= new Array;
  totalDia:number=0;
  totalRecargaDia:number=0;
  totalServicoPCDia:number=0;
  totalUltimaSemana:number=0;
  semRecarga:number=0;


  vendasAuxiliar:Venda[]=new Array;
  diaEvalor:any[];
  resultado:Resultado[]=new Array;
  resultado2:Resultado[]=new Array;
  listaDeDatas:Date[]= new Array;
  selectedValue:Date;


  formatoData = 'dd-MM-yyyy';
  locale = 'en-US';
  diaMiliseg = 8.64e+7;
  
  
  listaData:Date[]=new Array;
  constructor(private bancoDados:BancoDados,public calc:CalculadoraService,private cp:CurrencyPipe) {
    
    

    bancoDados.ConsultaRelatorioVendaPorDia(formatDate(new Date(),'yyyy-MM-dd','en')).subscribe(retorno=>{
      //console.log(calc.totalVendasHoje(retorno,1));
      this.popularGrafico(retorno);
      console.log(retorno);
      //let relatorioAuxiliar:RelatorioVendasPorDias[] = calc.totalVendasHoje(retorno,8);
      let relatorioAuxiliar:RelatorioVendasPorDias[] = retorno;
      this.totalDia = relatorioAuxiliar[relatorioAuxiliar.length-1].valorTotal;
      this.semRecarga = relatorioAuxiliar[relatorioAuxiliar.length-1].valorTotal - relatorioAuxiliar[relatorioAuxiliar.length-1].valorRecarga;
      this.totalRecargaDia = relatorioAuxiliar[relatorioAuxiliar.length-1].valorRecarga;
      this.totalServicoPCDia = relatorioAuxiliar[relatorioAuxiliar.length-1].valorServicos;
      this.totalUltimaSemana = relatorioAuxiliar[0].valorTotal;

      retorno.forEach(element => {
        //this.listaDeDatas.push(element.data);                    
      });
    }
    )

    bancoDados.ListaDataVendas().subscribe(retorno =>{
      console.log(retorno);
      this.listaDeDatas = retorno;
    })
    
 
   }
   
   
   ngOnInit() {

  }
  

  popularGrafico(relatorio:RelatorioVendasPorDias[]){   
    let valoresGraficoLocalTotal:number[]=new Array;
    let valoresGraficoLocalSemRecarga:number[]=new Array;
    let valoresGraficoLocalServicos:number[]=new Array;
        relatorio.forEach(x=>{
          this.barChartLabels.push(formatDate(x.data,'dd/MM',this.locale));
          valoresGraficoLocalTotal.push(Math.round(x.valorTotal));
          valoresGraficoLocalSemRecarga.push(Math.round(x.valorTotal-x.valorRecarga));
          valoresGraficoLocalServicos.push(Math.round(x.valorServicos));
          //console.log(this.cp.transform(x.valorTotal,'BRL'))
        })
        this.barChartData[0].data = valoresGraficoLocalTotal;
        this.barChartData[1].data = valoresGraficoLocalSemRecarga;
        this.barChartData[2].data = valoresGraficoLocalServicos;

  }


  AtualizarValores(){
    console.log(this.selectedValue);
    console.log(Math.round((new Date(this.selectedValue).getTime() - new Date().getTime())/this.diaMiliseg)*-1);
    let novoDia = Math.round((new Date(this.selectedValue).getTime() - new Date().getTime())/this.diaMiliseg)*-1;
    this.bancoDados.ConsultaRelatorioVendaDoDia(this.selectedValue+"").subscribe(retorno=>{
    
    console.log(retorno);
    //console.log(calc.totalVendasHoje(retorno,1));
   //this.popularGrafico(this.calc.totalVendasHoje(retorno,15));

   let relatorioAuxiliar:RelatorioVendasPorDias[] = retorno;
   this.totalDia = relatorioAuxiliar[relatorioAuxiliar.length-1].valorTotal;
   this.semRecarga = relatorioAuxiliar[relatorioAuxiliar.length-1].valorTotal - relatorioAuxiliar[relatorioAuxiliar.length-1].valorRecarga;
   this.totalRecargaDia = relatorioAuxiliar[relatorioAuxiliar.length-1].valorRecarga;
   this.totalServicoPCDia = relatorioAuxiliar[relatorioAuxiliar.length-1].valorServicos;
   this.totalUltimaSemana = relatorioAuxiliar[0].valorTotal;

      
    }
    )

    
  }
  
  
  public barChartOptions: ChartOptions = {
   responsive: true,
   // We use these empty structures as placeholders for dynamic theming.
   scales: { xAxes: [{}], yAxes: [{}] },
   plugins: {
     datalabels: {
       anchor: 'end',
       align: 'end',
     }
   }
 };
 public barChartLabels: Label[] = [];
 public barChartType: ChartType = 'bar';
 public barChartLegend = true;
 public barChartPlugins = [pluginDataLabels];
 public barChartData: ChartDataSets[] = [
  { data: [], label: 'Total Vendas' },
   { data: [], label: 'Total Vendas s/ recarga' },
   { data: [], label: 'Total Servicos' }
 ];

 public barChartColors: Color[] = [
   { backgroundColor: 'lightgreen' },
   { backgroundColor: 'green' },
 ]
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }

}
