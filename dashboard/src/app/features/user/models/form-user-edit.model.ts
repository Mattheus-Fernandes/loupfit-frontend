import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FormUserType } from "../types/form-user-type.type";


export class FormEditUserModel {
  static createForm(): FormGroup<FormUserType> {
    return new FormGroup<FormUserType>({
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      lastname: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      username: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      role: new FormControl<string | null>(null, {
        nonNullable: true,
        validators: [Validators.required]
      })
    })
  }
}