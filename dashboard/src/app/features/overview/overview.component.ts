import { Component, OnDestroy, OnInit } from '@angular/core';
import { IOverviewCard } from './models/interfaces/overview-card.interface';
import { Subject, take, takeUntil } from 'rxjs';
import { UsersResponse } from 'src/app/core/models/types/users-response';
import { HttpErrorResponse } from 'src/app/core/models/types/http-error-response.type';
import { CustomersResponse } from 'src/app/core/models/types/clients-response.type';
import { ProductsResponse } from 'src/app/core/models/types/products-response';
import { OrderResponse } from 'src/app/core/models/types/orders-response.type';
import { IOrder } from 'src/app/core/models/interfaces/order.interface';
import { CustomerService } from 'src/app/core/services/customer.service';
import { UserService } from 'src/app/core/services/user.service';
import { ProductService } from 'src/app/core/services/product.service';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {
  customersCard: IOverviewCard = {} as IOverviewCard
  usersCard: IOverviewCard = {} as IOverviewCard
  productsCard: IOverviewCard = {} as IOverviewCard
  ordersCard: IOverviewCard = {} as IOverviewCard
  invoicingCard: IOverviewCard = {} as IOverviewCard
  lowStockCard: IOverviewCard = {} as IOverviewCard

  private destroy$ = new Subject<void>()

  constructor(
    private _customerService: CustomerService,
    private _userService: UserService,
    private _productService: ProductService,
    private _orderService: OrderService,
  ) { }

  ngOnInit() {
    this.getAllCustomer()
    this.getAllUser()
    this.getAllProducts()
    this.getAllOrders()
    this.getProductsLowStock()
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

  private getAllCustomer() {
    this._customerService.getAllCustomers()
      .pipe(
        take(1),
        takeUntil(this.destroy$))
      .subscribe({
        next: (customers: CustomersResponse) => {

          this.customersCard = {
            icon: "group",
            title: "Clientes",
            value: customers.length,
            currencyCode: false
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err)
        }
      })
  }

  private getAllUser() {
    this._userService.getAllUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (users: UsersResponse) => {
          this.usersCard = {
            icon: "person_shield",
            title: "Usuários",
            value: users.length,
            currencyCode: false
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err)
        }
      })
  }

  private getAllProducts() {
    this._productService.getAllProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (products: ProductsResponse) => {
          this.productsCard = {
            icon: "inventory",
            title: "Meus produtos",
            value: products.length,
            currencyCode: false
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err)
        }
      })
  }

  private getAllOrders() {
    this._orderService.getAllOrders()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (orders: OrderResponse) => {
          this.ordersCard = {
            icon: "calendar_today",
            title: "Total de vendas",
            value: orders.length,
            redirectTo: "",
            currencyCode: false
          }

          const inventorySum = orders.reduce((acc: number, crr: IOrder) => acc + crr.totalPrice, 0)

          this.invoicingCard = {
            icon: "price_change",
            title: "Faturamento",
            value: inventorySum,
            currencyCode: true
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err)
        }
      })
  }

  private getProductsLowStock() {
    this._productService.getAllProductsLowStock()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (products: ProductsResponse) => {
          this.lowStockCard = {
            icon: "deployed_code_alert",
            title: "Estoque baixo",
            value: products.length,
            redirectTo: "",
            currencyCode: false
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err)
        }
      })
  }
}
