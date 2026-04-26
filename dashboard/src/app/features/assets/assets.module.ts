import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsRoutingModule } from './assets-routing.module';
import { AssetsComponent } from './assets.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AssetsListComponent } from './components/assets-list/assets-list.component';
import { AssetCardComponent } from './components/asset-card/asset-card.component';
import { EditAssetComponent } from './components/edit-asset/edit-asset.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewAssetComponent } from './components/new-asset/new-asset.component';
import { SearchFilteredComponent } from './components/search-filtered/search-filtered.component';
import { DeleteAssetComponent } from './components/delete-asset/delete-asset.component';


@NgModule({
  declarations: [
    AssetsComponent,
    AssetsListComponent,
    AssetCardComponent,
    EditAssetComponent,
    NewAssetComponent,
    SearchFilteredComponent,
    DeleteAssetComponent
  ],
  imports: [
    CommonModule,
    AssetsRoutingModule,
    SharedModule,
    ReactiveFormsModule
],
  exports: [
    AssetsListComponent
  ]
})
export class AssetsModule { }
