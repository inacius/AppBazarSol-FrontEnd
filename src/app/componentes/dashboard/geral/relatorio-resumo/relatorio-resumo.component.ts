import { Component, OnInit } from '@angular/core';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';
import { RelatorioGeral } from 'src/app/Objetos/RelatorioGeral';

@Component({
  selector: 'app-relatorio-resumo',
  templateUrl: './relatorio-resumo.component.html',
  styleUrls: ['./relatorio-resumo.component.css']
})
export class RelatorioResumoComponent implements OnInit {

  selectedValue;
  listaDeDatas:Date[]=new Array;
  relatorioGeral:RelatorioGeral = {comprasPagasAno:0,comprasPagasMes:0,comprasRealizadasAno:0,comprasRealizadasMes:0,recargaAno:0,recargaDia:0,recargaMes:0,saidasAno:0,saidasDia:0,saidasMes:0,servicoAno:0,servicoDia:0,servicoMes:0,vendasAno:0,vendasDia:0,vendasMes:0};

  constructor(private bancoDados:BancoDados) 
  { 

    bancoDados.ListaDataVendas().subscribe(retorno =>{
      //console.log(retorno);
      this.listaDeDatas = retorno;

      bancoDados.ConsultaRelatorioGeral(this.listaDeDatas[0]).subscribe(resposta=>{
        console.log(resposta);
        this.relatorioGeral = resposta;        
      });
    })



  }

  ngOnInit() {
  }


  AtualizarValores(){

      this.bancoDados.ConsultaRelatorioGeral(this.selectedValue).subscribe(resposta=>{
        console.log(resposta);
        this.relatorioGeral = resposta;        
      });
    

  }

}
