import { Vendor } from "./vendor";

export class Item
{
    itemId: number=0;
    itemName: string='';
    itemPrice: number=0;
    description: string='';
    vendor: Vendor | undefined;
    constructor() {}
}