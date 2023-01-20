const express = require("express");
const port = 8000;
const path = require("path");
const app = express();
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));


app.get("/",function(req,res){
    return res.render("locals",{
        title : "Home"
    });
});

//The res is an object (JSON) and one of its key is
//locals ... locals contains the variables that are to be substituted
//in the  views or templates
//if you see locals.ejs file you will see that
//locals.title also works
//becuase its a global object

app.listen(port,function(err){
    if(err){
        console.log("Error" , err);
    }
    console.log("Working fine on port : " , port);
});