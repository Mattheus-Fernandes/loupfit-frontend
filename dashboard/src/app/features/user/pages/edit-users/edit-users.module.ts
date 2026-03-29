import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditUsersRoutingModule } from './edit-users-routing.module';
import { EditUsersComponent } from './edit-users.component';
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  declarations: [
    EditUsersComponent
  ],
  imports: [
    CommonModule,
    EditUsersRoutingModule,
    SharedModule,
]
})
export class EditUsersModule { }
