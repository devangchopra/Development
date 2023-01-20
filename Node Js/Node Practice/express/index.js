//Initially you need to install this from the npm
//npm install express
//--save no need...it will do automatically
//As soon as i install i can see node_modules
//Contains all things needed for express
//package_lock.json : All the depandcies...and if someone else
//make changes...it will automatically install them

const express = require("express");
const port = 8000;
const app = express();
//Server - >app
app.listen(port,function(err){
    if(err){
        console.log("Error",err);
    }
    console.log("Ok" , port);
})


//Same no response .. but Cannot GET .. no loading
//framework handles