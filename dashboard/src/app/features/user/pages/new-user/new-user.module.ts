import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewUserRoutingModule } from './new-user-routing.module';
import { NewUserComponent } from './new-user.component';
import { NewUserFormComponent } from './components/new-user-form/new-user-form.component';
import { SharedModule } from "src/app/shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewUserComponent,
    NewUserFormComponent,
  ],
  imports: [
    CommonModule,
    NewUserRoutingModule,
    SharedModule,
    ReactiveFormsModule
]
})
export class NewUserModule { }
