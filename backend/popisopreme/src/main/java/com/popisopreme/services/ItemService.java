package com.popisopreme.services;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.math.BigInteger;
import java.util.Arrays;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.popisopreme.models.Category;
import com.popisopreme.models.Item;

import com.popisopreme.repositories.ItemRepository;

@Service
public class ItemService {

	  private List<Item> Items=new ArrayList<>(Arrays.asList(
		new Item("prva","jedinica mjere",1.22,"opis",1,new Date(11,12,2018),new Category("kategorija","opis"), true, true),
		new Item("druga","jedinica mjere",1.22,"opis",2,new Date(11,12,2018),new Category("kategorija","opis"), true, true),
		new Item("treca","jedinica mjere",1.22,"opis",3,new Date(11,12,2018),new Category("kategorija","opis"), true, true)
			)); 
	
	
	public ItemService(ItemRepository itemRepository) {
		super();
		this.itemRepository = itemRepository;
	}

	private ItemRepository itemRepository;
				
	public List<Item> getAllItems(){
		//return Items;
		return itemRepository.findAll();
	}
			
	public String deleteItem(String br) {
		try {
		itemRepository.deleteById(new BigInteger(br));
		}
		catch(Exception e) {
			return e.getMessage();
		}
		return "Delete successful";
	}

	public String writeoff(String br) {		
		try {
			itemRepository.deleteById(new BigInteger(br));
			}
			catch(Exception e) {
				return e.getMessage();
			}
			return "Write-off successful";
	}

    public String createItem(Item item) {
    	
    	try {
	    	if(item.getQuantity() < 0) throw new Error("Neispravna količina");
	    	String s = item.getName().toLowerCase();
	    	for(int i=0; i<s.length(); i++) if(s.charAt(i) < 'a' || s.charAt(i) > 'z') throw new Error("Neispravan naziv");
	    	
	   		itemRepository.save(new Item(item));
    	}
    	catch(Exception e){
			return e.getMessage();
		}
    	return "{\"message\":\"Uspješno kreirana stavka\"}";
    }

	public String updateItem(Item item, String br) {
		try {
			if(item.getQuantity() < 0) throw new Error("Neispravna količina");
	    	String s = item.getName().toLowerCase();
	    	for(int i=0; i<s.length(); i++) if(s.charAt(i) < 'a' || s.charAt(i) > 'z') throw new Error("Neispravan naziv");
	    	itemRepository.save(item);
		}
		catch(Exception e){
			return e.getMessage();
		}
		return "Update successful";
		
	}
	
}