import { Component, Input } from '@angular/core';
import { IOverviewCard } from '../../models/interfaces/overview-card.interface';

@Component({
  selector: 'app-overview-card',
  templateUrl: './overview-card.component.html',
  styleUrls: ['./overview-card.component.scss']
})
export class OverviewCardComponent {
  @Input() cardInfo: IOverviewCard = {} as IOverviewCard

  get redirectTo(): boolean {
    return this.cardInfo.redirectTo != null ? true : false
  }
}
