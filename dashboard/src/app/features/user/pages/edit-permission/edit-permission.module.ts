import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPermissionRoutingModule } from './edit-permission-routing.module';
import { EditPermissionComponent } from './edit-permission.component';
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  declarations: [
    EditPermissionComponent,
  ],
  imports: [
    CommonModule,
    EditPermissionRoutingModule,
    SharedModule
]
})
export class EditPermissionModule { }
