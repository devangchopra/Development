const express = require("express");
const path = require("path");
const port = 8001;
const app =express();
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));
app.use(express.urlencoded());
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


app.get("/delete-contact", function(req,res){
    let phone_to_be_deleted = req.query.phone;
    let contactIndex = contactList.findIndex(contact => contact.phone == phone_to_be_deleted);
    if(contactIndex != -1){
        contactList.splice(contactIndex,1);
    }
    return res.redirect("back");
});


app.listen(port,function(err){
    if(err){
        console.log("Error... " , err);
    }
    console.log("Working fine on port : " , port);
});
