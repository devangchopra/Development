package com.postgraes.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.swing.plaf.synth.SynthTextAreaUI;
import java.sql.ResultSet;
import java.util.List;
import java.util.Scanner;

@Repository
public class Person {

    @Autowired
    //Autowiring : Feature of spring framework in
    //which spring container inject the dependancies automatically
    //Works with objects only
    private JdbcTemplate jdbcTemplate;

    //Creating the table
    public void createTable(){

        var query = "CREATE TABLE person(id SERIAL PRIMARY KEY , " +
                "First_Name varchar(255) NOT NULL , Last_Name varchar(255) NOT NULL ," +
                "Email_id varchar(255))";
        int update = this.jdbcTemplate.update(query);
        System.out.println(update);

    }

    //Inserting the data
    public void insertData(String fname,String lname, String id){
        String q = "INSERT INTO person(first_name,last_name,email_id) values(?,?,?)";
        int  update = this.jdbcTemplate.update(q,fname,lname,id);
        System.out.println(update + "rows added");
    }

    //Inserting the data with input
    public void insertDataWitthInput(){
        Scanner s = new Scanner(System.in);

        System.out.println("Enter First Name");
        String f_name = s.nextLine();

        System.out.println("Enter Last Name");
        String l_name = s.nextLine();

        System.out.println("Enter Emai Id");
        String e_id = s.nextLine();

        String q = "INSERT INTO person(first_name,last_name,email_id) values(?,?,?)";
        int update  = this.jdbcTemplate.update(q,f_name,l_name,e_id);

        System.out.println(update + "rows added");

    }

    //Reading the data
    //To fire such quiries : we need row mapper
    //public List<T> query(String sql , RowMapper<T> rowMapper) : It will return list of objects
    //T : Object you are fetching
    //Row Mapper : Converts Result Set Object into Class object



}
