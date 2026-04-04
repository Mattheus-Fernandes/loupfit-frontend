import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerCardComponent } from './compenents/customer-card/customer-card.component';
import { IconCardComponent } from './compenents/icon-card/icon-card.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { PhonePipe } from './pipes/phone.pipe';
import { GenderPipe } from './pipes/gender.pipe';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerCardComponent,
    IconCardComponent,
    CpfPipe,
    PhonePipe,
    GenderPipe
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ]
})
export class CustomerModule { }
