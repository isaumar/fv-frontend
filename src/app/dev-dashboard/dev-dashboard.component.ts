import { Component, OnInit } from '@angular/core';
import {Dish} from '../models/dish';
import {DISHES} from '../models/dishes';
import {Router} from '@angular/router';
import {SessionService} from '../auth-services/session.service';
import {OrderService} from '../services/order.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dev-dashboard',
  templateUrl: './dev-dashboard.component.html',
  styleUrls: ['./dev-dashboard.component.css']
})
export class DevDashboardComponent implements OnInit {

  dishes: Dish[] = DISHES;
  cartItems: Dish[] = [];

  constructor(
    protected router: Router,
    public snackBar: MatSnackBar,
    protected sessionService: SessionService,
    protected orderService: OrderService
  ) {
  }

  ngOnInit(): void {
  }

  addToCart(dishId) {
    this.cartItems = this.orderService.getCartItems();
    if (!this.cartItems.some(cartItem => cartItem.id === dishId)) {
      // this.cartItems.push(this.dishes.find( (dish) => dish.id === dishId));
      this.orderService.addCartItem(this.dishes.find( (dish) => dish.id === dishId));
      // this.orderService.setCartItemsCount(this.cartItems.length);
      console.log(this.cartItems);
      this.snackBar.open('Dish added to cart!', null, {
        duration: 5000,
        horizontalPosition: 'center',
      });
    } else {
      this.snackBar.open('Dish already in cart!', null, {
        duration: 5000,
        horizontalPosition: 'center',
      });
    }

  }
}
