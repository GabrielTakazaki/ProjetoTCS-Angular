import { Component, OnInit } from '@angular/core';
import * as Inputmask from "inputmask"

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Inputmask().mask(document.querySelectorAll("input"));
  }

}
