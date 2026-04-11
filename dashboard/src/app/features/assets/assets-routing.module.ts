import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsComponent } from './assets.component';

const routes: Routes = [
  { path: "", component: AssetsComponent },
  { path: "new", loadChildren: () => import("../assets/pages/new-asset/new-asset.module").then(m => m.NewAssetModule) },
  { path: "all", loadChildren: () => import("../assets/pages/all-assets/all-assets.module").then(m => m.AllAssetsModule) },
  { path: "user-assets", loadChildren: () => import("../assets/pages/user-assets/user-assets.module").then(m => m.UserAssetsModule) }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule { }
