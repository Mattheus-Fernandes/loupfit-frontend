import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AssetResponse } from '../../types/asset-response.type';
import { IActionCardAsset } from '../../interfaces/action-card-asset.interface';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.scss']
})
export class AssetsListComponent {
  @Input() assetsList: AssetResponse = []
  @Output() onAction = new EventEmitter<IActionCardAsset>()

  onClick(value: IActionCardAsset) {
    this.onAction.emit({ type: value.type, data: value.data })
  }
}
