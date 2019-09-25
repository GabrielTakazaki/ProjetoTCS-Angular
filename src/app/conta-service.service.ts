import { Injectable } from '@angular/core';
import { Conta } from 'src/app/conta'
import { HttpClient, HttpParams } from '@angular/common/http';
import { ClienteServiceService } from './cliente-service.service';
import { Deposito } from './deposito';

const baseUrl: String = "http://localhost:8080/conta"

@Injectable({
    providedIn: 'root'
})
export class ContaServiceService {

    private conta: Conta
    private opt:HttpParams
    constructor(private http: HttpClient, private service: ClienteServiceService) { }


    getConta(): Conta {
        return this.conta
    }

    setConta(conta: Conta) {
        this.conta = conta
    }

    criaConta(id:Number) {
        return this.http.get<Conta>(baseUrl + '/contaAdd')
    }

    listAll(){
        return this.http.get<Conta[]>(baseUrl + '/listaContas/')
    }

    depositar(deposito:Deposito){
        return this.http.put(baseUrl + "/depositar", JSON.stringify(deposito), {headers: { 'Content-Type': 'application/json' }})
    }
}
