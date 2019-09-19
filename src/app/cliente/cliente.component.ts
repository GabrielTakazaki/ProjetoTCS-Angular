import { Component, OnInit } from '@angular/core';
import { ClienteServiceService } from '../service/cliente-service.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  
  constructor(private service:ClienteServiceService) { }

  ngOnInit() {
  }

}
