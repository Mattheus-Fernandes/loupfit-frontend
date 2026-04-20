import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CardUserComponent } from './components/card-user/card-user.component';
import { ActionUserComponent } from './components/action-user/action-user.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewUserComponent } from './components/new-user/new-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';

@NgModule({
  declarations: [
    UserComponent,
    ListUsersComponent,
    CardUserComponent,
    ActionUserComponent,
    FormUserComponent,
    NewUserComponent,
    DeleteUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
