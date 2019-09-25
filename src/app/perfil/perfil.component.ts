import { Component, OnInit } from '@angular/core';
import { ClienteServiceService } from '../cliente-service.service';
import { Router } from '@angular/router';
import { ContaServiceService } from '../conta-service.service';
import { Cliente } from '../cliente';
import { Conta } from '../conta';
import { Controladora } from '../controladora';

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
        if(localStorage.getItem("cliente") === null){
            this.router.navigate(["/login"])
        }else{
            this.clienteGeral = JSON.parse(localStorage.getItem("cliente"))
        }
    }

    saindo(){
        localStorage.removeItem("cliente")
        this.router.navigate(["/"])
    }


}
