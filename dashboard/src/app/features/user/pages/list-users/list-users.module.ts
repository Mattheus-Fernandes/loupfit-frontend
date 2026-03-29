import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUsersRoutingModule } from './list-users-routing.module';
import { ListUsersComponent } from './list-users.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    ListUsersRoutingModule,
    SharedModule
  ]
})
export class ListUsersModule { }
