package com.popisopreme.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Repository;

import com.popisopreme.models.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
	
	@Nullable
	public User findByUsername(String username);
}
