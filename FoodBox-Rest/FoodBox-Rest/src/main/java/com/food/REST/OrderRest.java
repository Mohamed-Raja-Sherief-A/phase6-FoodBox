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
import com.food.model.Order;

@RestController
@RequestMapping("/orders")
@CrossOrigin
public class OrderRest {
	@Autowired
	private CentralService service;
	@GetMapping("/")
	public List<Order> getOrders(){
		return service.getOrders();
	}
	@GetMapping("/{oid}")
	public Order getOrder(@PathVariable int oid) {
		return service.getOrder(oid);
	}
	
	@PostMapping("/")
	public void addOrder(@RequestBody Order order) {
		service.saveOrder(order);
	}
	
	@PutMapping("/")
	public void updateOrder(@RequestBody Order order) {
		service.updateOrder(order);
	}
	
	@DeleteMapping("/{oid}")
	public void deleteOrder(@PathVariable int oid) {
		service.deleteOrder(oid);
	}
}
