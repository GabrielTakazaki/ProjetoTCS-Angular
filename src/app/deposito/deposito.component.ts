import { Component, OnInit } from '@angular/core';
import { ContaServiceService } from '../conta-service.service';
import { Router } from '@angular/router';
import { Deposito } from '../deposito';
import { Conta } from '../conta';


@Component({
    selector: 'app-deposito',
    templateUrl: './deposito.component.html',
    styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

    conta:Conta
    deposito:Deposito
    constructor(private service: ContaServiceService, private router: Router) { }
    
    
    ngOnInit() {
        this.deposito = new Deposito()
        this.conta = this.service.getConta()
        this.deposito.idConta = this.conta.numConta
        
    }

    DepositarValor(){
        this.service.depositar(this.deposito).subscribe((result)=>{
            alert("Depósito realizado com sucesso")
        }, (erro)=> { console.log(erro) })
    }
}
