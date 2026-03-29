import { FormControl } from "@angular/forms"

export type Login = {
    username: FormControl<string>
    password: FormControl<string>
}