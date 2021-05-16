import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/interface/offer/offer';
import { OfferserviceService } from 'src/app/service/offer/offerservice.service';

@Component({
  selector: 'app-shopping-carousel',
  templateUrl: './shopping-carousel.component.html',
  styleUrls: ['./shopping-carousel.component.css']
})
export class ShoppingCarouselComponent implements OnInit {
  offers:Offer[]=[];
  constructor(private service:OfferserviceService) { }

  ngOnInit(): void {
    this.service.getOffers().subscribe(
      offers=>{
        this.offers=offers;
        console.log(this.offers);
      }
    );
  }

}
