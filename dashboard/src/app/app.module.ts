import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

registerLocaleData(localePt, "pt-BR")


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaskDirective
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-BR" },
    { provide: DEFAULT_CURRENCY_CODE, useValue: "BRL" },
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
