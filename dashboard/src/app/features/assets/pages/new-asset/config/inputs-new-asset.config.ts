import { IInput } from "src/app/core/models/interfaces/input.interface";

export class InputsNewAsset {
    static assetName(): IInput {
        return {
            icon: 'box_add',
            name: 'name',
            type: 'text',
            placeholder: 'Nome'
        }
    }

    static description(): IInput {
        return {
            icon: 'description',
            name: 'description',
            type: 'text',
            placeholder: 'Descrição'
        }
    }

    static quantity(): IInput {
        return {
            icon: 'deployed_code',
            name: 'quantity',
            type: 'text',
            placeholder: 'Quantidade'
        }
    }

    static costValue(): IInput {
        return {
            icon: 'request_quote',
            name: 'costValue',
            type: 'text',
            placeholder: 'Valor de custo'
        }
    }

    static placePurchase(): IInput {
        return {
            icon: 'store',
            name: 'placePurchase',
            type: 'text',
            placeholder: 'Local da compra'
        }
    }
}