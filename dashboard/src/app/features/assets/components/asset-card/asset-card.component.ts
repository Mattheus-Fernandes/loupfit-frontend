import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAsset } from '../../interfaces/asset.interface';
import { IActionCardAsset } from '../../interfaces/action-card-asset.interface';


@Component({
  selector: 'app-asset-card',
  templateUrl: './asset-card.component.html',
  styleUrls: ['./asset-card.component.scss']
})
export class AssetCardComponent {
  @Input() asset: IAsset = {} as IAsset
  @Output() onAction = new EventEmitter<IActionCardAsset>()

  public isHidden: boolean = false

  btnDescription() {
    this.isHidden = !this.isHidden
  }

  onClick(event: Event, type: string) {
    event.stopPropagation()
    this.onAction.emit({ type, data: this.asset })
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
