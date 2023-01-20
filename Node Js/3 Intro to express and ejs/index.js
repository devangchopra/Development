// you need to require the express
const express = require("express");
const port = 8000;
//the port where server runs


const app = express();
//Naming preference = app
//Now app has all the funtionalities of express which
//are needed to run the server




//as the server is running it listens the requests
//and sends back the responses
app.listen(port,function(err){

    if(err){
        console.log("Error in running the server" , err);
    }

    console.log("Yup my express server is running on port : " , port);
})