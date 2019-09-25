import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Inputmask from "inputmask";
import { ClienteServiceService } from '../../service/cliente-service.service';
import { Cliente } from '../../class/cliente';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  private cliente: any;
  constructor(private router: Router,
              private service:ClienteServiceService) { }

  ngOnInit() {
    Inputmask().mask(document.querySelectorAll("input"));
  }

  addCliente(){
    this.service.createClient(this.cliente);
  }

}
