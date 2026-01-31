import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from './section-title/section-title.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  imports: [CommonModule],
  declarations: [
    SectionTitleComponent,
    SpinnerComponent
  ],
  exports: [
    SectionTitleComponent,
    SpinnerComponent
  ]
})
export class SharedModule {}
