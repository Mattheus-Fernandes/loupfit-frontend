import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CustomerResponse } from '../models/types/customer-response.types';
import { HttpClient } from '@angular/common/http';
import { TokenService } from 'src/app/core/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly _url = "http://localhost:8001/v1/customers"
  private readonly _http = inject(HttpClient)
  private readonly _tokenService = inject(TokenService)

  getAllCustomers(): Observable<CustomerResponse> {
    return this._http.get<CustomerResponse>(this._url, {headers: this._tokenService.getHeaders()})
      .pipe(
        map((customers: CustomerResponse) => customers.sort((a, b) => a.name.localeCompare(b.name)))
      )
  }
}
