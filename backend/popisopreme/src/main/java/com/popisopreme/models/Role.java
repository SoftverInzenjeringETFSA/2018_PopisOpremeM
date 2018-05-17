package com.popisopreme.models;

public class Role {
    private String name;

    public Role() {
    }

    public Role(String naziv) {
    	name = naziv;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}