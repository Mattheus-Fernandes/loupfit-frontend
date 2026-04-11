import { Component, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsersResponse } from 'src/app/core/models/types/users-response';
import { UserService } from 'src/app/core/services/user.service';
import { AssetService } from '../../services/asset.service';
import { delay, finalize, take, tap } from 'rxjs';
import { AssetResponse } from '../../models/types/asset-response.type';
import { IUser } from 'src/app/core/models/interfaces/user.interface';
import { IAsset } from '../../models/interfaces/asset.interface';

@Component({
  selector: 'app-user-assets',
  templateUrl: './user-assets.component.html',
  styleUrls: ['./user-assets.component.scss']
})
export class UserAssetsComponent implements OnInit {

  private readonly _userService = inject(UserService)
  private readonly _assetService = inject(AssetService)

  protected control = new FormControl("")
  protected listUsers: UsersResponse = []
  protected listAssets: AssetResponse = []

  public isLoading: boolean = false

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers() {
    this._userService.getAllUsers()
      .subscribe((res: UsersResponse) => this.listUsers = res)
  }

  onSearch() {
    const username = this.control.value
    this.listAssets = []

    if (!username) return

    this._assetService.getAssetByUsername(username)
      .pipe(
        take(1),
        tap(() => this.isLoading = true),
        delay(2000),
      )
      .subscribe(
        (res: AssetResponse) => {
          this.isLoading = false
          this.listAssets = res

          res.forEach((asset: IAsset) => {
            const username = asset.createdBy as string

            this._userService.getUserByUsername(username)
              .pipe(take(1))
              .subscribe((res: IUser) => asset.createdByRole = res.role)
          })
        }
      )
  }
}
