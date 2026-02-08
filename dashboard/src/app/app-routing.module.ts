import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "initial", pathMatch: "full" },
  { path: "initial", loadChildren: () => import("./features/initial/initial.module").then(m => m.InitialModule) },
  { path: "login", loadChildren: () => import("./features/login/login.module").then(m => m.LoginModule) },
  { path: "dashboard", loadChildren: () => import("./layout/main-layout/main-layout.module").then(m => m.MainLayoutModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
