import { Component, OnInit } from '@angular/core';
import { ContaServiceService } from '../../service/conta-service.service';
import { Router } from '@angular/router';
import { Deposito } from '../../class/deposito';
import { Conta } from '../../class/conta';
import { Cliente } from '../../class/cliente';


@Component({
    selector: 'app-deposito',
    templateUrl: './deposito.component.html',
    styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

    conta: Conta
    deposito: Deposito
    clienteGeral: Cliente


    constructor(private service: ContaServiceService, private router: Router) { }


    ngOnInit() {
        setTimeout(() => {
            if (localStorage.getItem("cliente") === null) {
                this.router.navigate(["/login"])
            } else {
                this.clienteGeral = JSON.parse(localStorage.getItem("cliente"))
            }
            this.deposito = new Deposito()
            this.conta = this.service.getConta()
            this.deposito.idConta = this.conta.numConta
        }, 1); 
    }

    DepositarValor() {
        this.service.depositar(this.deposito).subscribe((result) => {
            alert("Depósito realizado com sucesso")
            window.location.reload()
        }, (erro) => {
            console.log(erro)
            console.log(this.deposito)
        })
    }
}
