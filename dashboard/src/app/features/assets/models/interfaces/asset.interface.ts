export interface IAsset {
    name: string,
    description: string,
    quantity: number,
    costValue: number,
    placePurchase: string,
    createdBy?: string
    createdByRole?: string
}