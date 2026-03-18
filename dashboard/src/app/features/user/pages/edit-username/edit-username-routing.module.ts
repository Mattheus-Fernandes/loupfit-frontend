import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUsernameComponent } from './edit-username.component';

const routes: Routes = [
  { path: "", component: EditUsernameComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditUsernameRoutingModule { }
