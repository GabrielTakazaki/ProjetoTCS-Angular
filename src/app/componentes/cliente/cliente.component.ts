import { Component, OnInit } from '@angular/core';
import { ClienteServiceService } from '../../service/cliente-service.service';
import { Conta } from '../../class/conta';
import { ContaServiceService } from '../../service/conta-service.service';
import { Router } from '@angular/router';
import { Cliente } from '../../class/cliente';

@Component({
    selector: 'app-cliente',
    templateUrl: './cliente.component.html',
    styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

    constructor(private router: Router, private service: ClienteServiceService, private serviceConta: ContaServiceService) { }

    clienteGeral: Cliente
    conta: Conta

    ngOnInit() {
        if(localStorage.getItem("cliente") === null){
            this.router.navigate(["/login"])
        }else{
            this.clienteGeral = JSON.parse(localStorage.getItem("cliente"))
        }
        if(localStorage.getItem("cliente") !== null)
            this.clienteGeral = JSON.parse(localStorage.getItem("cliente"))
            this.serviceConta.criaConta(this.clienteGeral.idCliente).subscribe((result) => {
                this.serviceConta.setConta(result)
                this.conta = result

        })
    }
    
    chamaInv() {
        this.router.navigate(['/investimento'])
    }

    chamaTran() {
        this.router.navigate(['/transferencia'])
    }

    chamaSal() {
        this.router.navigate(['/deposito'])
    }

    chamaEmpr() {
        this.router.navigate(['/credito'])
    }
}
