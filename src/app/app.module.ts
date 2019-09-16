import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { HttpClient } from 'selenium-webdriver/http';
import { FormsModule } from "@angular/forms"
import { ClienteServiceService } from './service/cliente-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    FormClienteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ClienteServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
