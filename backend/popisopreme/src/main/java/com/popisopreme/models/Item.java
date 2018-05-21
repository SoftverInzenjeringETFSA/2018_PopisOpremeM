package com.popisopreme.models;

import java.math.BigInteger;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;

@Document
public class Item {
	
	public static BigInteger counter = BigInteger.valueOf(Long.parseLong("100000000000"));
	
	private String name;
	@Id
	private BigInteger barcode;
    private String unitOfMeasurement;
    private double value;
    private String description;
    private double quantity;
    private Date dateOfPurchase;
    
    @DBRef
    private Category category;
    private boolean isPresent;
    private boolean isCorrect;
    
	public Item(String n, String u, double v, String desc, double q, Date d, Category c, boolean present, boolean correct) {
		
		name = n;
		barcode = counter;
		counter = counter.add(BigInteger.valueOf(1));
		unitOfMeasurement = u;
		value = v;
		description = desc;
		quantity = q;
		dateOfPurchase = d;
		category = c;
		this.isPresent = present;
		this.isCorrect = correct;
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
		isPresent = i.getIsPresent();
		isCorrect = i.getIsCorrect();
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
	public double getQuantity() {
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
	public boolean getIsPresent() {
		return isPresent;
	}
	public void setIsPresent(boolean isPresent) {
		this.isPresent = isPresent;
	}
	public boolean getIsCorrect() {
		return isCorrect;
	}
	public void setIsCorrect(boolean isCorrect) {
		this.isCorrect = isCorrect;
	}
}

