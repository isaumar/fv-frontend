import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../auth-services/authentication.service';
import {SessionService} from '../auth-services/session.service';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  remove = null;
  currentUser = null;

  constructor(
    protected authenticationService: AuthenticationService,
    protected sessionService: SessionService,
    protected orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.authenticationService.getUser()
      .subscribe(user => {
        this.currentUser = user;
      });

    this.orderService.loadCartData().subscribe( res => {
      console.log(res);
      this.orderService.setCartItems(res.body);
      console.log(res.body);
    });

    console.log(this.currentUser);
  }

}
