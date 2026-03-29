export interface IOrder {
    id: string,
    orderId: string,
    productId: number,
    productName: string,
    imageUrl: string,
    quantity: number,
    totalPrice: number,
    size: string,
    color: string,
    soldBy: string,
    paymentMethod: string
}