import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as Inputmask from "inputmask"

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    Inputmask().mask(document.querySelectorAll("input"));
  }

  gotoCadastroClientes() {
    this.router.navigate(['form-cliente']);
    

   }

}
