import { FormControl } from "@angular/forms"
import { HttpErrorResponse } from "src/app/core/models/types/http-error-response.type"

export interface ILoginInput {
    icon: string
    type: string
    name: string
    placeholder: string
    suffix?: string
}