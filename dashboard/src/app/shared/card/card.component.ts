import { Component, Input } from '@angular/core';
import { ICard } from 'src/app/core/models/interfaces/card.interface';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: ICard = {} as ICard

  get redirectTo(): boolean {
    return this.card.redirectTo != null ? true : false
  }
}
