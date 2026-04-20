import { FormControl } from "@angular/forms"

export type FormUserType = {
    name: FormControl<string>
    lastname: FormControl<string>
    username: FormControl<string>
    password: FormControl<string | null>
    role: FormControl< null | string>
}