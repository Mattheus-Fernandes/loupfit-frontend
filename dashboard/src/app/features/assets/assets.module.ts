import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsRoutingModule } from './assets-routing.module';
import { AssetsComponent } from './assets.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AssetsListComponent } from './components/assets-list/assets-list.component';
import { AssetCardComponent } from './components/asset-card/asset-card.component';


@NgModule({
  declarations: [
    AssetsComponent,
    AssetsListComponent,
    AssetCardComponent
  ],
  imports: [
    CommonModule,
    AssetsRoutingModule,
    SharedModule
  ],
  exports: [
    AssetsListComponent
  ]
})
export class AssetsModule { }
