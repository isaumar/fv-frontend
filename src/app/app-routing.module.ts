import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BaseComponent} from './base/base.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from './auth-services/auth.guard';
import {RegisterComponent} from './register/register.component';
import {CartComponent} from './cart/cart.component';
import {VendorDashboardComponent} from './vendor-dashboard/vendor-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  }



















  // {
  //   path: '',
  //   component: HomeComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'menu',
  //   component: FoodMenuComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'detail',
  //   component: DishDetailComponent,
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
