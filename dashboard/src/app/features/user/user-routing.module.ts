import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: "", component: UserComponent, },
  { path: "new", loadChildren: () => import("./pages/new-user/new-user.module").then(m => m.NewUserModule) },
  { path: "list", loadChildren: () => import("./pages/list-users/list-users.module").then(m => m.ListUsersModule) },
  { path: "edit", loadChildren: () => import("./pages/edit-users/edit-users.module").then(m => m.EditUsersModule) },
  { path: "edit-permission", loadChildren: () => import("./pages/edit-permission/edit-permission.module").then(m => m.EditPermissionModule) },
  { path: "edit-username", loadChildren: () => import("./pages/edit-username/edit-username.module").then(m => m.EditUsernameModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
