package com.springRest.SpringRest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.springRest.SpringRest.entities.Courses;

@Repository
public interface CourseDao extends JpaRepository<Courses,Long>{

}
