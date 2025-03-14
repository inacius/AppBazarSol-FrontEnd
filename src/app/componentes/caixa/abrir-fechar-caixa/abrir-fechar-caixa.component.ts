import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, UntypedFormBuilder, Validators, UntypedFormGroup } from '@angular/forms';
import { AbreFechaCaixa } from 'src/app/Objetos/AbreFechaCaixa';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';
import { MatDialog } from '@angular/material/dialog';
import { PainelDetalheFinalizaCaixaComponent } from '../painel-detalhe-finaliza-caixa/painel-detalhe-finaliza-caixa.component';

@Component({
  selector: 'app-abrir-fechar-caixa',
  templateUrl: './abrir-fechar-caixa.component.html',
  styleUrls: ['./abrir-fechar-caixa.component.css']
})
export class AbrirFecharCaixaComponent implements OnInit {

  controleCaixaForm:UntypedFormGroup;
  listaDeDatas:Date[]=new Array;
  caixa:AbreFechaCaixa =
  {
    id: 0,
    data: new Date(),
    moedaInicial: 0,
    notaInicial: 0,
    totalInicial: 0,
    moedaFinal: 0,
    notaFinal: 0,
    totalFinal: 0,
    outrosFinal:0,
    totalSaidaCaixa: 0,
    idStatus:0
}
  selectedValue;
  aberto:Boolean=false;
  fechado:Boolean=false;
  primeiroCarregamento=true;
  totalDia:number=0;

  constructor(private formBuilder:UntypedFormBuilder,public dialog: MatDialog,private bancoDados:BancoDados) { 

    bancoDados.ConsultaDatasCaixa().subscribe(resposta =>{
      this.listaDeDatas = resposta;
      console.log(this.listaDeDatas[0]);

      bancoDados.ConsultaDiaCaixa(this.listaDeDatas[0]).subscribe(resposta=>{
        this.PopularCampos(resposta);
      })

    });

  }

  ngOnInit() {
    console.log(this.caixa.data);

      this.controleCaixaForm = this.formBuilder.group({
        moedasAbrir: [this.caixa.moedaInicial,Validators.required],
        notasAbrir: [this.caixa.notaInicial,Validators.required],
        moedasFechar: [this.caixa.moedaFinal],
        notasFechar: [this.caixa.notaFinal],
        outrosFechar:[this.caixa.outrosFinal],
        status: [this.caixa.idStatus,Validators.required]
      });

      this.controleCaixaForm.valueChanges.subscribe(item=>{
        console.log(item);
      });


  }

  AtualizaFormulario(){
    //Nao esta funcionando, mas nao esta atrapalhando
    const moedaFecharControl = this.controleCaixaForm.get('moedasFechar');
    const notaFecharControl = this.controleCaixaForm.get('notasFechar');

    moedaFecharControl.setValidators([Validators.required]);
    notaFecharControl.setValidators([Validators.required]);

    moedaFecharControl.updateValueAndValidity();
    notaFecharControl.updateValueAndValidity();
    

  }


  AbrirCaixa(){
    this.caixa.moedaInicial = this.controleCaixaForm.get("moedasAbrir").value;
    this.caixa.notaInicial = this.controleCaixaForm.get("notasAbrir").value;
    this.caixa.idStatus=1;
    console.log(this.caixa);
    this.bancoDados.AbrirCaixa(this.caixa).subscribe(resposta=>{
      console.log(resposta);


      this.bancoDados.ConsultaDatasCaixa().subscribe(resposta =>{
        this.listaDeDatas = resposta;
        console.log(this.listaDeDatas[0]);
  
        this.bancoDados.ConsultaDiaCaixa(this.listaDeDatas[0]).subscribe(resposta=>{
          this.PopularCampos(resposta);
        })
  
      });


    })
  }

