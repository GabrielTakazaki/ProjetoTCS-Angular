import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContaServiceService } from './conta-service.service';
import { Credito } from '../class/credito';

const baseUrl = "http://localhost:8080/credito"

@Injectable({
    providedIn: 'root'
})
export class CredServService {

    constructor(private http: HttpClient, private service: ContaServiceService) { }

    pedirEmprestimo(creditoEspecial: Credito) {
        return this.http.post<String>(baseUrl + '/creditoAdd', JSON.stringify(creditoEspecial),
        { headers: { 'Content-Type': 'application/json' } })
    }
}
