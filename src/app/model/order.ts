export class Order
{
    orderId: string='';
    customerId: number=0;
    amount: number=0;
    status: string='';
    orderDate: Date = new Date();
    comments: string='';
    prepTime: number=0;

    constructor() {};
}

