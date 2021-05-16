import { Component, OnInit } from '@angular/core';
import { Messages } from 'src/app/class/messages';

@Component({
  selector: 'app-custom-carousal',
  templateUrl: './custom-carousal.component.html',
  styleUrls: ['./custom-carousal.component.css']
})
export class CustomCarousalComponent implements OnInit {
  messages:Messages[]=[
    new Messages("Speed Delivery","To Save From Hunger"),
    new Messages("Unexpected guests ?","We got it covered"),
    new Messages("Craving For Biriyani","Try our secret recipies in blend with basmati rice"),
    new Messages("Any time / Any Day","We are just a click away to get your groceries in time"),
    new Messages("Discounts","We got you covered for each order above 1000 ")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
