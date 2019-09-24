import { Component, OnInit } from '@angular/core';
import { ClienteServiceService } from '../cliente-service.service';
import { Conta } from '../conta';
import { ContaServiceService } from '../conta-service.service';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { Controladora } from '../controladora';
import { isNull } from '@angular/compiler/src/output/output_ast';

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
