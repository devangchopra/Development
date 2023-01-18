const express = require("express");
const port = 8000;

const app = express();

app.get('/',function(req,res){
    console.log(req);
    res.send("<h1>YES it is runnig</h1>");
});


app.listen(port,function(err){
    if(err){
        console.log("Error" , err);
    }
    console.log("Fine : " , port);
});