import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsComponent } from './assets.component';

const routes: Routes = [
  { path: "", component: AssetsComponent },
  { path: "new", loadChildren: () => import("../assets/pages/new-asset/new-asset.module").then(m => m.NewAssetModule) }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule { }
