import { Component, inject, OnInit } from '@angular/core';
import { AssetResponse } from './types/asset-response.type';
import { AssetService } from './services/asset.service';
import { take } from 'rxjs';
import { IActionCardAsset } from './interfaces/action-card-asset.interface';
import { IAsset } from './interfaces/asset.interface';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {

  private _assetService = inject(AssetService)

  protected listUsernames: string[] = []
  protected listAssets: AssetResponse = []
  protected listAssetsFiltered: AssetResponse = []
  protected asset: IAsset = {} as IAsset

  public currentModal: string | null = null
  public loadingPage: boolean = false

  closeModal() {
    this.currentModal = null
  }

  openNewModal() {
    this.currentModal = "new"
  }

  openEditModal() {
    this.currentModal = "edit"
  }

  openDeleteModal() {
    this.currentModal = "delete"
  }

  ngOnInit() {
    this.getAllAssets()

    setTimeout(() => {
      this.loadingPage = true
    }, 1000)
  }

  getAllAssets() {
    this._assetService.getAllAssets()
      .pipe(take(1))
      .subscribe(
        (res: AssetResponse) => {
          this.listAssets = res
          this.listAssetsFiltered = this.listAssets

          const usernames = [...new Set(res.map(asset => asset.createdBy) as string[])]

          this.listUsernames = usernames
        }
      )
  }

  onAction(value: IActionCardAsset) {
    this.currentModal = value.type
    this.asset = value.data

    value.type === "edit" ? this.openEditModal() : this.openDeleteModal()
  }

  onFilter(username: string) {

    this._assetService.getAssetByUsername(username)
      .pipe(
        take(1),
      )
      .subscribe(
        (res: AssetResponse) => {
          this.listAssets = res
        }
      )
  }

  onSuccess() {
    this.getAllAssets()
  }

  get newModal(): boolean {
    return this.currentModal === "new" ? true : false
  }

  get editModal(): boolean {
    return this.currentModal === "edit" ? true : false
  }

  get deleteModal(): boolean {
    return this.currentModal === "delete" ? true : false
  }
}
