import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AssetFormControls } from "../types/asset-form-controls";

export class AssetModel {
    static createForm(): FormGroup<AssetFormControls> {
        return new FormGroup<AssetFormControls>({
            name: new FormControl('', {
                nonNullable: true,
                validators: [Validators.required]
            }),
            description: new FormControl('', {
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
            placePurchase: new FormControl('', {
                nonNullable: true,
                validators: [Validators.required]
            })
        })
    }
}