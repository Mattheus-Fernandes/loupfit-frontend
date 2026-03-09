import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUsersRoutingModule } from './list-users-routing.module';
import { ListUsersComponent } from './list-users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListUsersTableComponent } from './components/list-users-table/list-users-table.component';
import { RolePipe } from './pipes/role.pipe';


@NgModule({
  declarations: [
    ListUsersComponent,
    ListUsersTableComponent,
    RolePipe
  ],
  imports: [
    CommonModule,
    ListUsersRoutingModule,
    SharedModule
  ]
})
export class ListUsersModule { }
