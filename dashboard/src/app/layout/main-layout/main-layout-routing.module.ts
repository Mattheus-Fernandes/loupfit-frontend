import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';


const routes: Routes = [

  {
    path: "",
    component: MainLayoutComponent,
    children: [
      { path: "", redirectTo: "user", pathMatch: "full" },
      { path: "user", loadChildren: () => import("../../features/user/user.module").then(m => m.UserModule) },
      { path: "customer", loadChildren: () => import("../../features/customer/customer.module").then(m => m.CustomerModule) },
      { path: "asset", loadChildren: () => import("../../features/assets/assets.module").then(m => m.AssetsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
