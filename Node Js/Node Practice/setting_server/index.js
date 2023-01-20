//Why index.js : Naming convention
//Mostly this is used as the entry point

//To start the server npm init in the same directory
//Once you fill in the details
//You will get the package.json file
//Contains dependancies and all : face of the server
//JSON : Java Script Object Notation
//Contains a set of key value pairs


//Module in NodeJs : HTTP Module
//runs on server....looks for diff files and logic
const http = require("http");
const port = 8000;

//Now request and response will be sent to port 8000

const server = http.createServer();
//First class function

server.listen(port,function(err){
    if(err){
        console.log("Error" , err);
        return;
    }
    console.log("YES working on port : " , port);
});


//If you do so...server will keep loading because it is just listening
//not responding to the requests
//If you press ctrl+c on terminal...server will crash
