package com.food.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.food.model.Order;
@Repository
public interface OrderDAO extends JpaRepository<Order, Integer> {

}
