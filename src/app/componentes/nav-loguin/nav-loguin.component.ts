import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteServiceService } from '../../service/cliente-service.service';
import { ContaServiceService } from '../../service/conta-service.service';
import { Conta } from '../../class/conta';
import { Cliente } from '../../class/cliente';

@Component({
    selector: 'app-nav-loguin',
    templateUrl: './nav-loguin.component.html',
    styleUrls: ['./nav-loguin.component.css']
})
export class NavLoguinComponent implements OnInit {

    constructor(private router: Router, private serviceCliente: ClienteServiceService, private serviceConta: ContaServiceService) { }

    clienteGeral:Cliente
    conta:Conta

    ngOnInit() {
        if(localStorage.getItem("cliente") === null){
            this.router.navigate(["/login"])
        }else{
            this.clienteGeral = JSON.parse(localStorage.getItem("cliente"))
        }
        this.serviceConta.criaConta(this.clienteGeral.idCliente).subscribe((result)=>{
            this.serviceConta.setConta(result)
            this.conta = this.serviceConta.getConta();
        })

        console.log(this.serviceConta.getConta())
    }

    saindo() {
        localStorage.removeItem("cliente")
        this.router.navigate(["/"])
    }

}
