import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Login } from "../types/login.type";

export class LoginFormModel {
    static createForm(): FormGroup<Login> {
        return new FormGroup<Login>({
            username: new FormControl("", {
                nonNullable: true,
                validators: [Validators.required]
            }),
            password: new FormControl("", {
                nonNullable: true,
                validators: [Validators.required]
            })
        })
    }
}