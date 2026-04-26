import { FormControl } from "@angular/forms";

export const isInvalid = (control: FormControl): boolean => {
    return control.touched && control.hasError("required")
}