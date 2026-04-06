import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAsset } from '../../models/interfaces/asset.interface';

@Component({
  selector: 'app-asset-card',
  templateUrl: './asset-card.component.html',
  styleUrls: ['./asset-card.component.scss']
})
export class AssetCardComponent {
  @Input() asset: IAsset = {} as IAsset
  @Output() cardClick = new EventEmitter<void>()

  public isHidden: boolean = false
  public icon: string = "visibility"

  onClick() {
    this.cardClick.emit()
  }

  btnDescription() {
    this.isHidden = !this.isHidden

    this.icon = this.isHidden ? "visibility_off" : "visibility"
  }

  createdByColor(role?: string) {

    switch (role) {
      case "OWNER":
        return "asset-card__createdBy--owner"

      case "ADMIN":
        return "asset-card__createdBy--admin"

      case "EDITOR":
        return "asset-card__createdBy--editor"

      case "VIEWER":
        return "asset-card__createdBy--viewer"

      default:
        return role
    }
  }
}
