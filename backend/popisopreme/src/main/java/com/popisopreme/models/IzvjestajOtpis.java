package com.popisopreme.models;

import java.math.BigInteger;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class IzvjestajOtpis {

	private String name;
	@Id
	private BigInteger barcode;
	
	
	public IzvjestajOtpis(String name, BigInteger barcode) {
		super();
		this.name = name;
		this.barcode = barcode;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public BigInteger getBarcode() {
		return barcode;
	}
	public void setBarcode(BigInteger barcode) {
		this.barcode = barcode;
	}
	
	
}
