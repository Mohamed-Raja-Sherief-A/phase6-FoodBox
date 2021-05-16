import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Offer } from 'src/app/interface/offer/offer';
import { OfferserviceService } from 'src/app/service/offer/offerservice.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
  offerForm:FormGroup=new FormGroup({
    code:new FormControl('',Validators.required),
    offer:new FormControl('',Validators.required)
  });
  constructor(private service:OfferserviceService) { }

  ngOnInit(): void {
  }
  submit(){
    let offer:Offer={
      oid:+0,
      code:this.offerForm.get('code').value,
      offer:this.offerForm.get('offer').value
    }
    this.service.addOffer(offer).subscribe(
      ()=>{
        alert("Offer Added Successfully");
        this.offerForm.reset();
      }
    )
  }
}
