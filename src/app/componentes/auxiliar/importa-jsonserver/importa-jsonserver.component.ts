import { Component, OnInit } from '@angular/core';
import { BancoDados } from 'src/app/BancoDados/BancoDados.service';
import { Produto } from 'src/app/Produto';
import { IncluirProduto } from 'src/app/Objetos/IncluirProduto';

@Component({
  selector: 'app-importa-jsonserver',
  templateUrl: './importa-jsonserver.component.html',
  styleUrls: ['./importa-jsonserver.component.css']
})
export class ImportaJsonserverComponent implements OnInit {

  produtoJson:IncluirProduto[];
  constructor(private bancoDados:BancoDados) {
    bancoDados.ProdutoJsonServer().subscribe(resposta=>{
      console.log(resposta);
      this.produtoJson=resposta;
  })
   }

  ngOnInit() {
  }

  ImportarProdutos(){
    this.produtoJson.forEach(p=>{        
      console.log(p);
      let produtoImportacao:IncluirProduto = p;    
       produtoImportacao.nome=p.nome;
       produtoImportacao.preco=p.preco;
       produtoImportacao.atalho=false;
       produtoImportacao.servico=false;
       produtoImportacao.controlaEstoque=false;
       produtoImportacao.quantidadeEstoque=p.quantidadeEstoque;
       produtoImportacao.codigoBarras=p.codigoBarras*1;
       produtoImportacao.dataUltimaCompra=p.dataUltimaCompra;
       console.log("Importando "+produtoImportacao.nome);
      
      this.bancoDados.AdicionaProdutoHttp(produtoImportacao);    
    })
  }

}
