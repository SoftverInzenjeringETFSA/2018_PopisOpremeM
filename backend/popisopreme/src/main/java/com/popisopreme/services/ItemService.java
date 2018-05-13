package com.popisopreme.services;

import java.util.ArrayList;
import java.util.List;
import java.math.BigInteger;
import java.util.Arrays;
import org.springframework.stereotype.Service;
import com.popisopreme.models.Item;

@Service
public class ItemService {

	private List<Item> Items=new ArrayList<>(Arrays.asList(
			new Item("Item",BigInteger.valueOf(1),"jedinica mjere",1.23),
			new Item("Item",BigInteger.valueOf(2),"jedinica mjere",1.23),
			new Item("Item",BigInteger.valueOf(3),"jedinica mjere",1.23)
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