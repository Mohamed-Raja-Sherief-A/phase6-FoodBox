package com.food.Service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.DAO.OfferDAO;
import com.food.DAO.OrderDAO;
import com.food.DAO.ProductDAO;
import com.food.DAO.UserDAO;
import com.food.model.Offer;
import com.food.model.Order;
import com.food.model.Product;
import com.food.model.User;

@Service
public class CentralService {

	@Autowired
	private UserDAO uDAO;
	@Autowired 
	private ProductDAO pDAO;
	@Autowired
	private OrderDAO oDAO;
	@Autowired
	private OfferDAO ofDAO;
	
	
	@Transactional
	public User getUser(String username) {	
		if( uDAO.findById(username).isPresent())
		{
			return uDAO.findById(username).get();
		}
		else
		{
			return null;
		}
	}
	@Transactional
	public void deleteUser(String username) {
		uDAO.deleteById(username);
	}
	@Transactional
	public void saveUser(User user) {
		uDAO.save(user);
	}
	@Transactional
	public void updateUser(User user) {
		uDAO.save(user);
	}
	@Transactional
	public User check(String username,String password) {
		return uDAO.checkCred(username, password);
	}
	@Transactional
	public List<User> getUsers(){
		return uDAO.findAll();
	}
	//Order Service
	@Transactional
	public List<Order> getOrders(){
		return oDAO.findAll();
	}
	@Transactional
	public Order getOrder(int id) {	
		return oDAO.findById(id).get();
	}
	@Transactional
	public void deleteOrder(int id) {
		oDAO.deleteById(id);
	}
	@Transactional
	public void saveOrder(Order order) {
		oDAO.save(order);
	}
	@Transactional
	public void updateOrder(Order order) {
		oDAO.save(order);
	}
	
	//Product Service
	@Transactional
	public List<Product> getProducts(){
		return pDAO.findAll();
	}
	@Transactional
	public Product getProducts(int id) {	
		return pDAO.findById(id).get();
	}
	@Transactional
	public void deleteProduct(int id) {
		pDAO.deleteById(id);
	}
	@Transactional
	public void saveProduct(Product product) {
		pDAO.save(product);
	}
	@Transactional
	public void updateProduct(Product product) {
		pDAO.save(product);
	}
	
	
	//Offer Service
	@Transactional
	public List<Offer> getOffers(){
		return ofDAO.findAll();
	}
	@Transactional
	public Offer getOffer(String offer) {
		return ofDAO.findByOffer(offer);
	}
	@Transactional
	public void deleteOffer(int id) {
		ofDAO.deleteById(id);
	}
	@Transactional
	public void saveOffer(Offer offer) {
		ofDAO.save(offer);
	}
	@Transactional
	public void updateOffer(Offer offer) {
		ofDAO.save(offer);
	}
}
