package com.springRest.SpringRest.service;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import com.springRest.SpringRest.entities.Courses;


@Service
public class CourseServiceImplementation implements CourseService {
	
	//Storing the list temporary here
	//In future we will connect this from data-base
	List<Courses> list;
	
	public CourseServiceImplementation() {
		list = new ArrayList<>();
		list.add(new Courses(145, "Maths " , "Mathematic Course"));
		list.add(new Courses(146, "Science" , "Science Courses"));
		list.add(new Courses(147, "English" , "Englishh Course"));
				
	}
	

	@Override
	public List<Courses> getCourses() {
		// TODO Auto-generated method stub
		return list;
	}


	@Override
	public Courses getSingleCourse(long courseId) {
		
		Courses c = null;
		
		for(Courses course : list) {
			if(course.getId()==courseId) {
				c = course;
				break;
			}
		}
		
		return c;
		
	}


	@Override
	public Courses addCourse(Courses course) {
		
		list.add(course);
		return course;
	}

}
