import { Component, OnInit } from '@angular/core';
import * as Inputmask from "inputmask"
import { Router } from '@angular/router';
import { ClienteServiceService } from '../../service/cliente-service.service';
import { Cliente } from '../../class/cliente';
import { HttpErrorResponse } from '@angular/common/http';
import { Erro } from '../../class/erro';

@Component({
    selector: 'app-form-cliente',
    templateUrl: './form-cliente.component.html',
    styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {
    private cliente: Cliente;
    private verificaPassword;
    private msgList:[]
    msg: String
    constructor(private router: Router, private service: ClienteServiceService) { }

    ngOnInit() {
        this.cliente = new Cliente();
    }

    addCliente() {
        this.msgList = null
        if (this.cliente.password === this.verificaPassword) {
            this.msg = null
            this.service.createClient(this.cliente).subscribe((cliente) => {
                this.router.navigate(['login'])
            }, (error: HttpErrorResponse) => {
                this.msgList = error.error
                console.log(this.msgList)
            });
        }
        else {
            this.msg = "As senhas não conferem"
        }
    }
}
