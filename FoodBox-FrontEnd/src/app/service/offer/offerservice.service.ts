import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from 'src/app/interface/offer/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferserviceService {
  rootUrl:string="http://localhost:3500/offers/";
  constructor(private http:HttpClient) { }
  addOffer(offer:Offer):Observable<Offer>{
    return this.http.post<Offer>(this.rootUrl,offer);
  }
  getOffers():Observable<Offer[]>{
    return this.http.get<Offer[]>(this.rootUrl);
  }
  deleteOffer(id:number):Observable<Offer>{
    return this.http.delete<Offer>(`${this.rootUrl}${id}`)
  }
  getOffer(code:string):Observable<Offer>{
    return this.http.get<Offer>(`${this.rootUrl}${code}`)
  }
}
