import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IAsset } from '../../interfaces/asset.interface';
import { AssetService } from '../../services/asset.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-delete-asset',
  templateUrl: './delete-asset.component.html',
  styleUrls: ['./delete-asset.component.scss']
})
export class DeleteAssetComponent {
  @Input() asset: IAsset = {} as IAsset
  @Output() closeModal = new EventEmitter<void>()
  @Output() sentConfirmation = new EventEmitter<void>()

  private _assetService = inject(AssetService)

  public success: boolean = false
  public deletedAsset: IAsset = {} as IAsset


  btnCancel() {
    this.closeModal.emit()
  }

  btnConfirm() {
    const id = this.asset.id

    this._assetService.deleteAsset(id)
      .pipe(take(1))
      .subscribe((asset: IAsset) => {
        this.success = true
        this.deletedAsset = asset
        this.sentConfirmation.emit()
      })
  }
}
