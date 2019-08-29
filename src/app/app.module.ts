import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';


import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MyService } from './my.service';
import { from } from 'rxjs';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'singin', component: RegistrationComponent },
  { path: 'index', component: IndexComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
