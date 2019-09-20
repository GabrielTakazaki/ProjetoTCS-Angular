import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../transferencia';
import { TransfServService } from '../transf-serv.service';
import { Router } from '@angular/router';
import { ContaServiceService } from '../conta-service.service';
import { Conta } from '../conta';

@Component({
    selector: 'app-transferencia',
    templateUrl: './transferencia.component.html',
    styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

    private transf: Transferencia
    private msg:String
    private contaAtual:Conta
    private contas:Conta[]
    private numExiste:Boolean = false
    private transList:Transferencia[]

    constructor(private serviceTrans:TransfServService,private router: Router, private serviceConta:ContaServiceService) { }
    
    ngOnInit() {
        this.transf = new Transferencia()
        this.transList = new Array<Transferencia>();
        this.serviceTrans.listTransf().subscribe((result)=>{
            result.forEach((item)=>{
                this.transList.push(item)
            })
            console.log(this.transList)
        })
        this.contaAtual = this.serviceConta.getConta()
    }

    transferir(){
        this.serviceConta.listAll().subscribe((result)=>{
            this.contas = result
            if(this.validaConta()){
                this.fazTransferencia()
            }
        })
    }

    validaConta() {
        this.contas.forEach((value)=>{
            if (value.numConta == this.transf.idCreditoDTO) {
                this.numExiste = true
            }
        })
        if(!this.numExiste){
            return false
        }else{
            return true
        }

    }

    fazTransferencia() {
        this.transf.idDebitoDTO = this.serviceConta.getConta().numConta
        this.serviceTrans.createTransf(this.transf).subscribe((result)=>{
            this.transList.push(result)
        })
    }

}
