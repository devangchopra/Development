package com.springRest.SpringRest.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Courses {
	
	//Information for the course
	
	public Courses() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String title;
	private String description;
	
	//Consructor
	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Courses(long id,String title, String description) {
		super();
		
		this.id = id;
		this.title = title;
		this.description = description;
	}

	@Override
	public String toString() {
		return "Courses [id=" + id + ", title=" + title + ", desc=" + description + ", getId()=" + getId() + ", getTitle()="
				+ getTitle() + ", getDesc()=" + getDescription() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
	
	

//	public String getDesc() {
//		return description;
//	}
//
//	public void setDesc(String description) {
//		this.description = description;
//	}
	
}