  FecharCaixa(){

    this.bancoDados.ConsultaRelatorioVendaPorDiaFechaCaixa(this.listaDeDatas[0]).subscribe(resposta=>{
        console.log(resposta);

        let valorDinheiro = 0;
        let valorCredito = 0;
        let valorDebito = 0;
        let valorOutros = 0;
        resposta.forEach(r=>{
          if(r.idFormaPagamento==0){
            valorDinheiro = r.valorTotal;
          }
          if(r.idFormaPagamento==1){
            valorDebito = r.valorTotal;
          }
          if(r.idFormaPagamento==2){
            valorCredito = r.valorTotal;
          }
          if(r.idFormaPagamento>2){
            valorOutros = r.valorTotal;
          }
        })

        this.totalDia = parseFloat((valorDinheiro+valorDebito+valorCredito+valorOutros).toFixed(2));

        console.log(this.totalDia);
        

        let totalSaida:number;

        this.bancoDados.SaidaDeCaixaPorDia(this.listaDeDatas[0]).subscribe(respostaSaida=>{
          totalSaida = respostaSaida.valor *1;

          let moedasFechar = this.controleCaixaForm.get("moedasFechar").value*1;
          let notasFechar = this.controleCaixaForm.get("notasFechar").value*1;
          let outrosFechar = this.controleCaixaForm.get("outrosFechar").value*1;

          
          let totalFormInicial = (this.controleCaixaForm.get("moedasAbrir").value*1) + (this.controleCaixaForm.get("notasAbrir").value*1);
          let totalFormFinal = moedasFechar + notasFechar + outrosFechar;
          let fechamento = parseFloat((this.totalDia+totalFormInicial-totalFormFinal-totalSaida).toFixed(2));
          console.log(totalSaida);
          console.log(fechamento);

          this.caixa.moedaFinal = moedasFechar;
          this.caixa.notaFinal = notasFechar;
          this.caixa.outrosFinal = outrosFechar;

          if(fechamento==0)
          {
            this.caixa.idStatus=2;
  
            console.log(this.caixa);
  
            this.bancoDados.FecharCaixa(this.caixa).subscribe(resposta=>{
              console.log(resposta);
              this.bancoDados.ConsultaDiaCaixa(this.listaDeDatas[0]).subscribe(resposta=>{
                this.PopularCampos(resposta);
              })
            })
          }
          else
          {

            this.caixa.idStatus=1;

            console.log(this.caixa);
  
            this.bancoDados.FecharCaixa(this.caixa).subscribe(resposta=>{
              console.log(resposta);
              this.bancoDados.ConsultaDiaCaixa(this.listaDeDatas[0]).subscribe(resposta=>{
                this.PopularCampos(resposta);
                
                this.openDialog((this.totalDia+totalFormInicial-totalSaida*1),totalFormInicial,this.totalDia,valorDinheiro,valorDebito,valorCredito,valorOutros,totalSaida,notasFechar,moedasFechar,outrosFechar);
                console.log(this.totalDia);
                console.log(totalFormInicial);
                console.log("Valor Total esperado: "+(this.totalDia+totalFormInicial));
                console.log("Total caixa inicial: "+totalFormInicial);
                console.log("Total vendas: "+this.totalDia);

              })
            })

          }
        
        })
    });


  }

  PopularCampos(resposta:AbreFechaCaixa){
    
    
    if(new Date().setHours(0,0,0,0) == new Date(this.listaDeDatas[0]).setHours(0,0,0,0)){
      console.log("Hoje");
      this.fechado=false;
      this.aberto=false;
      this.caixa = resposta;

      let status = this.caixa.idStatus+"";
      if (this.caixa.idStatus==1){
        this.aberto=true;   
        this.controleCaixaForm.controls["moedasAbrir"].disable();
        this.controleCaixaForm.controls['notasAbrir'].disable();
        this.AtualizaFormulario();
      }
      if  (this.caixa.idStatus==2){
        this.aberto=true;
        this.fechado=true;
        this.controleCaixaForm.controls["moedasAbrir"].disable();
        this.controleCaixaForm.controls['notasAbrir'].disable();
        this.controleCaixaForm.controls["moedasFechar"].disable();
        this.controleCaixaForm.controls['notasFechar'].disable();
        this.controleCaixaForm.controls['outrosFechar'].disable();
        status = "";
      }

      this.controleCaixaForm = this.formBuilder.group({
        moedasAbrir: [this.caixa.moedaInicial,Validators.required],
        notasAbrir: [this.caixa.notaInicial,Validators.required],
        moedasFechar: [this.caixa.moedaFinal],
        notasFechar: [this.caixa.notaFinal],
        outrosFechar:[this.caixa.outrosFinal],
        status: [status,Validators.required]
      });
    }else{
      console.log("Nao e hoje "+this.listaDeDatas[0]);
      this.controleCaixaForm = this.formBuilder.group({
        moedasAbrir: ['',Validators.required],
        notasAbrir: ['',Validators.required],
        moedasFechar: [''],
        notasFechar: [''],
        status: [0,Validators.required]
      });
    }
  }

  AtualizarValores(){    
    this.bancoDados.ConsultaDiaCaixa(this.selectedValue).subscribe(resposta=>{
      this.PopularCampos(resposta);
    })
  }


  openDialog(totalesperado:number,totalCaixaInicial:number,totalVendasDia:number,valorDinheiro:number,valorDebito:number,valorCredito:number,valorOutros:number,totalSaida:number,notasFechar:number,moedasFechar:number,outrosFechar:number){
    const finalizaDialog = this.dialog.open(PainelDetalheFinalizaCaixaComponent,{
      data:{totalEsperado:totalesperado,totalCaixaInicial:totalCaixaInicial,totalVendasDia:totalVendasDia,valorDinheiro:valorDinheiro,valorDebito:valorDebito,valorCredito:valorCredito,valorOutros:valorOutros,totalSaida:totalSaida,notasFechar,moedasFechar,outrosFechar}
    });
  }

}
