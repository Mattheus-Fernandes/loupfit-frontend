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
import { FormEditUserComponent } from './form-edit-user/form-edit-user.component';
import { CardUserComponent } from './card-user/card-user.component';
import { NotFoundMsgComponent } from './not-found-msg/not-found-msg.component';



@NgModule({
  imports: [
    CommonModule, 
    RouterLink,
    ReactiveFormsModule
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
    FormEditUserComponent,
    CardUserComponent,
    NotFoundMsgComponent
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
    FormEditUserComponent,
    CardUserComponent,
    NotFoundMsgComponent
  ]
})
export class SharedModule {}
