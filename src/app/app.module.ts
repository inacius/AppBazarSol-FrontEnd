import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TesteHTTPComponent } from './teste-http/teste-http.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VendaModule } from './componentes/venda/venda.module';
import { VenderComponent } from './componentes/venda/vender/vender.component';
import { ConsultaProdutosComponent } from './componentes/consulta-produtos/consulta-produtos.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChartsModule } from 'ng2-charts';
import { GerenciaRecargaComponent } from './componentes/configuracoes/recarga/gerencia-recarga/gerencia-recarga.component';
import { IncluirOperadoraComponent } from './componentes/configuracoes/recarga/incluir-operadora/incluir-operadora.component';
import { TotalVendasComponent } from './componentes/dashboard/vendas/total-vendas/total-vendas.component';
import { MostrarTotalComponent } from './componentes/auxiliar/mostrar-total/mostrar-total.component';
import { ListaProdutosVendaComponent } from './componentes/dashboard/vendas/lista-produtos-venda/lista-produtos-venda.component';
import { AtualizarOperadoraComponent } from './componentes/configuracoes/recarga/atualizar-operadora/atualizar-operadora.component';
import { SnackbarFinalizadoComponent } from './componentes/venda/snackbar-finalizado/snackbar-finalizado.component';
import { ImportaJsonserverComponent } from './componentes/auxiliar/importa-jsonserver/importa-jsonserver.component';
import { AbrirFecharCaixaComponent } from './componentes/caixa/abrir-fechar-caixa/abrir-fechar-caixa.component';
import { PainelDetalheFinalizaCaixaComponent } from './componentes/caixa/painel-detalhe-finaliza-caixa/painel-detalhe-finaliza-caixa.component';
import { PainelSaidaCaixaComponent } from './componentes/caixa/painel-saida-caixa/painel-saida-caixa.component';
import { IncluirFornecedorComponent } from './componentes/compras/fornecedor/incluir-fornecedor/incluir-fornecedor.component';
import { ConsultaFornecedorComponent } from './componentes/compras/fornecedor/consulta-fornecedor/consulta-fornecedor.component';
import { CompraComponent } from './componentes/compras/compra/compra.component';
import { ConsultaCompraComponent } from './componentes/compras/consulta-compra/consulta-compra.component';
import { IncluirCompraComponent } from './componentes/compras/incluir-compra/incluir-compra.component';
import { RelatorioResumoComponent } from './componentes/dashboard/geral/relatorio-resumo/relatorio-resumo.component';
import { RelatorioBalancoComponent } from './componentes/dashboard/geral/relatorio-balanco/relatorio-balanco.component';
import { GraficoComponent } from './componentes/auxiliar/grafico/grafico.component';
import { TabelaBrunoComponent } from './componentes/auxiliar/tabela/tabela-bruno.component';
import { TabelaFormularioComponent } from './componentes/auxiliar/tabela-formulario/tabela-formulario.component';
import { CdkTableModule } from '@angular/cdk/table';
import {AngularPivotTableModule} from 'angular-pivot-table';
import {AngularTreeGridModule} from 'angular-tree-grid';
import { ComprasMesComponent } from './componentes/dashboard/compras/compras-mes/compras-mes.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './dash/dash.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { TabComprasComponent } from './componentes/Material/tab-compras/tab-compras.component';
import { FooterComponent } from './componentes/footer/footer.component';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent,
        TesteHTTPComponent,
        ConsultaProdutosComponent,
        GerenciaRecargaComponent,
        IncluirOperadoraComponent,
        TotalVendasComponent,
        MostrarTotalComponent,
        ListaProdutosVendaComponent,
        AtualizarOperadoraComponent,
        SnackbarFinalizadoComponent,
        ImportaJsonserverComponent,
        AbrirFecharCaixaComponent,
        PainelDetalheFinalizaCaixaComponent,
        PainelSaidaCaixaComponent,
        IncluirFornecedorComponent,
        ConsultaFornecedorComponent,
        CompraComponent,
        ConsultaCompraComponent,
        IncluirCompraComponent,
        RelatorioResumoComponent,
        RelatorioBalancoComponent,
        GraficoComponent,
        TabelaBrunoComponent,
        TabelaFormularioComponent,
        ComprasMesComponent,
        NavComponent,
        DashComponent,
        TabComprasComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'counter', component: CounterComponent },
            { path: 'dashboard', component: TotalVendasComponent },
            { path: 'recarga', component: GerenciaRecargaComponent },
            { path: 'venda', component: VenderComponent },
            { path: 'importarjson', component: ImportaJsonserverComponent },
            { path: 'consulta-produtos', component: ConsultaProdutosComponent },
            { path: 'abrir-fechar-caixa', component: AbrirFecharCaixaComponent },
            { path: 'cadastro-fornecedor', component: ConsultaFornecedorComponent },
            { path: 'compras', component: CompraComponent },
            { path: 'dash', component: DashComponent },
            { path: 'tab', component: TabComprasComponent },
            { path: 'relatorio', component: ComprasMesComponent },
        ], { relativeLinkResolution: 'legacy' }),
        BrowserAnimationsModule,
        VendaModule,
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
        MatTabsModule,
        FormsModule,
        ReactiveFormsModule,
        CdkTableModule,
        MatSortModule,
        AngularPivotTableModule,
        AngularTreeGridModule,
        LayoutModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatMenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
