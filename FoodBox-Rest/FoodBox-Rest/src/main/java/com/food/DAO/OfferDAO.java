package com.food.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.food.model.Offer;
@Repository
public interface OfferDAO extends JpaRepository<Offer, Integer> {
	@Query("select o from Offer o where o.code=?1")
	Offer findByOffer(String offer);

}
