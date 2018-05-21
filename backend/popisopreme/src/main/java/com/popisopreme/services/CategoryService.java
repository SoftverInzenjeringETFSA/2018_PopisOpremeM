package com.popisopreme.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

import org.springframework.stereotype.Service;
import com.popisopreme.repositories.CategoryRepository;
import com.popisopreme.repositories.UserRepository;
import com.popisopreme.models.Category;

@Service
public class CategoryService {
	
	public CategoryService(CategoryRepository categoryRepository) {
		super();
		this.categoryRepository = categoryRepository;
	}

	private CategoryRepository categoryRepository;
	
	public List<Category> getAllCategories(){
		return categoryRepository.findAll();
	}
			
	public String deleteCategory(String id) {
		try {
			categoryRepository.deleteById(id);
			}
			catch(Exception e) {
				return e.getMessage();
			}
			return "Delete successful";
	}

    public String createCategory(Category cat) {
    	
    	try {
    	categoryRepository.save(new Category(cat));
    	}
   		catch(Exception e){
			return e.getMessage();
		}
    	return "{\"message\":\"Uspješno kreirana kategorija\"}";
    }	
}