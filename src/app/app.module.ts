import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ContentComponent } from './componentes/content/content.component';
import { FooterComponent } from './componentes/footer/footer.component';

import { FormClienteComponent } from './componentes/form-cliente/form-cliente.component';
import { HttpClient } from 'selenium-webdriver/http';
import { FormsModule } from "@angular/forms"
import { ClienteServiceService } from './service/cliente-service.service';
import { RouterModule, Routes } from '@angular/router';
import { TransferenciaComponent } from './componentes/transferencia/transferencia.component';
import { InvestimentoComponent } from './componentes/investimento/investimento.component';
import {NgxMaskModule, IConfig} from 'ngx-mask';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { CreditoComponent } from './componentes/credito/credito.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { DepositoComponent } from './componentes/deposito/deposito.component';
import { NavLoguinComponent } from './componentes/nav-loguin/nav-loguin.component';
import { LoginComponent } from './componentes/login/login.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

const appRoutes:Routes=[
  
    {path:'', component:ContentComponent},
    {path:'cadastro', component:FormClienteComponent},
    {path:'login',component: LoginComponent},
    {path:'investimento', component: InvestimentoComponent},
    {path:'cliente', component: ClienteComponent},
    {path:'credito', component: CreditoComponent},
    {path:'perfil', component: PerfilComponent},
    {path:'deposito', component: DepositoComponent},
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
    PerfilComponent,
    DepositoComponent,
    NavLoguinComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxMaskModule.forRoot(options),
    CollapseModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    ClienteServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
