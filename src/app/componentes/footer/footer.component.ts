import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteServiceService } from '../../service/cliente-service.service';
import { ContaServiceService } from '../../service/conta-service.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    constructor(private router: Router, private serviceCliente: ClienteServiceService, private serviceConta: ContaServiceService) { }

    ngOnInit() {
        this.serviceCliente.setter(JSON.parse(localStorage.getItem("cliente")))
    }

}
