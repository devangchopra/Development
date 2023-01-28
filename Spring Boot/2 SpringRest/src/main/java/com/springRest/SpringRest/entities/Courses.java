package com.springRest.SpringRest.entities;

public class Courses {
	
	//Information for the course
	
	public Courses() {
		super();
		// TODO Auto-generated constructor stub
	}

	private long id;
	private String title;
	private String desc;
	
	//Consructor
	
	public Courses(long id,String title, String description) {
		super();
		
		this.id = id;
		this.title = title;
		this.desc = description;
	}

	@Override
	public String toString() {
		return "Courses [id=" + id + ", title=" + title + ", desc=" + desc + ", getId()=" + getId() + ", getTitle()="
				+ getTitle() + ", getDesc()=" + getDesc() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
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

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}
	
}
