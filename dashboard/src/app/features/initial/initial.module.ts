import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialRoutingModule } from './initial-routing.module';
import { InitialComponent } from './initial.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    InitialRoutingModule,
    SharedModule
  ],
  declarations: [
    InitialComponent
  ],
})
export class InitialModule { }
