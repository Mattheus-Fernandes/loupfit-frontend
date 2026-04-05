import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NewAsset } from "./new-asset.type";

export class NewAssetForm {
    static createForm(): FormGroup<NewAsset> {
        return new FormGroup<NewAsset>({
            name: new FormControl("", {
                nonNullable: true,
                validators: [Validators.required]
            }),
            description: new FormControl("", {
                nonNullable: true,
                validators: [Validators.required]
            }),
            quantity: new FormControl(null, {
                nonNullable: true,
                validators: [Validators.required]
            }),
            costValue: new FormControl(null, {
                nonNullable: true,
                validators: [Validators.required]
            }),
            placePurchase: new FormControl("", {
                nonNullable: true,
                validators: [Validators.required]
            })
        })
    }
}