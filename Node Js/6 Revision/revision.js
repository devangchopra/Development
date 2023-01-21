const express = require("express");
//Node Js framework
const port = 8000;
const path = require("path");
const app = express();
//Middleware
app.use(express.urlencoded());

//Views
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));

var contactList = [
    {
        name: "Devang",
        phone : "7009155311"
    },
    {
        name : "Dhruva",
        phone : "9417093063"
    }
]

app.get("/",function(req,res){
    return res.render("home" , {
        title : "Revison"
    })
});

app.get("/practice",function(req,res){
    return res.render("practice",{
        contactList : contactList
    });
})

app.post("/create-contact" , function(req,res){
    //I have to add data
    contactList.push(req.body);
    return res.redirect("/practice");
    //to send it to home page
});


app.listen(port,function(err){
    if(err){
        console.log("Error" , err);
    }
    console.log("Working fine on port :" , port);
})