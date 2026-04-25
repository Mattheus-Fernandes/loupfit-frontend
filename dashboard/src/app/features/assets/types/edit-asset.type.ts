import { FormControl } from "@angular/forms"

export type EditAsset = {
    name: FormControl<string>,
    description: FormControl<string>,
    quantity: FormControl<number | null>,
    costValue: FormControl<number | null>,
    placePurchase: FormControl<string>
}