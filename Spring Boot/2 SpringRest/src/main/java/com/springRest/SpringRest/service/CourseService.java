package com.springRest.SpringRest.service;
import java.util.List;
import com.springRest.SpringRest.entities.Courses;



public interface CourseService {
	
	//Here we will create an abstract method that will return the list
	//of courses
	
	public List<Courses> getCourses();
	//We won't define it over here....loose coupling
	//Loose Coupling ...changes are easy
	//it will call its child body 
	
	public Courses getSingleCourse(long courseId);
	
	public Courses addCourse(Courses course);
}
