package com.popisopreme.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

public class Category {
	
	@Id
	private String id;
	
	private String name;
    private String description;
    private Category parent;

	public Category(String name, String desc) {
		super();
		this.name = name;
		description = desc;
	}

	public Category() {

	}

	public Category(Category c){

		super();
		name = c.getName();
		description = c.getDescription();		
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getDescription() {
    	return description;
   	}
    public void setDescription(String desc) {
        description = desc;
    }
    public Category getParent() {
         return parent;
     }

     public void setParent(Category parent) {
         this.parent = parent;
     }
}

