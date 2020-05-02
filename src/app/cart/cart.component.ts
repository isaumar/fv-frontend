import { Component, OnInit } from '@angular/core';
import {Dish} from '../models/dish';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Dish[] = [];
  displayedColumns: string[] = ['image', 'name', 'cost', 'options'];
  footerColumns: string[] = ['name', 'cost']
  totalCost: number;

  constructor(
    protected orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.cartItems = this.orderService.getCartItems();
  }
  removeDish(id) {
    this.orderService.removeCartItem(id);
    this.cartItems = this.orderService.getCartItems();
  }
  getTotalCost(){
    this.totalCost = this.cartItems.map(t => t.price).reduce((acc, value) => acc + value, 0);
    return this.totalCost;
  }
}
