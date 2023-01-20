//Rest is same ... you just need to tell
//express you will use ejs now 

const path = require("path");
//inbuilt module : we need this


const express = require("express");
const port = 8000;


const app = express();

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));

app.get('/',function(req,res){
    //res.end("OK");
    return res.render("home" ,{title : "DCT"});
});


app.listen(port,function(err){
    if(err){
        console.log("Error" , err);
    }
    console.log("Fine : " , port);
});