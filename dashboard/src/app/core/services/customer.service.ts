import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, shareReplay } from 'rxjs';
import { CustomersResponse } from '../models/types/clients-response.type';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _url = "http://localhost:8001/v1/customer"
  private customers$!: Observable<CustomersResponse>

  constructor(
    private _http: HttpClient,
    private _tokenService: TokenService
  ) { }

  getAllCustomers(): Observable<CustomersResponse> {
    if (!this.customers$) {
      this.customers$ = this._http.get<CustomersResponse>(this._url, { headers: this._tokenService.getHeaders() })
                                  .pipe(delay(1000), shareReplay(1))
    }

    return this.customers$
  }
}
