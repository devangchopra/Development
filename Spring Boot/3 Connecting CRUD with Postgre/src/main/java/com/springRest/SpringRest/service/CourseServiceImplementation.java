package com.springRest.SpringRest.service;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springRest.SpringRest.dao.CourseDao;
import com.springRest.SpringRest.entities.Courses;


@Service
public class CourseServiceImplementation implements CourseService {
	
	//Storing the list temporary here
	//In future we will connect this from data-base
//	List<Courses> list;
	
	@Autowired
	private CourseDao courseDaovariable;
	
	public CourseServiceImplementation() {
//		list = new ArrayList<>();
//		list.add(new Courses(145, "Maths " , "Mathematic Course"));
//		list.add(new Courses(146, "Science" , "Science Courses"));
//		list.add(new Courses(147, "English" , "Englishh Course"));
				
	}
	

	@Override
	public List<Courses> getCourses() {
		// TODO Auto-generated method stub
		return courseDaovariable.findAll();
	}


	@Override
	public Courses getSingleCourse(long courseId) {
		
//		Courses c = null;
//		
//		for(Courses course : list) {
//			if(course.getId()==courseId) {
//				c = course;
//				break;
//			}
//		}
//		
		return courseDaovariable.getReferenceById(courseId);
		
	}


	@Override
	public Courses addCourse(Courses course) {
		
		//list.add(course);
		courseDaovariable.save(course);
		return course;
	}


	@Override
	public Courses updateCourse(Courses course) {
		// TODO Auto-generated method stub
//		list.forEach(e -> {
//			//Traversing the whole list
//			if(e.getId() == course.getId()) {
//				e.setTitle(course.getTitle());
//				e.setDesc(course.getDesc());
//			}
//		});
		courseDaovariable.save(course);
		return course;
				
	}


	@Override
	public void deleteCouse(long courseId) {
		// TODO Auto-generated method stub
		//to get the entity
		Courses obj = courseDaovariable.getReferenceById(courseId);
		courseDaovariable.delete(obj);
	}
	

}
