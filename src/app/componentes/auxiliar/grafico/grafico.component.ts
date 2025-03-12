import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { RelBalanco } from 'src/app/Objetos/RelBalanco';
import { GraficoDados } from 'src/app/Objetos/GraficoDados';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit,OnChanges {

  @Input() dados:GraficoDados[];


  constructor() 
  {
    
  }

  ngOnInit() 
  { 
    this.popularGrafico(this.dados);
  }

  ngOnChanges()
  {    
    this.popularGrafico(this.dados);
  }


  popularGrafico(relatorio:GraficoDados[]){   
    
    let valor1:number[]=new Array;
    let valor2:number[]=new Array;
    let valor3:number[]=new Array;
        relatorio.forEach(x=>{
          //console.log(Math.round(x.valores1));
          this.barChartLabels.push(x.anoMes);
          valor1.push(Math.round(x.valores1));
          valor2.push(Math.round(x.valores2));
          valor3.push(Math.round(x.valores3));
          //console.log(this.cp.transform(x.valorTotal,'BRL'))
        })
        this.barChartData[0].data = valor1;
        this.barChartData[1].data = valor2;
        this.barChartData[2].data = valor3;
        //console.log(this.barChartData[0].data);
        //this.barChartData[2].data = valoresGraficoLocalServicos;
        this.barChartData[0].label = relatorio[0].valores1Nome;
        this.barChartData[1].label = relatorio[0].valores2Nome;
        this.barChartData[2].label = relatorio[0].valores3Nome;

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
    { data: [], label: 'Total Compras' },
    { data: [], label: 'Total Servicos' }
  ];


  public barChartDataTeste: ChartDataSets[] = [];
 
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

}
