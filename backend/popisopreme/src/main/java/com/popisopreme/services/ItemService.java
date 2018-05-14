package com.popisopreme.services;

import java.util.ArrayList;
import java.util.List;
import java.math.BigInteger;
import java.util.Arrays;
import java.util.Date;

import org.springframework.stereotype.Service;

import com.popisopreme.models.Category;
import com.popisopreme.models.Item;

@Service
public class ItemService {

	private List<Item> Items=new ArrayList<>(Arrays.asList(
		new Item("prva","jedinica mjere",1.22,"opis",1,new Date(11,12,2018),new Category("kategorija","opis")),
		new Item("druga","jedinica mjere",1.22,"opis",2,new Date(11,12,2018),new Category("kategorija","opis")),
		new Item("treca","jedinica mjere",1.22,"opis",3,new Date(11,12,2018),new Category("kategorija","opis"))
			)); 
				
	public List<Item> getAllItems(){
		return Items;
	}
			
	public void deleteItem(String br) {
		Items.removeIf(t -> t.getBarcode().equals(BigInteger.valueOf(Integer.parseInt(br))));
	}

	public void writeoff(String br) {		
		Items.removeIf(t -> t.getBarcode().equals(BigInteger.valueOf(Integer.parseInt(br))));
	}

    public Item createItem(Item item) {
   		Item it = new Item(item);
   		Items.add(it);
   		return it;
    }

	public Item updateItem(Item item, String br) {
		BigInteger i=BigInteger.valueOf(Integer.parseInt(br));
		for(int x=0;x<Items.size();x++) {
			Item it=Items.get(x);
			if(it.getBarcode().equals(i)) {
				Items.set(x,item);
				break;
			}
		}
		return item;
		
	}
	
}