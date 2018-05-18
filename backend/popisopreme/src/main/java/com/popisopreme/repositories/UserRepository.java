package com.popisopreme.repositories;

import java.math.BigInteger;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.popisopreme.models.Item;

@Repository
public interface UserRepository extends MongoRepository<Item,BigInteger> {
	
}
