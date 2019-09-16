import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteServiceService } from '../service/cliente-service.service';

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
  }

  addCliente(){
    this.service.createClient(this.cliente);
  }

}
