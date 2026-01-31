import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';


const routes: Routes = [
  
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      { path: "", redirectTo: "overview", pathMatch: "full"},
      { path: "overview", loadChildren: () => import("../../features/overview/overview.module").then(m => m.OverviewModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
