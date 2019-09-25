import { Component, OnInit } from '@angular/core';
import { Credito } from '../../class/credito';
import { ContaServiceService } from '../../service/conta-service.service';
import { Router } from '@angular/router';
import { CredServService } from '../../service/cred-serv.service';
import { Cliente } from '../../class/cliente';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-credito',
    templateUrl: './credito.component.html',
    styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {

    credito:Credito
    private msgList:[]
    clienteGeral: Cliente
    private msg:String

    constructor(private serviceCredito:CredServService,private service:ContaServiceService, private router: Router) { }

    ngOnInit() {
        setTimeout(() => {
            this.credito = new Credito()
            this.credito.idCliente = this.service.getConta().numConta
        }, 1);
    }

    queroDinheiro(){
        this.serviceCredito.pedirEmprestimo(this.credito).subscribe((result)=>{
            
        }, (erro:HttpErrorResponse)=>{
            this.msgList = erro.error
        })
    }

}
