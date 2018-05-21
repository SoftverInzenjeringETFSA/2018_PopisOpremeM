package com.popisopreme.services;
import java.math.BigInteger;
import java.util.List;


import org.springframework.stereotype.Service;

import com.popisopreme.models.Item;
import com.popisopreme.repositories.ItemRepository;

@Service
public class ItemService {

	public ItemService(ItemRepository itemRepository) {
		super();
		this.itemRepository = itemRepository;
	
	}
	
	private ItemRepository itemRepository;
				
	public List<Item> getAllItems(){
		
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
    	return "Uspješno kreirana stavka";
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