import {Dish} from './dish';

export interface Order {
    paymentMethod: string;
    deliveryMode: string;
    cartItems: Dish[];
    totalAmount: number;
}
