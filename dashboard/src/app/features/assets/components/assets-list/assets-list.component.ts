import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AssetResponse } from '../../models/types/asset-response.type';
import { IAsset } from '../../models/interfaces/asset.interface';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.scss']
})
export class AssetsListComponent {
  @Input() assetsList: AssetResponse = []
  @Output() assetSelected = new EventEmitter<IAsset>()
  @Input() userRole: string = ""

  onCardClick(asset: IAsset) {
    this.assetSelected.emit(asset)
  }
}
