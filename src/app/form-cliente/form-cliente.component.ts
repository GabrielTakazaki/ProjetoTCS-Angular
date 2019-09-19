import { Component, OnInit } from '@angular/core';
import * as Inputmask from "inputmask"
import { Router } from '@angular/router';
import { ClienteServiceService } from '../cliente-service.service';
import { Cliente } from '../cliente';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-form-cliente',
    templateUrl: './form-cliente.component.html',
    styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {
    private cliente: Cliente;
    private verificaPassword;
    private msg: String;
    private CPF: String;
    constructor(private router: Router, private service: ClienteServiceService) { }

    ngOnInit() {
        Inputmask().mask(document.querySelectorAll("input"));
        this.cliente = new Cliente();
    }

    addCliente() {
        if (this.cpf(this.cliente.cpfCliente.toString())) {
            if (this.cliente.password === this.verificaPassword) {
                console.log(this.cliente)
                this.service.createClient(this.cliente).subscribe((cliente) => {
                    console.log(cliente)
                }, (error: HttpErrorResponse) => {
                    this.msg = error.error.text;
                });
            }
            else {
                this.msg = "As senhas não conferem"

            }
        }else{
            this.msg = "CPF Invalido"
        }
        setTimeout(()=>{    //<<<---    using ()=> syntax
            this.msg = null;
       }, 5000);
    }

    cpf(cpf: string): boolean {
        if (cpf == null) {
            return false;
        }
        if (cpf.length != 11) {
            return false;
        }
        if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
            return false;
        }
        let numero: number = 0;
        let caracter: string = '';
        let numeros: string = '0123456789';
        let j: number = 10;
        let somatorio: number = 0;
        let resto: number = 0;
        let digito1: number = 0;
        let digito2: number = 0;
        let cpfAux: string = '';
        cpfAux = cpf.substring(0, 9);
        for (let i: number = 0; i < 9; i++) {
            caracter = cpfAux.charAt(i);
            if (numeros.search(caracter) == -1) {
                return false;
            }
            numero = Number(caracter);
            somatorio = somatorio + (numero * j);
            j--;
        }
        resto = somatorio % 11;
        digito1 = 11 - resto;
        if (digito1 > 9) {
            digito1 = 0;
        }
        j = 11;
        somatorio = 0;
        cpfAux = cpfAux + digito1;
        for (let i: number = 0; i < 10; i++) {
            caracter = cpfAux.charAt(i);
            numero = Number(caracter);
            somatorio = somatorio + (numero * j);
            j--;
        }
        resto = somatorio % 11;
        digito2 = 11 - resto;
        if (digito2 > 9) {
            digito2 = 0;
        }
        cpfAux = cpfAux + digito2;
        if (cpf != cpfAux) {
            return false;
        }
        else {
            return true;
        }
    }

}
