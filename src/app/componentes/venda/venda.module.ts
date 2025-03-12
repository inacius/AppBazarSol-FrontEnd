import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { VenderComponent } from './vender/vender.component';
import { BuscaProdutoComponent } from './busca-produto/busca-produto.component';
import { ListaCompraAtualComponent } from './lista-compra-atual/lista-compra-atual.component';
import { PainelAddProdutoRapidoComponent } from './painel-add-produto-rapido/painel-add-produto-rapido.component';
import { PainelDescontoComponent } from './painel-desconto/painel-desconto.component';
import { PainelFinalizarVendaComponent } from './painel-finalizar-venda/painel-finalizar-venda.component';
import { PainelVendaRecargaComponent } from './painelAtalho/painel-venda-recarga/painel-venda-recarga.component';
import { IncluirProdutosComponent } from '../incluir-produtos/incluir-produtos.component';
import { PainelVendaRapidaComponent } from './painelAtalho/painel-venda-rapida/painel-venda-rapida.component';
import { PainelVendaRapidaBotaoComponent } from './painelAtalho/painel-venda-rapida-botao/painel-venda-rapida-botao.component';
import { MatToolbarModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatInputModule, MatIconModule, MatGridListModule, MatDialogModule, MatRadioModule, MatSnackBarModule, MatSelectModule, MatTabsModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ControladorQuantidadeComponent } from '../auxiliar/controlador-quantidade/controlador-quantidade.component';
import { BancoDados } from '../../BancoDados/BancoDados.service';
import { CalculadoraService } from '../../BancoDados/calculadora.service';



@NgModule({
  declarations: [
    VenderComponent,
    BuscaProdutoComponent,
    ListaCompraAtualComponent,
    PainelAddProdutoRapidoComponent,
    PainelDescontoComponent,
    PainelFinalizarVendaComponent,
    VenderComponent,
    PainelVendaRecargaComponent,
    IncluirProdutosComponent,
    PainelVendaRapidaComponent,
    PainelVendaRapidaBotaoComponent,
    ControladorQuantidadeComponent
  ],
  exports: [
    VenderComponent,
    BuscaProdutoComponent,
    ListaCompraAtualComponent,
    PainelAddProdutoRapidoComponent,
    PainelDescontoComponent,
    PainelFinalizarVendaComponent,
    VenderComponent,
    PainelVendaRecargaComponent,
    IncluirProdutosComponent,
    PainelVendaRapidaComponent,
    PainelVendaRapidaBotaoComponent,
    ControladorQuantidadeComponent
  ],
  entryComponents: [
    PainelVendaRecargaComponent,
    PainelFinalizarVendaComponent,
    PainelAddProdutoRapidoComponent,
    IncluirProdutosComponent,
    PainelDescontoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatDialogModule,
    MatRadioModule,
    FormsModule,
    MatSnackBarModule,
    ChartsModule,
    MatSelectModule,
    MatTabsModule    
  ],
  providers: [
    BancoDados,
    CalculadoraService,
    CurrencyPipe
  ],
})
export class VendaModule { }
