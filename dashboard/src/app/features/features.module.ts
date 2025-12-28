import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from 'src/app/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { FeaturesRoutingModule } from './features-routing.module';


@NgModule({
  imports: [
    FeaturesRoutingModule,
    CommonModule,
    LayoutModule,
    SharedModule
],
  declarations: [
  ],
})
export class FeaturesdModule {}
