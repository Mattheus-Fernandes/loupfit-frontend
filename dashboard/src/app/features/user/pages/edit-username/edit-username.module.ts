import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditUsernameRoutingModule } from './edit-username-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditUsernameComponent } from './edit-username.component';


@NgModule({
  declarations: [
    EditUsernameComponent
  ],
  imports: [
    CommonModule,
    EditUsernameRoutingModule,
    SharedModule
  ]
})
export class EditUsernameModule { }
