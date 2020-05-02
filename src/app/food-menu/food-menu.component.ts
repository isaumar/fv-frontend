import { Component, OnInit } from '@angular/core';
import { DISHES} from '../models/dishes';
import {Dish} from '../models/dish';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {
  dishes: Dish[] = DISHES;
    constructor() { }

  ngOnInit(): void {
  }

}
