import { Injectable } from '@angular/core';
import { Observable, delay, shareReplay } from 'rxjs';
import { ProductsResponse } from '../models/types/products-response';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url = "http://localhost:8001/v1/products"
  private products$!: Observable<ProductsResponse>
  private lowStockProducts$!: Observable<ProductsResponse>


  constructor(
    private _http: HttpClient,
    private _tokenService: TokenService
  ) { }

  getAllProducts(): Observable<ProductsResponse> {
    if (!this.products$) {
      this.products$ = this._http.get<ProductsResponse>(this._url, { headers: this._tokenService.getHeaders() })
                                 .pipe(shareReplay(1), delay(3000))
    }

    return this.products$
  }

  getAllProductsLowStock(): Observable<ProductsResponse> {
    if (!this.lowStockProducts$) {
      this.lowStockProducts$ = this._http.get<ProductsResponse>(`${this._url}/low-stock`, { headers: this._tokenService.getHeaders() })
                                         .pipe(delay(1000), shareReplay(1))

    }
    return this.lowStockProducts$
  }
}
