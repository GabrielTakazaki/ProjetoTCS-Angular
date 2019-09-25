import { Component, OnInit } from '@angular/core';
import * as Inputmask from "inputmask";
import { Router } from '@angular/router';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';
import { Cliente } from 'src/app/class/cliente';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    [x: string]: any;


    private logado:any
    private cliente: Cliente
    private a: Cliente
    constructor(private router: Router, private service: ClienteServiceService) { }
    private msg: String
    ngOnInit() {
        Inputmask().mask(document.querySelectorAll("input"))
        this.cliente = new Cliente();
    }

    entrar() {
        if (this.cliente.cpfCliente != "" && this.cliente.password != "") {
            this.service.verificaClient(this.cliente).subscribe((cliente) => {
                this.logado = cliente;
                this.preencheUsuario();
            });
            
        }
        else { 
            this.msg = "Por favor informe o CPF e a senha"
        }

        setTimeout(() => {    
            this.msg = null;
        }, 5000);
    }
    preencheUsuario(){
        if (this.logado) {
            alert("Logado com sucesso")
            this.service.buscarCpf(this.cliente.cpfCliente).subscribe((result) => {
                localStorage.setItem('cliente',JSON.stringify(result));
                this.service.setter(result)
                this.router.navigate(['cliente'])
            })

        }
        else if (this.msg != null) {
            this.msg = "Informe os dados novamente, pois estão incorretos"
        }
        else {
            this.msg = "Informe os dados corretamente"
        }
    }


}
