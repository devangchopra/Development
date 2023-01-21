const express = require("express");
const path = require("path");
const port = 8000;
const app =express();
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));

//Middleware so that file can be read
app.use(express.urlencoded());


//Puttting up the middleware for styling
app.use(express.static("assets"));



var contactList = [
    {
        name : "Devang",
        phone : "70091551331"
    },
    {
        name : "Sheldon",
        phone : "1234567890"
    },
    {
        name : "Hello World",
        phone : "8521364790"
    }
]


app.post("/create-contact" , function(req,res){
    contactList.push(req.body);
    return res.redirect("back");
});

app.get("/" , function(req,res){
    
    return res.render("home" ,{
        title : "Contacts List",
        contact_list : contactList
    });
});



//Making Controller for delete
//String param
// app.get("/delete-contact/:phone", function(req,res){
//     //console.log(req.params);
//     //To check the request
//     let phone_to_be_deleted = req.params.phone;
// });

//Query Param
//We will go with this rn
app.get("/delete-contact", function(req,res){
    console.log(req.query);
    
    //get the query from url
    let phone_to_be_deleted = req.query.phone;

    let contactIndex = contactList.findIndex(contact => contact.phone == phone_to_be_deleted);
    //Inbulit fxn : find index
    //contact will point to each object in list one by one
    //== bcoz we arent going for strict checking

    if(contactIndex != -1){
        contactList.splice(contactIndex,1);
        //Basically moving "1" to left
    }

    return res.redirect("back");
});


app.listen(port,function(err){
    if(err){
        console.log("Error... " , err);
    }
    console.log("Working fine on port : " , port);
});
