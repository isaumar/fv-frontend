import {Component, Input, OnInit} from '@angular/core';

import {OrderService} from '../../services/order.service';
import {Dish} from '../../models/dish';
import {Order} from '../../models/order';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  inputs = {
    paymentMethod: null,
    deliveryMode: null,
    totalAmount: null
  };
  orderItems: Dish[] = this.orderService.getCartItems();
  order: Order = {
    paymentMethod: '',
    deliveryMode: '',
    totalAmount: null,
    cartItems: []
  }

  @Input()
  cartTotal: number;
  constructor(
    protected orderService: OrderService,
    protected matSnackBar: MatSnackBar ) {
  }

  ngOnInit(): void {
  }
  submit() {
    this.order.paymentMethod = this.inputs.paymentMethod;
    this.order.deliveryMode = this.inputs.deliveryMode;
    this.order.cartItems = this.orderItems;
    this.order.totalAmount = this.cartTotal;
    this.orderService.placeOrder(this.order).subscribe();
    console.log(this.cartTotal);
    console.log(this.order);
  }
}
