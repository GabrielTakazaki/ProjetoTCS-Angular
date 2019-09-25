import { Component, OnInit } from '@angular/core';
import * as Inputmask from "inputmask";
import { Router } from '@angular/router';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';
import { Cliente } from 'src/app/class/cliente';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private cliente: Cliente
    constructor(private router: Router, private service: ClienteServiceService) { }
    private msgList:[]
    private msg:String

    ngOnInit() {
        this.cliente = new Cliente();
    }

    entrar() {
        this.msgList = null
        if (this.cliente.cpfCliente != "" && this.cliente.password != "") {
            this.msg = null
            this.service.verificaClient(this.cliente).subscribe((cliente) => {
                if(cliente)
                    this.preencheUsuario();
                else
                    this.msg = "Informe os dados corretamente"
            }, (erro:HttpErrorResponse)=>{
                    this.msgList = erro.error
            });            
        }else { this.msg = "Os campos devem ser preenchidos"}
    }
    preencheUsuario(){
            alert("Logado com sucesso")
            this.service.buscarCpf(this.cliente.cpfCliente).subscribe((result) => {
                localStorage.setItem('cliente',JSON.stringify(result));
                this.service.setter(result)
                this.router.navigate(['cliente'])
            })
    }


}
