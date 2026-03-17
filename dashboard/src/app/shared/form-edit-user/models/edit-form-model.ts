import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EditUserForm } from "../types/edit-user-form.type";

export class EditFormModel {
  static createForm(): FormGroup<EditUserForm> {
    return new FormGroup<EditUserForm>({
      name: new FormControl({ value: "", disabled: true }, {
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
      password: new FormControl(null),
      role: new FormControl<string | null>(null, {
        validators: [Validators.required]
      })
    })
  }
}