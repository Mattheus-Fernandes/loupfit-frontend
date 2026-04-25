import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EditAsset } from "../types/edit-asset.type";

export class AssetModel {
    static createForm(): FormGroup<EditAsset> {
        return new FormGroup<EditAsset>({
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