package com.popisopreme;

import java.util.Date;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import com.popisopreme.models.Category;
import com.popisopreme.models.Item;
import com.popisopreme.models.User;
import com.popisopreme.models.Role;

import com.popisopreme.repositories.ItemRepository;
import com.popisopreme.repositories.UserRepository;

@Component
@Configuration
public class MongoDBConfig implements CommandLineRunner {


	private ItemRepository itemRepository;
	private UserRepository userRepository;
	
	public MongoDBConfig(ItemRepository itemRepository, UserRepository userRepository) {
		super();
		this.itemRepository = itemRepository;
		this.userRepository = userRepository;
	}

	
	@Override
	public void run(String... args) throws Exception {
		
		this.itemRepository.deleteAll();
		this.userRepository.deleteAll();
		this.itemRepository.save(new Item("prva","jedinica mjere",1.22,"opis",1,new Date(11,12,2018),new Category("kategorija","opis"), true, true));
		this.userRepository.save(new User("ime1","prezime","email","username1","password1",true,new Role("admin")));
	}

}
