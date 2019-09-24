import { Component, OnInit } from '@angular/core';
import { ContaServiceService } from '../conta-service.service';
import { Router } from '@angular/router';
import { Deposito } from '../deposito';


@Component({
    selector: 'app-deposito',
    templateUrl: './deposito.component.html',
    styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

    deposito:Deposito
    constructor(private service: ContaServiceService, private router: Router) { }

    ngOnInit() {
        this.deposito = new Deposito()
        this.deposito.idConta = this.service.getConta().numConta
    }

    DepositarValor(){
        this.service.depositar(this.deposito).subscribe((result)=>{
            console.log(result)
            alert('Realizado deposito')     
        }, (erro)=> { console.log(erro) })
    }

   

}
