import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditUsersRoutingModule } from './edit-users-routing.module';
import { EditUsersComponent } from './edit-users.component';
import { SharedModule } from "src/app/shared/shared.module";
import { TableUsersComponent } from './components/table-users/table-users.component';
import { EditUsersFormComponent } from './components/edit-users-form/edit-users-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditUsersComponent,
    TableUsersComponent,
    EditUsersFormComponent
  ],
  imports: [
    CommonModule,
    EditUsersRoutingModule,
    SharedModule,
    ReactiveFormsModule
]
})
export class EditUsersModule { }
