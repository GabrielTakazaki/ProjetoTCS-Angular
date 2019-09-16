import { Component, OnInit } from '@angular/core';
import * as Inputmask from "inputmask";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Inputmask().mask(document.querySelectorAll("input"))
  }

}
