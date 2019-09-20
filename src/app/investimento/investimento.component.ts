import { Component, OnInit } from '@angular/core';
import { Investimento } from '../investimento';
import { Router } from '@angular/router';
import { InvestimentoService } from '../investimento-service';
import { ContaServiceService } from '../conta-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-investimento',
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.css']
})
export class InvestimentoComponent implements OnInit {
  private investimento: Investimento;
  private msg: String
  private listInvest: Investimento[];
  constructor(private router: Router, private serviceInv: InvestimentoService, private serviceConta: ContaServiceService) { }

  ngOnInit() {
    if (this.serviceConta.getConta() === undefined) {
      this.investimento = new Investimento();
      console.log('ggggggggg')
    }

    else {
      this.investimento = new Investimento();
      this.serviceInv.listInvestimento(this.serviceConta.getConta().numConta).subscribe((result)=>{
        this.listInvest = result;
      } ,(error: HttpErrorResponse) => {
        this.msg = error.error.text;
      });
    }
    console.log(this.investimento);
  }



  criarInvestimento(tipo: String) {
    this.investimento.conta = this.serviceConta.getConta();
    this.investimento.nomeInvestimento = tipo;

    this.serviceInv.createInvestimento(this.investimento).subscribe((investimento) => {
    }, (error: HttpErrorResponse) => {
      this.msg = error.error.text;
    });
  }

}
