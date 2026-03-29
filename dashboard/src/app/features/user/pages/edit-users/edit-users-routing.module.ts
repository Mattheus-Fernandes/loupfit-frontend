import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUsersComponent } from './edit-users.component';

const routes: Routes = [
  {path: "", component: EditUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditUsersRoutingModule { }
