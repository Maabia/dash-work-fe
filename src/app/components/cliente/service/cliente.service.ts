import { Cliente } from './../model/cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  cadastroCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>('http://localhost:8080/v1/cliente/cadastro', cliente)
  }

}
