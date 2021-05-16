package com.food.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.food.model.Product;
@Repository
public interface ProductDAO extends JpaRepository<Product, Integer> {

}
