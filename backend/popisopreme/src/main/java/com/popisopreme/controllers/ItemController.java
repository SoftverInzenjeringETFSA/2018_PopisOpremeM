package com.popisopreme.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.popisopreme.models.Item;
import com.popisopreme.services.ItemService;

@RestController
public class ItemController {
	
	@Autowired
	private ItemService itemService;
	
	@RequestMapping("/items")
	public List<Item> getAllItems(){
		return itemService.getAllItems();
	}
	
	@RequestMapping(method= RequestMethod.PUT, value="/updateItem/{br}")
	public Item update(@RequestBody Item item,@PathVariable String br) {
		return itemService.updateItem(item,br);
	}
	
	@RequestMapping(method= RequestMethod.DELETE, value="/deleteItem/{br}")
	public void delete(@PathVariable String br) {
		itemService.deleteItem(br);
	}
	
	@RequestMapping(method= RequestMethod.DELETE, value="/write-off/{br}")
	public void writeoff(@PathVariable String br) {
		itemService.writeoff(br);
	}
	
}

