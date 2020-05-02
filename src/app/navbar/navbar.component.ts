import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SessionService} from '../auth-services/session.service';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(
    protected router: Router,
    protected sessionService: SessionService,
    protected orderService: OrderService
  ) {}

  ngOnInit(): void {
  }
  cartCount() {
    return this.orderService.getCartItemsCount();
  }

  logout() {
    this.orderService.saveCartData().subscribe();
    this.orderService.clearCartItems();
    this.sessionService.setToken(null);
    this.router.navigateByUrl('');
  }

}
