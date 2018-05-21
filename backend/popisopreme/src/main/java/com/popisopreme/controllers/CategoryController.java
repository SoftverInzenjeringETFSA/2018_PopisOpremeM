package com.popisopreme.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.popisopreme.models.Category;
import com.popisopreme.services.CategoryService;

@RestController
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	@RequestMapping("/categories")
	public List<Category> getAllCategories(){
		return categoryService.getAllCategories();
	}

	@RequestMapping(method= RequestMethod.POST, value="/createCategory")
    	public String create(@RequestBody Category cat) {
    		return categoryService.createCategory(cat);
    	}

	@RequestMapping(method= RequestMethod.DELETE, value="/deleteCategory/{d}")
	public String delete(@PathVariable String id) {
		return categoryService.deleteCategory(id);
	}
	
}

