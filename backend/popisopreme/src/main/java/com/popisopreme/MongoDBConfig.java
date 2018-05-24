package com.popisopreme;

import java.math.BigInteger;
import java.util.Date;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import com.popisopreme.models.Category;
import com.popisopreme.models.Item;
import com.popisopreme.models.IzvjestajOtpis;
import com.popisopreme.models.User;
import com.popisopreme.models.Role;

import com.popisopreme.repositories.ItemRepository;
import com.popisopreme.repositories.OtpisRepository;
import com.popisopreme.repositories.UserRepository;
import com.popisopreme.repositories.CategoryRepository;

@Component
@Configuration
public class MongoDBConfig implements CommandLineRunner {


	private ItemRepository itemRepository;
	private UserRepository userRepository;
	private CategoryRepository categoryRepository;
	private OtpisRepository otpisRepository;
	
	public MongoDBConfig(ItemRepository itemRepository, UserRepository userRepository, CategoryRepository categoryRepository,OtpisRepository otpisRepository) {
		super();
		this.itemRepository = itemRepository;
		this.userRepository = userRepository;
		this.categoryRepository = categoryRepository;
		this.otpisRepository=otpisRepository;
	}

	
	@Override
	public void run(String... args) throws Exception {
		
		this.itemRepository.deleteAll();
		this.userRepository.deleteAll();
		this.categoryRepository.deleteAll();
		this.otpisRepository.deleteAll();
		Category cat = new Category("kategorija 1","opis");
		this.categoryRepository.insert(cat);
		this.otpisRepository.save(new IzvjestajOtpis("stavkaZaOptis1",BigInteger.valueOf(1000)));
		this.itemRepository.save(new Item("prva","jedinica mjere",1.22,"opis",1,new Date(11,12,2018),cat, true, true));
		this.itemRepository.save(new Item("druga","jedinica mjere",1.22,"opis",1,new Date(11,12,2018),cat, true, true));
		this.userRepository.save(new User("ime1","prezime","email","username1","password1",true,new Role("admin")));
	}

}
