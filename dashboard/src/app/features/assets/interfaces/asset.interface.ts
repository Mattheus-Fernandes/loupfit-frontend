export interface IAsset {
    id: string,
    name: string,
    description: string,
    quantity: number,
    costValue: number,
    placePurchase: string,
    createdBy?: string
    createdByRole?: string
}