import { NgModule } from '@angular/core';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { LayoutModule } from '../layout.module';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RedirectComponent } from './components/redirect/redirect.component';

@NgModule({
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    LayoutModule
],
  declarations: [
    MainLayoutComponent,
    SideBarComponent,
    RedirectComponent
  ],
})
export class MainLayoutModule {}
