import { Component, OnInit } from '@angular/core';
import * as Inputmask from "inputmask"
import { Router } from '@angular/router';
import { ClienteServiceService } from '../service/cliente-service.service';
import { Cliente } from '../cliente';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {
  private cliente: Cliente;
  constructor(private router: Router, private service:ClienteServiceService) { }
  
  ngOnInit() {
    Inputmask().mask(document.querySelectorAll("input"));
    this.cliente = new Cliente();
  }

  addCliente(){
    console.log(this.cliente)
    let msg = this.service.createClient(this.cliente).subscribe((cliente)=>{
      console.log(cliente)
    }, (error: HttpErrorResponse) => {
      alert(error.error.text);
    }).toString();

    console.log(msg)
  }
}
