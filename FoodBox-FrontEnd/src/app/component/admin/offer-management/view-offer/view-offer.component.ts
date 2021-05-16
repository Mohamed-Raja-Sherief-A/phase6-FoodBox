import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/interface/offer/offer';
import { OfferserviceService } from 'src/app/service/offer/offerservice.service';

@Component({
  selector: 'app-view-offer',
  templateUrl: './view-offer.component.html',
  styleUrls: ['./view-offer.component.css']
})
export class ViewOfferComponent implements OnInit {
  offers:Offer[]=[];
  constructor(private service:OfferserviceService) { }

  ngOnInit(): void {
    this.service.getOffers().subscribe(
      offers=>this.offers=offers
    )
  }
  refresh(){
    this.ngOnInit();
  }
  delete(id:number){
    this.service.deleteOffer(this.offers[id].oid).subscribe(
      ()=>{
        this.offers.splice(id,1);
      }
    )
  }
}
