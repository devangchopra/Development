package com.springRest.SpringRest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springRest.SpringRest.entities.Courses;
import com.springRest.SpringRest.service.CourseService;
import com.springRest.SpringRest.service.CourseServiceImplementation;

@RestController
public class MyController {
	
//	@GetMapping("/home")
//	public String home() {
//		return "This is Home Page";
//	}
	
	//Get the courses
	
	//Interface serive ka variable
	@Autowired
	private CourseService csvariable;
	
	
	@GetMapping("/courses")
	public List<Courses> getCourses(){
		
		return this.csvariable.getCourses();
		
	}
	
	
	//to get single course
	@GetMapping("/courses/{courseId}")
	//via {} : You can get the values....else whole will become the url
	public Courses getCourse(@PathVariable String courseId) {
		
		//@PathVariable : Annonation to get the {} : Dynamic Value
		//Input will be in the form of string so we will convert it 
		//to long first
		
		return this.csvariable.getSingleCourse(Long.parseLong(courseId));
	}
	
	
	
	@PostMapping("/courses")
	public Courses addCourse(@RequestBody Courses course) {
		
		//Request Body : The object will come from the Request
		return this.csvariable.addCourse(course);
	}
	
	//Upating the course
	@PutMapping("/courses")
	public Courses updateCourse(@RequestBody Courses course) {
		return this.csvariable.updateCourse(course);
	}
}







