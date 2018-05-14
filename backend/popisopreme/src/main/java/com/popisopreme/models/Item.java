package com.popisopreme.models;

import java.math.BigInteger;
import java.util.Date;


public class Item {
	
	public static BigInteger counter = BigInteger.valueOf(Long.parseLong("100000000000"));
	
	private String name;
	private BigInteger barcode;
    private String unitOfMeasurement;
    private double value;
    private String description;
    private int quantity;
    private Date dateOfPurchase;
    private Category category;
    
    
	public Item(String n, String u, double v, String desc, int q, Date d, Category c) {
		
		name = n;
		barcode = counter;
		counter = counter.add(BigInteger.valueOf(1));
		unitOfMeasurement = u;
		value = v;
		description = desc;
		quantity = q;
		dateOfPurchase = d;
		category = c;
	}
	
	public Item(Item i){
		
		name = i.getName();
		barcode = counter;
		counter = counter.add(BigInteger.valueOf(1));
		unitOfMeasurement = i.getUnitOfMeasurement();
		value = i.getValue();
		description = i.getDescription();
		quantity = i.getQuantity();
		dateOfPurchase = i.getDateOfPurchase();
		category = i.getCategory();
	}
	
	public Item() {
		
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
	public BigInteger getBarcode() {
		return barcode;
	}
	public void setBarcode(BigInteger barcode) {
		this.barcode = barcode;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int q) {
		quantity = q;
	}
	public Date getDateOfPurchase(){
		return dateOfPurchase;
	}
	public void setDateOfPurchase(Date dop){
		dateOfPurchase = dop;
	}
	public String getUnitOfMeasurement() {
		return unitOfMeasurement;
	}
	public void setUnitOfMeasurement(String unitOfMeasurement) {
		this.unitOfMeasurement = unitOfMeasurement;
	}
	public Category getCategory(){
		return category;
	}
	public void getCategory(Category category){
		this.category = category;
	}
	public double getValue() {
		return value;
	}
	public void setValue(double value) {
		this.value = value;
	}
   
}

