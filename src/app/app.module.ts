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
import { ClienteServiceService } from './cliente-service.service';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { InvestimentoComponent } from './investimento/investimento.component';
import {NgxMaskModule, IConfig} from 'ngx-mask';
import { ClienteComponent } from './cliente/cliente.component';
import { CreditoComponent } from './credito/credito.component';
import { PerfilComponent } from './perfil/perfil.component';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

const appRoutes:Routes=[
  
    {path:'', component:ContentComponent},
    {path:'cadastro', component:FormClienteComponent},
    {path:'login',component: LoginComponent},
    {path:'investimento', component: InvestimentoComponent},
    {path:'cliente', component: ClienteComponent},
    {path:'credito', component: CreditoComponent},
    {path:'perfil', component: PerfilComponent},
    {path:'transferencia', component:TransferenciaComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    FormClienteComponent,
    LoginComponent,
    TransferenciaComponent,
    InvestimentoComponent,
    ClienteComponent,
    CreditoComponent,
    PerfilComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxMaskModule.forRoot(options)
  ],
  providers: [
    ClienteServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
