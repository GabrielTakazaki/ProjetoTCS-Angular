import { Component, OnInit } from '@angular/core';
import { Conta } from '../../class/conta';
import { Router } from '@angular/router';
import { Cliente } from '../../class/cliente';

@Component({
    selector: 'app-cliente',
    templateUrl: './cliente.component.html',
    styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

    constructor(private router: Router) { }
    ngOnInit() {
       
    }
    
    chamaInv() {
        this.router.navigate(['/investimento'])
    }

    chamaTran() {
        this.router.navigate(['/transferencia'])
    }

    chamaSal() {
        this.router.navigate(['/deposito'])
    }

    chamaEmpr() {
        this.router.navigate(['/credito'])
    }
}
