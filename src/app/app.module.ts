import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import httpInterceptor from './auth-services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {BaseComponent} from './base/base.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { DevDashboardComponent } from './dev-dashboard/dev-dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {CartComponent} from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderComponent } from './cart/order/order.component';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FoodMenuComponent,
    DishDetailComponent,
    BaseComponent,
    DashboardComponent,
    VendorDashboardComponent,
    DevDashboardComponent,
    CartComponent,
    NavbarComponent,
    OrderComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatIconModule,
        MatDividerModule,
        MatButtonModule,
        MatFormFieldModule,
        MatGridListModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
        MatMenuModule,
        MatBadgeModule,
        MatTableModule,
        MatStepperModule,
        MatRadioModule
    ],
  providers: [
    httpInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
