import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ClienteServiceService } from './cliente-service.service';
import { Transferencia } from './transferencia';
import { ContaServiceService } from './conta-service.service';

const baseUrl = "http://localhost:8080/transferencia"

@Injectable({
    providedIn: 'root'
})
export class TransfServService {
    
    private opt:HttpParams
    private transf:Transferencia
    
    getTransf():Transferencia{
        return this.transf
    }
    setTransf(transferenciaSetter:Transferencia){
        this.transf = transferenciaSetter
    }

    constructor(private http: HttpClient, private service: ContaServiceService) { }

    createTransf(trasferencia:Transferencia){
        return this.http.post<Transferencia>(baseUrl + '/addTransf', JSON.stringify(trasferencia),
            { headers: { 'Content-Type': 'application/json' } });
    }

    listTransf(){
        this.opt = new HttpParams();
        this.opt = this.opt.append('id', this.service.getConta().numConta.toString())
        const param = { params: this.opt }
        return this.http.get<Transferencia[]>(baseUrl + "/listAllTransf", param)
        
    }

}
