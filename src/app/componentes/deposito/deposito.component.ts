import { Component, OnInit } from '@angular/core';
import { ContaServiceService } from '../../service/conta-service.service';
import { Router } from '@angular/router';
import { Deposito } from '../../class/deposito';
import { Conta } from '../../class/conta';
import { Cliente } from '../../class/cliente';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
    selector: 'app-deposito',
    templateUrl: './deposito.component.html',
    styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

    conta: Conta
    deposito: Deposito
    clienteGeral: Cliente
    private msgList:[]

    constructor(private service: ContaServiceService, private router: Router) { }


    ngOnInit() {
        setTimeout(() => {
            this.deposito = new Deposito()
            this.conta = this.service.getConta()
            this.deposito.idConta = this.conta.numConta
        }, 1); 
    }

    DepositarValor() {
        this.service.depositar(this.deposito).subscribe((result) => {
            alert("Depósito realizado com sucesso")
            this.router.navigate(['/cliente'])
        }, (erro:HttpErrorResponse) => {
            this.msgList = erro.error
        })
        setTimeout(() => {
            this.msgList = null
        }, 3000);
    }
}
