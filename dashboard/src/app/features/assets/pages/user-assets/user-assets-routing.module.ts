import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAssetsComponent } from './user-assets.component';

const routes: Routes = [
  { path: "", component: UserAssetsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAssetsRoutingModule { }
