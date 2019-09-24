import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteServiceService } from '../cliente-service.service';
import { ContaServiceService } from '../conta-service.service';
import { Conta } from '../conta';
import { Cliente } from '../cliente';

@Component({
    selector: 'app-nav-loguin',
    templateUrl: './nav-loguin.component.html',
    styleUrls: ['./nav-loguin.component.css']
})
export class NavLoguinComponent implements OnInit {

    constructor(private router: Router, private serviceCliente: ClienteServiceService, private serviceConta: ContaServiceService) { }

    clienteGeral:Cliente = JSON.parse(localStorage.getItem("cliente"))
    conta:Conta

    ngOnInit() {
        if(this.serviceConta.getConta() === undefined){
            this.serviceConta.criaConta(this.clienteGeral.idCliente).subscribe((result)=>{
                this.serviceConta.setConta(result)
                this.conta = this.serviceConta.getConta();
            })
        }else this.conta = this.serviceConta.getConta()
    }

    saindo() {
        localStorage.removeItem("cliente")
        localStorage.removeItem("conta")
        this.router.navigate(["/"])
    }

}
