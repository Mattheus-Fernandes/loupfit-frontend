import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginlRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginHeaderComponent } from './components/login-header/login-header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    LoginlRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    LoginHeaderComponent,
    LoginFormComponent
  ],
})
export class LoginModule { }
