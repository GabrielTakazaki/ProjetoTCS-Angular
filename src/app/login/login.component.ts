import { Component, OnInit } from '@angular/core';
import * as Inputmask from "inputmask";
import { Cliente } from '../cliente';
import { Router } from '@angular/router';
import { ClienteServiceService } from '../service/cliente-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  private cliente: Cliente
  private a:Cliente
  constructor(private router: Router, private service: ClienteServiceService) { }

  private msg : String
  ngOnInit() {
    Inputmask().mask(document.querySelectorAll("input"))
    this.cliente = new Cliente();
  }

  entrar() {
    if (this.cliente.cpfCliente != null && this.cliente.password != null) {
      this.service.verificaClient(this.cliente).subscribe((cliente) => {
        if (cliente){
          alert("Logado com sucesso")
          this.service.buscarCpf(this.cliente.cpfCliente).subscribe((result)=>{
            this.service.setter(result)
          })
          this.router.navigateByUrl('cliente')
          
        }
        else if(this.msg != null){
          this.msg = "Informe os dados novamente, pois estão incorretos"
        }
        else {
          this.msg = "Informe os dados corretamente"
        }
      })
    }
    else{
        this.msg = "Por favor informe o CPF e a senha"
    }

    setTimeout(()=>{    //<<<---    using ()=> syntax
        this.msg = null;
   }, 5000);
}

   
}
