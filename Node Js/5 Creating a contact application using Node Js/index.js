const express = require("express");
const path = require("path");
const port = 8000;

const app =express();

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));

//We will create a global list using the var key word
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

//try to write in this manner only because by this our
//code is clean and also this is the format in which browser
//communicates




app.get("/" , function(req,res){
    return res.render("home" ,{
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
