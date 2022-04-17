import { Order } from "./order";

export class OrderDetails
{
    orderDetailsId: number=0;
    itemId: number=0;
    itemName: string='';
    itemPrice: number=0;
    quantity: number=0;
    totalPrice: number=0;
    vendorId: number=0;
    status: string='';
    comments: string='';
    order: Order | undefined;

    constructor() {};
}