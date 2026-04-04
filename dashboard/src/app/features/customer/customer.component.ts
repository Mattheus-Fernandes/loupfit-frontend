import { Component, inject, OnInit } from '@angular/core';
import { CustomerService } from './services/customer.service';
import { CustomerResponse } from './models/types/customer-response.types';
import { take } from 'rxjs';
import { ICustomer } from './models/interfaces/customer.interface';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit{

  private _customersList: CustomerResponse = []
  private readonly _customerService = inject(CustomerService)
  public customersListFiltered: CustomerResponse = []
  public notFoundCustomer: string = ""

  ngOnInit() {
    this.getAllCustomers()
  }

  private getAllCustomers() {

    this._customerService.getAllCustomers()
      .pipe(
        take(1)
      )
      .subscribe((res: CustomerResponse) => {
        this._customersList = res
        this.customersListFiltered = this._customersList
      })
  }

  onSearch(value: string) {
    const list = this.filterUsers(value)

    if(list.length === 0) {
      this.notFoundCustomer = "Nenhum cliente encontrado"
    } 

    this.customersListFiltered = list
  }

  private filterUsers(value: string) {
    return this._customersList.filter((customer: ICustomer) => customer.name.toLowerCase().includes(value.toLowerCase()))
  }

}
