import { Component, OnInit } from '@angular/core';
import { ClienteServiceService } from '../cliente-service.service';
import { Conta } from '../conta';
import { ContaServiceService } from '../conta-service.service';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';

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
        this.service.buscarFixed().subscribe((result)=>{
            this.service.setter(result)        
            this.serviceConta.criaConta(this.service.getter().idCliente).subscribe((result)=>{
                this.serviceConta.setConta(result)
                this.conta = this.serviceConta.getConta()
                this.clienteGeral = this.service.getter()
            }, (erro)=> console.log(erro))    
    })
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
