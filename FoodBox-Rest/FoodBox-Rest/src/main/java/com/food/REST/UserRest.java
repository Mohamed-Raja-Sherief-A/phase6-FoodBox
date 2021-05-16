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
import com.food.model.User;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserRest {
	@Autowired
	private CentralService service;
	@GetMapping("/")
	public List<User> getUsers(){
		return service.getUsers();
	}
	
	@GetMapping("/{username}")
	public User getUser(@PathVariable String username) {
		return service.getUser(username);
	}
	
	@PostMapping("/")
	public void addUser(@RequestBody User user) {
		 service.saveUser(user);
	}
	
	@PutMapping("/")
	public void updateUser(@RequestBody User user) {
		service.updateUser(user);
	}
	
	@DeleteMapping("/{username}")
	public void deleteUser(@PathVariable String username) {
		service.deleteUser(username);
	}
	@GetMapping("/{username}/{password}")
	public User check(@PathVariable String username,@PathVariable String password) {
		User user=service.check(username, password);
		return user;
	}
	@GetMapping("/{username}/product")
	public List<Order> getProducts(@PathVariable String username)
	{
		User user=service.getUser(username);
		return user.getOrders();
	}

}
