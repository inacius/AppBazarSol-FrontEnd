import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PainelVendaRecargaComponent } from '../painel-venda-recarga/painel-venda-recarga.component';
import { ProdutoAtalho } from 'src/app/Objetos/ProdutoAtalho';


@Component({
  selector: 'app-painel-venda-rapida-botao',
  templateUrl: './painel-venda-rapida-botao.component.html',
  styleUrls: ['./painel-venda-rapida-botao.component.css']
})
export class PainelVendaRapidaBotaoComponent implements OnInit {

  @Input() atalhoBotao:ProdutoAtalho;
  
  @Output() messageEvent = new EventEmitter<any>();
  

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    //console.log("Chegou no botao :0 "+this.atalhoBotao.nome)
    
  }

  enviaProduto(idProduto:number){
   //console.log("Button id "+idProduto);
   ////////ID RECARGA
    if(idProduto==1007){
      this.openDialog();
    }else{
    this.messageEvent.emit(idProduto);
    }
  }




  openDialog(){
    const recargaDialog = this.dialog.open(PainelVendaRecargaComponent);

    recargaDialog.afterClosed().subscribe(retorno=>{

      console.log(retorno);
      var idProduto = retorno[1]*1;
      var valor = retorno[0];
      //console.log("ID Produto "+idProduto );
      //console.log("valor "+valor );
      this.messageEvent.emit({idProduto,valor});

    })

  }



}
