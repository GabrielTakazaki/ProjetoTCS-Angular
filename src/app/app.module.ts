import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';

const approutes: Routes =[
  {path: 'teste', component: ContentComponent},
  {path: 'login', component: LoginComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(approutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
