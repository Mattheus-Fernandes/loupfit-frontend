import { Component, inject } from '@angular/core';
import { InputsNewAsset } from './config/inputs-new-asset.config';
import { FormControl, FormGroup } from '@angular/forms';
import { NewAssetForm } from './models/new-asset-form.model';
import { NewAsset } from './models/new-asset.type';
import { AssetService } from '../../services/asset.service';
import { IAsset } from '../../models/interfaces/asset.interface';
import { take } from 'rxjs';
import { HttpErrorResponse } from 'src/app/core/models/types/http-error-response.type';
import { PreviousPageService } from 'src/app/core/services/previous-page.service';

@Component({
  selector: 'app-new-asset',
  templateUrl: './new-asset.component.html',
  styleUrls: ['./new-asset.component.scss']
})
export class NewAssetComponent {

  protected readonly inputs = {
    name: InputsNewAsset.assetName(),
    description: InputsNewAsset.description(),
    quantity: InputsNewAsset.quantity(),
    costValue: InputsNewAsset.costValue(),
    placePurchase: InputsNewAsset.placePurchase()
  }
  protected readonly form: FormGroup<NewAsset> = NewAssetForm.createForm()

  private readonly _assetService = inject(AssetService)
  private readonly _previousPageService = inject(PreviousPageService)

  public error: string = ""
  public success: string = ""


  btnBackPage() {
    this._previousPageService.previousPage()
  }

  onSubmit() {
    this.error = ""
    this.success = ""

    const FORM_INVALID = this.form.invalid

    if(FORM_INVALID) {
      this.error = "Preencha todos os campos*"
      this.form.markAllAsTouched()
      return
    }

    
    const payload: IAsset = {
      name: this.name.value,
      description: this.descriptiion.value,
      quantity: this.stringToNumber(this.quantity.value),
      costValue: this.stringToNumber(this.costValue.value),
      placePurchase: this.placePurchase.value
    }

    this._assetService.registerAsset(payload)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.success = "Equipamento registrado"
          this.form.reset()
        },
        error: (err: HttpErrorResponse) => {
          this.error = err.error.msg as string
        }
      })
  }

  stringToNumber(value: number | null) {
    return parseFloat(String(value).replace(",", "."))
  }

  isInvalid(control: FormControl): boolean {
    return (control.touched && control.hasError("required"))
  }

  //CONTROLS
  get name(): FormControl<string> {
    return this.form.controls.name
  }

  get descriptiion(): FormControl<string> {
    return this.form.controls.description
  }

  get quantity(): FormControl<number | null> {
    return this.form.controls.quantity
  }

  get costValue(): FormControl<number | null> {
    return this.form.controls.costValue
  }

  get placePurchase(): FormControl<string> {
    return this.form.controls.placePurchase
  }

  
}
