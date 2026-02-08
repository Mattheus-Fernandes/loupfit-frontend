import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginlRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginHeaderComponent } from './components/login-header/login-header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginInputComponent } from './components/login-input/login-input.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    LoginlRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    LoginHeaderComponent,
    LoginFormComponent,
    LoginInputComponent
  ],
})
export class LoginModule { }
