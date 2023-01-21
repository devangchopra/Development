//Here we will create form and will take input from the user

const express = require("express");
const path = require("path");
const port = 8000;
const app =express();
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));


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

    return res.redirect("/practice");
    //Requests comes in .. processed and then
    //router tells to go to that URL

});

//Practice will be caught by whom ? : Controller
app.get("/practice" , function(req,res){
    return res.render("practice");    
});


app.get("/" , function(req,res){
    return res.render("home_02" ,{
        title : "Contacts List",
        //adding a key to context / locals
        contact_list : contactList
    });
});

app.listen(port,function(err){
    if(err){
        console.log("Error... " , err);
    }
    console.log("Working fine on port : " , port);
});
