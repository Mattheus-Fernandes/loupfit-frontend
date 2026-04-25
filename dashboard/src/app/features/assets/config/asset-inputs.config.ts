import { IInput } from "src/app/core/models/interfaces/input.interface";

export class AssetInputs {
    static inputName(): IInput {
        return {
            icon: 'box_add',
            name: 'name',
            type: 'text',
            placeholder: 'Nome'
        }
    }

    static inputDescription(): IInput {
        return {
            icon: 'description',
            name: 'description',
            type: 'text',
            placeholder: 'Descrição'
        }
    }

    static inputQuantity(): IInput {
        return {
            icon: 'deployed_code',
            name: 'quantity',
            type: 'text',
            placeholder: 'Quantidade'
        }
    }

    static inputCostvalue(): IInput {
        return {
            icon: 'request_quote',
            name: 'costValue',
            type: 'text',
            placeholder: 'Valor de custo'
        }
    }

    static inputPlacePurchase(): IInput {
        return {
            icon: 'store',
            name: 'placePurchase',
            type: 'text',
            placeholder: 'Local da compra'
        }
    }
}