import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPermissionComponent } from './edit-permission.component';

const routes: Routes = [
  {path: "", component: EditPermissionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPermissionRoutingModule { }
