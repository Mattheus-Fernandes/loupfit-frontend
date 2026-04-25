import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from './section-title/section-title.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CardComponent } from './card/card.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { SuccessMsgComponent } from './success-msg/success-msg.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ModalComponent } from './modal/modal.component';
import { RolePipe } from '../core/pipes/role.pipe';
import { NotFoundMsgComponent } from './not-found-msg/not-found-msg.component';
import { NgxMaskDirective } from "ngx-mask";
import { PageTitleComponent } from './page-title/page-title.component';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import { IconComponent } from './icon/icon.component';



@NgModule({
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    NgxMaskDirective
],
  declarations: [
    SectionTitleComponent,
    SpinnerComponent,
    CardComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    ErrorMsgComponent,
    SuccessMsgComponent,
    SearchBarComponent,
    ModalComponent,
    RolePipe,
    NotFoundMsgComponent,
    PageTitleComponent,
    ButtonIconComponent,
    IconComponent
  ],
  exports: [
    SectionTitleComponent, 
    SpinnerComponent,
    CardComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    ErrorMsgComponent,
    SuccessMsgComponent,
    SearchBarComponent,
    ModalComponent,
    RolePipe,
    NotFoundMsgComponent,
    PageTitleComponent,
    ButtonIconComponent,
    IconComponent
  ]
})
export class SharedModule {}
