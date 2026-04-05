import { FormControl } from "@angular/forms"

export type NewAsset = {
    name: FormControl<string>
    description: FormControl<string>
    quantity: FormControl<number | null>
    costValue: FormControl<number | null>
    placePurchase: FormControl<string>

}