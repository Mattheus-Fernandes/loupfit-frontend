import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAssetsComponent } from './all-assets.component';

const routes: Routes = [
  { path: "", component: AllAssetsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllAssetsRoutingModule { }
