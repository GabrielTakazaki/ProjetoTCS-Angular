import { Component, OnInit } from '@angular/core';
import { Credito } from '../../class/credito';
import { ContaServiceService } from '../../service/conta-service.service';
import { Router } from '@angular/router';
import { CredServService } from '../../service/cred-serv.service';
import { Cliente } from '../../class/cliente';

@Component({
    selector: 'app-credito',
    templateUrl: './credito.component.html',
    styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {

    credito:Credito
    msg:String
    clienteGeral: Cliente
    constructor(private serviceCredito:CredServService,private service:ContaServiceService, private router: Router) { }

    ngOnInit() {
        if(localStorage.getItem("cliente") === null){
            this.router.navigate(["/login"])
        }else{
            this.clienteGeral = JSON.parse(localStorage.getItem("cliente"))
        }
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
