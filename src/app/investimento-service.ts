import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Investimento } from './investimento';

const baseUrl: String = "http://localhost:8080"

@Injectable({
    providedIn: 'root'
})

export class InvestimentoService {
    
    constructor(private http:HttpClient) {}
    private options:HttpParams;
    private investimento:Investimento;

    getter():Investimento {
        return this.investimento;
    }
    setter(investimento:Investimento) {
        this.investimento = investimento;
    }
    createInvestimento(investimento:Investimento) {
        return this.http.post(baseUrl + '/investimento/investimentoAdd',JSON.stringify(investimento),
            {headers:{'Content-Type':'application/json'}} );
    }
    listInvestimento(numeroConta:Number) {
        this.options = new HttpParams();
        this.options = this.options.append('numeroConta', numeroConta.toString())
        const param = { params: this.options }
        return this.http.get<Investimento[]>(baseUrl + "/investimento/contaInvestimento", param)
    }
}
