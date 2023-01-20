const express = require("express");
//Capturing the module
const port = 8000;
//On which port our server will listen to
const app = express();
//First class funtion ... app now contains all the functionalities 
//of the express 

//We need to response as well : for response
app.get('/',function(req,res){
    res.send("Hello World");
})

//This is listening to our requests
//Its the first layer
app.listen(port,function(err){
    if(err){
        console.log("Error" , err);
    }
    console.log("Working fine on port : " , port);
})