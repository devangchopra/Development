//Here i will use the templates
//There are various template engines available...we will use EJS
const express = require("express");
const port = 8000;
const path = require("path");
//To set the path for views / templates
const app = express();

//Now this app has various properties in the form of key value pairs
//JSON Form

app.set("view engine","ejs");
//We are telling express that our template/view engine will be ejs

//We need to tell where to place our views/templates
//We have to choose a directory for that
app.set("views",path.join(__dirname,"views"));
//Node running address + folder name

//To render these views

app.get("/",function(req,res){
    //res.send("Hello World");
    return res.render("home");
});





app.listen(port,function(err){
    if(err){
        console.log("Error" , err);
    }
    console.log("Working on port : " , port);
});