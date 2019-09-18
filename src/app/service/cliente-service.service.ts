import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/cliente'
import { HttpClient, HttpParams } from '@angular/common/http';

const baseUrl:String = "http://localhost:8080"


@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {
  
  private cliente = new Cliente();

  getter(){
    return this.cliente
  }

  setter(cliente:Cliente){
    this.cliente = cliente;
  }

  constructor(private http: HttpClient) { }
  private options: HttpParams
  createClient(cliente: Cliente) {
    return this.http.post(baseUrl + '/cliente/clienteAdd', JSON.stringify(cliente),
      { headers: { 'Content-Type': 'application/json' } });
  }


  verificaClient(cliente: Cliente) {
    return this.http.post(baseUrl + "/cliente/verificaCliente", JSON.stringify(cliente), { headers: { 'Content-Type': 'application/json' } })
  }

  buscarClient(id: Number) {
    this.options = new HttpParams();
    this.options = this.options.append('id', id.toString())
    const param = { params: this.options }
    return this.http.get(baseUrl + "/cliente/buscarCliente", param)
  }

  buscarCpf(cpf: String) {
    this.options = new HttpParams();
    this.options = this.options.append('cpf',cpf.toString())
    const param = { params: this.options }
    return this.http.get<Cliente>(baseUrl + "/cliente/buscarCpf", param)
  }

}
