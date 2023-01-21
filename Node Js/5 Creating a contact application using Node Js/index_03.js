const express = require("express");
const path = require("path");
const port = 8000;
const app =express();
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));

//Express has its own parser
app.use(express.urlencoded());



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
    
    // To check whether we are getting the object
    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.phone);

    //Adding to the list
    // contactList.push({
    //     name : req.body.name,
    //     phone : req.body.phone
    // });

    //Reducing the lines of code :
    contactList.push(req.body);

    return res.redirect("/");
    //Shortcut : return res.redirect("back"); 


    
    //redirecting to the home page itself

});


app.get("/practice" , function(req,res){
    return res.render("practice");    
});


app.get("/" , function(req,res){
    return res.render("home_02" ,{
        title : "Contacts List",
        contact_list : contactList
    });
});

app.listen(port,function(err){
    if(err){
        console.log("Error... " , err);
    }
    console.log("Working fine on port : " , port);
});
