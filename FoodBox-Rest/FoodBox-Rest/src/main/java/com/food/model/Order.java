package com.food.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="ordertable")
public class Order {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int oid;
@ManyToOne(cascade = CascadeType.MERGE)
@JoinColumn(name="username")
private User user;
@ManyToOne(cascade = CascadeType.MERGE)
@JoinColumn(name="pid")
private Product product;
public Order() {
	// TODO Auto-generated constructor stub
}
public Order(int oid, User user, Product product) {
	this.oid = oid;
	this.user = user;
	this.product = product;
}
public int getOid() {
	return oid;
}
public void setOid(int oid) {
	this.oid = oid;
}
public User getUser() {
	return user;
}
public void setUser(User user) {
	this.user = user;
}
public Product getProduct() {
	return product;
}
public void setProduct(Product product) {
	this.product = product;
}


}
