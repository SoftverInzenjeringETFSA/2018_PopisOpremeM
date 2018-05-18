package com.popisopreme;

import java.util.Date;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import com.popisopreme.models.Category;
import com.popisopreme.models.Item;

import com.popisopreme.repositories.ItemRepository;

@Component
@Configuration
public class MongoDBConfig implements CommandLineRunner {


	private ItemRepository itemRepository;
	public MongoDBConfig(ItemRepository itemRepository) {
		super();
		this.itemRepository = itemRepository;
	}

	
	@Override
	public void run(String... args) throws Exception {
		
		this.itemRepository.deleteAll();
		this.itemRepository.save(new Item("prva","jedinica mjere",1.22,"opis",1,new Date(11,12,2018),new Category("kategorija","opis"), true, true));
		this.itemRepository.save(new Item("druga","jedinica mjere",1.22,"opis",2,new Date(11,12,2018),new Category("kategorija","opis"), true, true));
		this.itemRepository.save(new Item("treca","jedinica mjere",1.22,"opis",3,new Date(11,12,2018),new Category("kategorija","opis"), true, true));
		
	}
	
	

}
