import { Injectable } from '@angular/core';
import {Dish} from '../models/dish';
import {HttpClient} from '@angular/common/http';
import {CART_URL, ORDER_URL} from '../models/urls';
import {Order} from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  cartItemsCount: number;
  cartItems: Dish[] = [];
  constructor(
    public httpClient: HttpClient
  ) {}

  saveCartData() {
    return this.httpClient.post(CART_URL, this.cartItems, {
      observe: 'response'
    });

  }
  loadCartData() {
    return this.httpClient.get(CART_URL, {
      observe: 'response'
    });
  }
  setCartItems(data: any){
    this.cartItems = data;
    this.cartItemsCount = this.cartItems.length;
  }
  placeOrder(data: Order) {
    return this.httpClient.post(ORDER_URL, data, {
      observe: 'response'
    });
  }

  getCartSavedCart(){
    return this.httpClient.get(CART_URL, {
      observe: 'response'
    });
  }

  getCartItemsCount(){
    return this.cartItemsCount;
  }
  setCartItemsCount() {
    this.cartItemsCount = this.cartItems.length;
  }

  addCartItem(dish: Dish) {
    this.cartItems.push(dish);
    this.cartItemsCount = this.cartItems.length;
  }
  removeCartItem(id) {
    // this.cartItems = this.cartItems.slice(this.cartItems.findIndex(item => item.id === id), 1);
    this.cartItems = this.cartItems.filter((item, index) => {
      if (index !== this.cartItems.findIndex(v => v.id === id)) {
        return item;
      }
    });
    this.cartItemsCount = this.cartItems.length;
  }
  getCartItems() {
    return this.cartItems;
  }

  clearCartItems() {
    this.cartItems = [];
    this.cartItemsCount = null;
  }
}
