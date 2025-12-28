import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialRoutingModule } from './initial-routing.module';
import { InitialComponent } from './pages/initial/initial.component';
import { UiButtonComponent } from './components/ui-button/ui-button.component';

@NgModule({
  imports: [
    CommonModule,
    InitialRoutingModule
  ],
  declarations: [
    InitialComponent,
    UiButtonComponent,
  ],
})
export class InitialModule { }
