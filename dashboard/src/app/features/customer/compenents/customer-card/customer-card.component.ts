import { Component, Input } from '@angular/core';
import { ICustomer } from '../../models/interfaces/customer.interface';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent {
  @Input() customer: ICustomer = {} as ICustomer

  get abbreviation(): string {
    return `${this.customer.name.at(0)}${this.customer.lastname.at(0)}`
  }

  colorGender(): string {
    return this.customer.gender === "M" ? "customer-card__gender--male" : "customer-card__gender--female"
  }
}
