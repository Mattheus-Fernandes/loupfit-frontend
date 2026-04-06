import { Component, inject, OnInit } from '@angular/core';
import { AssetResponse } from '../../models/types/asset-response.type';
import { AssetService } from '../../services/asset.service';
import { take } from 'rxjs';
import { IAsset } from '../../models/interfaces/asset.interface';
import { UserService } from 'src/app/core/services/user.service';
import { IUser } from 'src/app/core/models/interfaces/user.interface';

@Component({
  selector: 'app-all-assets',
  templateUrl: './all-assets.component.html',
  styleUrls: ['./all-assets.component.scss']
})
export class AllAssetsComponent implements OnInit {

  private _assetsList: AssetResponse = []
  protected assetsListFiltered: AssetResponse = []
  protected asset: IAsset = {} as IAsset

  private readonly _assetService = inject(AssetService)
  private readonly _userService = inject(UserService)

  ngOnInit() {
    this.getAllAssets()
  }

  private getAllAssets() {
    this._assetService.getAllAssets()
      .pipe(
        take(1)
      )
      .subscribe((res: AssetResponse) => {
        this._assetsList = res
        this.assetsListFiltered = this._assetsList

        res.forEach((asset: IAsset) => {
          const username = asset.createdBy as string

          this._userService.getUserByUsername(username)
          .subscribe((res: IUser) => {
            asset.createdByRole = res.role
          })
        })
      })
  }

  onSearch(value: string) {
    this.assetsListFiltered = this._assetsList.filter((res) => res.name.toLowerCase().includes(value.toLowerCase()))
  }
}
