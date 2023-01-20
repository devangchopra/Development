//Hands on with ejs
const express = require("express");
const port = 8000;
const path = require("path");
const app = express();

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));
//We have to reuire this path

app.get("/",function(req,res){
    return res.render("home",{
        title : "Home"
    });
});

//We have to crate another controller ... request type : GET
app.get("/practice",function(req,res){
    return res.render("practice" , {
        title : "EJS Practice"
    })
});


app.listen(port,function(err){
    if(err){
        console.log("Error" , err);
    }
    console.log("Working fine on port : " , port);
});