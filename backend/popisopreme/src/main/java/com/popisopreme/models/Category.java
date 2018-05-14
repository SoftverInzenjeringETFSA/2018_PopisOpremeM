package com.popisopreme.models;

public class Category {
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

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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

