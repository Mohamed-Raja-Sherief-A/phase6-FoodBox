package com.food.REST;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.food.Service.CentralService;
import com.food.model.Offer;

@RestController
@RequestMapping("/offers")
@CrossOrigin
public class OfferRest {

	@Autowired
	private CentralService service;
	@GetMapping("/")
	public List<Offer> getOffers(){
		return service.getOffers();
	}
	@GetMapping("/{code}")
	public Offer getOffer(@PathVariable String code) {
		return service.getOffer(code);
	}
	@DeleteMapping("/{id}")
	public void deleteOffer(@PathVariable int id) {
		service.deleteOffer(id);
	}
	@PostMapping("/")
	public void postOffer(@RequestBody Offer offer) {
		service.saveOffer(offer);
	}
	@PutMapping("/")
	public void updateOffer(@RequestBody Offer offer) {
		service.updateOffer(offer);
	}
	
}
