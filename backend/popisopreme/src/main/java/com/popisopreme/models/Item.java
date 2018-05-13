package com.popisopreme.models;

import java.math.BigInteger;


public class Item {
	private String Name;
	private BigInteger barcode;
    private String unitOfMeasurement;
    private double value;
    
     
	public Item(String name, BigInteger barcode, String unitOfMeasurement, double value) {
		super();
		Name = name;
		this.barcode = barcode;
		this.unitOfMeasurement = unitOfMeasurement;
		this.value = value;
	}
	
	public Item() {
		
	}
	
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public BigInteger getBarcode() {
		return barcode;
	}
	public void setBarcode(BigInteger barcode) {
		this.barcode = barcode;
	}
	public String getUnitOfMeasurement() {
		return unitOfMeasurement;
	}
	public void setUnitOfMeasurement(String unitOfMeasurement) {
		this.unitOfMeasurement = unitOfMeasurement;
	}
	public double getValue() {
		return value;
	}
	public void setValue(double value) {
		this.value = value;
	}
    
   

	
   
}

