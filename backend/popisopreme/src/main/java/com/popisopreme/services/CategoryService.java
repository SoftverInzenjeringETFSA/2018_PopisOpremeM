package com.popisopreme.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

import org.springframework.stereotype.Service;

import com.popisopreme.models.Category;

@Service
public class CategoryService {

	private List<Category> Categories=new ArrayList<>(Arrays.asList(
		new Category("kategorija 1","opis"),
		new Category("kategorija 2","opis"),
		new Category("kategorija 3","opis")
	)); 
				
	public List<Category> getAllCategories(){
		return Categories;
	}
			
	public void deleteCategory(String name) {
		Categories.removeIf(t -> t.getName().equals(name));
	}

    public Category createCategory(Category cat) {
    	Category c = new Category(cat);
    	Categories.add(c);
   		return c;
    }	
}