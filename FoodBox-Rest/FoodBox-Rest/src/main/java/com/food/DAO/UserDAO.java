package com.food.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.food.model.User;

@Repository
public interface UserDAO extends JpaRepository<User, String> {
    @Query("Select u from User u where u.username=?1 and u.password=?2")
	public User checkCred(String username,String password);
}
