import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/cliente'
import { HttpClient, HttpParams } from '@angular/common/http';

const baseUrl:String = "http://localhost:8080"


@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor(private http: HttpClient) {  }
  
  createClient(cliente:Cliente){
    return this.http.post(baseUrl + '/cliente/clienteAdd', JSON.stringify(cliente));
  }
}
