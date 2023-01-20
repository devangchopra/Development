const express = require("express");
const path = require("path");
const port = 8000;
const app = express();
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));

//Now we will keep the title of page dynamic
app.get("/",function(req,res){
    return res.render("home" , {title : "HII"});
});



app.listen(port,function(err){
    if(err){
        console.log("Error" , err);
    }
    console.log("Working fine on port : " , port);
});