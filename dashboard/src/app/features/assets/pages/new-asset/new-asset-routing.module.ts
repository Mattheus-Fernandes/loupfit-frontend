import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAssetComponent } from './new-asset.component';

const routes: Routes = [
  { path: "", component: NewAssetComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewAssetRoutingModule { }
