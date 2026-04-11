import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from 'src/app/core/services/token.service';
import { delay, map, Observable } from 'rxjs';
import { IAsset } from '../models/interfaces/asset.interface';
import { AssetResponse } from '../models/types/asset-response.type';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private readonly _url = "http://localhost:8001/v1/assets"
  private readonly _http = inject(HttpClient)
  private readonly _tokenService = inject(TokenService)

  registerAsset(payload: IAsset): Observable<IAsset> {
    return this._http.post<IAsset>(this._url, payload, { headers: this._tokenService.getHeaders() })
  }

  getAllAssets(): Observable<AssetResponse> {
    return this._http.get<AssetResponse>(this._url, {headers: this._tokenService.getHeaders()}) 
            .pipe(
              map((assets) => assets.sort((a, b) => a.name.localeCompare(b.name))),
              delay(1000)
            )
  }

  getAssetByUsername(username: string): Observable<AssetResponse> {
    return this._http.get<AssetResponse>(`${this._url}/by-username`, { headers: this._tokenService.getHeaders(), params: { username } })
  }

}
