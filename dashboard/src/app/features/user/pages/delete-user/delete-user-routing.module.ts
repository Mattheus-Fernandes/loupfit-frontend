import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteUserComponent } from './delete-user.component';

const routes: Routes = [
  { path: "", component: DeleteUserComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteUserRoutingModule { }
