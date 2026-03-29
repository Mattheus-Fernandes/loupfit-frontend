import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, shareReplay } from 'rxjs';
import { OrderResponse } from '../models/types/orders-response.type';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _url = "http://localhost:8001/v1/orders"
  private orders$!: Observable<OrderResponse>

  constructor(
    private _http: HttpClient,
    private _tokenService: TokenService
  ) { }

  getAllOrders(): Observable<OrderResponse> {
    if (!this.orders$) {
      this.orders$ = this._http.get<OrderResponse>(this._url, { headers: this._tokenService.getHeaders() })
                               .pipe(delay(1000), shareReplay(1),)
    }

    return this.orders$
  }
}
