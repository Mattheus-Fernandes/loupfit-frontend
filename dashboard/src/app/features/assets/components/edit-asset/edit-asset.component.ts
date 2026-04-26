import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { IAsset } from '../../interfaces/asset.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { AssetFormControls } from '../../types/asset-form-controls';
import { AssetModel } from '../../models/asset.model';
import { AssetInputs } from '../../config/asset-inputs.config';
import { isInvalid } from 'src/app/core/config/is-invalid.config';
import { toNumber } from 'src/app/core/config/to-number.config';
import { AssetService } from '../../services/asset.service';
import { HttpErrorResponse } from 'src/app/core/models/types/http-error-response.type';
import { take } from 'rxjs/operators';
import { IErroForm } from 'src/app/core/models/interfaces/errors/error-form.interface';
import { ISuccess } from 'src/app/core/models/interfaces/success.interface';

@Component({
  selector: 'app-edit-asset',
  templateUrl: './edit-asset.component.html',
  styleUrls: ['./edit-asset.component.scss']
})
export class EditAssetComponent implements OnInit {
  @Input() asset: IAsset = {} as IAsset
  @Output() closeForm = new EventEmitter<void>()
  @Output() sentForm = new EventEmitter<void>()

  private readonly _assetService = inject(AssetService)

  protected form: FormGroup<AssetFormControls> = AssetModel.createForm()
  protected inputName = AssetInputs.inputName()
  protected inputDescription = AssetInputs.inputDescription()
  protected inputQuantity = AssetInputs.inputQuantity()
  protected inputCostValue = AssetInputs.inputCostvalue()
  protected inputPlacePurchase = AssetInputs.inputPlacePurchase()

  public isInvalid = isInvalid
  public toNumber = toNumber
  public error: IErroForm = {} as IErroForm
  public success: ISuccess = {} as ISuccess

  onClose() {
    this.closeForm.emit()
  }

  ngOnInit() {
    this.form.patchValue({
      name: this.asset.name,
      description: this.asset.description,
      quantity: this.asset.quantity,
      costValue: this.asset.costValue,
      placePurchase: this.asset.placePurchase
    })
  }

  onSubmit() {
    this.error.msg = ""
    this.success.msg = ""

    const FORM_INVALID = this.form.invalid

    if (FORM_INVALID) {
      this.error = {
        msg: "Preencha todos os campos*",
        hasError: true
      }
      this.form.markAllAsTouched()
      return
    }

    const id = this.asset.id

    const payload = {
      name: this.name.value,
      description: this.description.value,
      quantity: this.toNumber(this.quantity.value),
      costValue: this.toNumber(this.costValue.value),
      placePurchase: this.placePurchase.value
    } as IAsset

    this._assetService.editAsset(id, payload)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.handlerSuccess()
          this.sentForm.emit()
          this.form.reset()
        },
        error: (err: HttpErrorResponse) => {
          this.handleError(err)
        }
      })
  }

  handleError(err: HttpErrorResponse) {
    this.error = {
      msg: err.error.msg as string,
      hasError: true
    }
  }

  handlerSuccess() {
    this.error.hasError = false

    this.success = {
      msg: "Equipamento editado com sucesso",
      subbmited: true
    }
  }

  // CONTROLS
  get name(): FormControl<string> {
    return this.form.controls.name
  }

  get description(): FormControl<string> {
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

