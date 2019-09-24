import { Component, OnInit } from '@angular/core';
import { Investimento } from '../investimento';
import { Router } from '@angular/router';
import { InvestimentoService } from '../investimento-service';
import { ContaServiceService } from '../conta-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Erro } from '../erro';

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
    constructor(private router: Router, private serviceInv: InvestimentoService, private serviceConta: ContaServiceService) { }

    ngOnInit() {
        this.chamaInv()
    }



    criarInvestimento(tipo: String, valor: Number) {
        this.investimento.saldo = valor;
        this.investimento.conta = this.serviceConta.getConta().numConta;
        this.investimento.nomeInvestimento = tipo;
        this.serviceInv.createInvestimento(this.investimento).subscribe((investimento) => {
            this.chamaInv()
            this.invest()

        }, (error: HttpErrorResponse) => {
            this.listErro = error.error;
            this.listErro.forEach((i) => {

                alert(i.erro)
            });

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