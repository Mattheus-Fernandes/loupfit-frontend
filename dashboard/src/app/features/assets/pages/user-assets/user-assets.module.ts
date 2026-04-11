import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAssetsRoutingModule } from './user-assets-routing.module';
import { UserAssetsComponent } from './user-assets.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AssetsModule } from "../../assets.module";


@NgModule({
  declarations: [
    UserAssetsComponent
  ],
  imports: [
    CommonModule,
    UserAssetsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    AssetsModule
]
})
export class UserAssetsModule { }
