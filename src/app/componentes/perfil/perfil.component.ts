import { Component, OnInit } from '@angular/core';
import { ClienteServiceService } from '../../service/cliente-service.service';
import { Router } from '@angular/router';
import { ContaServiceService } from '../../service/conta-service.service';
import { Cliente } from '../../class/cliente';
import { Conta } from '../../class/conta';

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

    constructor(private router: Router, private service: ClienteServiceService, private serviceConta: ContaServiceService) { }

    clienteGeral: Cliente
    conta: Conta

    ngOnInit() {
        setTimeout(() => {
            if (localStorage.getItem("cliente") === null) {
                this.router.navigate(["/login"])
            } else {
                this.clienteGeral = JSON.parse(localStorage.getItem("cliente"))
                this.conta = this.serviceConta.getConta()
            }
        }, 1);
    }

    saindo() {
        localStorage.removeItem("cliente")
        this.router.navigate(["/"])
    }


}
