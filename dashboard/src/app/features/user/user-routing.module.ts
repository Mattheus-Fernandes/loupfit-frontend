import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: "", component: UserComponent, },
  { path: "new", loadChildren: () => import("./pages/new-user/new-user.module").then(m => m.NewUserModule) },
  { path: "list", loadChildren: () => import("./pages/list-users/list-users.module").then(m => m.ListUsersModule)},
  { path: "edit", loadChildren: () => import("./pages/edit-users/edit-users.module").then(m => m.EditUsersModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
