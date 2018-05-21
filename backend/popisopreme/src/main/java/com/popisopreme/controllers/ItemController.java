package com.popisopreme.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.popisopreme.models.Item;
import java.util.Date;
import com.popisopreme.services.ItemService;

import com.popisopreme.repositories.ItemRepository;

@RestController
public class ItemController {
	
	@Autowired
	private ItemService itemService;
	
	
	@RequestMapping("/items")
	public List<Item> getAllItems(){
		return itemService.getAllItems();
		
	}

	@RequestMapping(method= RequestMethod.POST, value="/createItem")
    	public String create(@RequestBody Item item) {
		
		return itemService.createItem(item);
    }
	
	@RequestMapping(method= RequestMethod.PUT, value="/updateItem/{br}")
	public String update(@RequestBody Item item,@PathVariable String br) {
		return itemService.updateItem(item,br);
	}
	
	@RequestMapping(method= RequestMethod.DELETE, value="/deleteItem/{br}")
	public String delete(@PathVariable String br) {
		return itemService.deleteItem(br);
	}
	
	@RequestMapping(method= RequestMethod.DELETE, value="/write-off/{br}")
	public String writeoff(@PathVariable String br) {
		return itemService.writeoff(br);
	}	
}
