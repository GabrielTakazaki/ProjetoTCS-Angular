import { Component, OnInit } from '@angular/core';
import { ClienteServiceService } from '../cliente-service.service';
import { Conta } from '../conta';
import { ContaServiceService } from '../conta-service.service';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { Controladora } from '../controladora';

@Component({
    selector: 'app-cliente',
    templateUrl: './cliente.component.html',
    styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

    constructor(private router: Router, private service: ClienteServiceService, private serviceConta:ContaServiceService) { }

    clienteGeral:Cliente
    conta:Conta

    ngOnInit() {
        if(Controladora.loginSetado == false){
                this.service.buscarFixed().subscribe((result)=>{
                this.service.setter(result)
                Controladora.loginSetado = true     
                Controladora.existeCliente = true   
            }, (erro)=>{
                Controladora.existeCliente = false
            })
        }
        if (!Controladora.existeCliente) {
            this.router.navigate(['/login'])
        }
        setTimeout(() => {
            this.serviceConta.criaConta(this.service.getter().idCliente).subscribe((result)=>{
            this.serviceConta.setConta(result)
            this.conta = this.serviceConta.getConta()
            this.clienteGeral = this.service.getter()
            }, (erro)=> console.log(erro))        
        }, 1);
        }
    chamaInv(){
        this.router.navigate(['/investimento'])
    }

    chamaTran(){
        this.router.navigate(['/transferencia'])
    }

    chamaSal(){
        this.router.navigate(['/deposito'])
    }

    chamaEmpr(){
        this.router.navigate(['/credito'])
    }
    

}
