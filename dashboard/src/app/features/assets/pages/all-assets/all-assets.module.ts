import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllAssetsRoutingModule } from './all-assets-routing.module';
import { AllAssetsComponent } from './all-assets.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AssetsModule } from '../../assets.module';


@NgModule({
  declarations: [
    AllAssetsComponent,
  ],
  imports: [
    CommonModule,
    AllAssetsRoutingModule,
    SharedModule,
    AssetsModule
  ]
})
export class AllAssetsModule { }
