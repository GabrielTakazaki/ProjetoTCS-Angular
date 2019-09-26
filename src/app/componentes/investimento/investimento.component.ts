import { Component, OnInit } from '@angular/core';
import { Investimento } from '../../class/investimento';
import { Router } from '@angular/router';
import { InvestimentoService } from '../../service/investimento-service';
import { ContaServiceService } from '../../service/conta-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Erro } from '../../class/erro';
import { Cliente } from '../../class/cliente';
import { Conta } from 'src/app/class/conta';

@Component({
    selector: 'app-investimento',
    templateUrl: './investimento.component.html',
    styleUrls: ['./investimento.component.css']
})
export class InvestimentoComponent implements OnInit {
    private investimento: Investimento;

    private ipca: Number;
    private poupanca: Number;
    private cdi: Number;
    

    private msg: String
    private listInvest: Investimento[];
    private listErro: Erro[]
    
    clienteGeral: Cliente
    conta:Conta
    constructor(private router: Router, private serviceInv: InvestimentoService, private serviceConta: ContaServiceService) { }

    ngOnInit() {
        setTimeout(() => {
            this.chamaInv()
            this.conta = this.serviceConta.getConta()
        }, 1);
        
        
    }



    criarInvestimento(tipo: String, valor: Number) {
        if(this.conta.existeEmprestimo){
            this.msg = "Credito especial ativo!"
            return null
        }
        if (valor > this.conta.saldoConta) {
            this.msg = "Saldo insuficiente!"
            return null
        }
        if (valor <= 0) {
            this.msg = "Digite um valor valido"
            return null
        }
        this.investimento.saldo = valor;
        this.investimento.conta = this.serviceConta.getConta().numConta;
        this.investimento.nomeInvestimento = tipo;
        this.serviceInv.createInvestimento(this.investimento).subscribe((investimento) => {
            this.chamaInv()
            this.invest()

        }, (error: HttpErrorResponse) => {
            console.log(error)
        })

    }
    async chamaInv() {
        setTimeout(() => {
            this.investimento = new Investimento();
            this.serviceInv.listInvestimento(this.serviceConta.getConta().numConta).subscribe((result) => {
                this.listInvest = result;
                console.log(this.listInvest)

            }, (error: HttpErrorResponse) => {
            });
        }, 1);
    }

    devolverDinheiro(investimento: Investimento) {
        this.serviceInv.retornaInv(investimento).subscribe((result) => {
            console.log(result)

        }, (erro: HttpErrorResponse) => {
            console.log(erro.error)
        })
    }

    invest() {
        alert('Investimento realizado')
    }
}