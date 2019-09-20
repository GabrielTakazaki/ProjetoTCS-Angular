import { Component, OnInit } from '@angular/core';
import { Credito } from '../credito';
import { ContaServiceService } from '../conta-service.service';
import { Router } from '@angular/router';
import { CredServService } from '../cred-serv.service';

@Component({
    selector: 'app-credito',
    templateUrl: './credito.component.html',
    styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {

    credito:Credito
    msg:String

    constructor(private serviceCredito:CredServService,private service:ContaServiceService, private router: Router) { }

    ngOnInit() {
        this.credito = new Credito()
        this.credito.idCliente = this.service.getConta().numConta
    }

    queroDinheiro(){
        this.serviceCredito.pedirEmprestimo(this.credito).subscribe((result)=>{
            this.msg = result;
        }, (erro)=>{
            console.log(erro)
        })
    }

}
