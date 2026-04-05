import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAssetRoutingModule } from './new-asset-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewAssetComponent } from './new-asset.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewAssetComponent
  ],
  imports: [
    CommonModule,
    NewAssetRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class NewAssetModule { }
