const express = require("express");
const port = 8000;
const app = express();

app.get('/' , function(req,res){
    //res.send("YEAH");
    //It can also render HTML Pages
    res.send("<h1>YEAH ! </h1>");
    //res.render("home") :: HTML Page
});

//WE dont need switch cases here...we can render via '/'

app.listen(port,function(err){
    if(err){
        console.log("Error" , err);
    }
    console.log("Working" , port);
});