import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from '../Produto';
import { getBaseUrl } from '../../main';

@Component({
  selector: 'app-teste-http',
  templateUrl: './teste-http.component.html',
  styleUrls: ['./teste-http.component.css']
})
export class TesteHTTPComponent implements OnInit {

  variavel;
  produtos: Produto[] = new Array();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };



  constructor(private http: HttpClient,@Inject('BASE_URL') baseUrl: string) {
    http.get<Produto>(baseUrl + 'produtos').subscribe(result => {
      this.variavel = result;
      this.produtos = this.variavel;
      //this.http.post<Produto>(baseUrl + 'produtos', this.produtos[0], this.httpOptions).subscribe(resposta => {
      //  console.log(resposta);
      //});
    }, error => console.error(error));
  }

  ngOnInit() {
    

    //return this.http.post<IncluirProduto>('http://localhost:3000/Produtos', produto, httpOptions).

  }

}
