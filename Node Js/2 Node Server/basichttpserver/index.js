const http = require('http');
//Module : http

const port = 8000; 
//local host

function requestHandler(req,res){
    //To handle the incoming requests and give a response
    console.log(req.url);
    //to print what is coming in the GET request
    res.end("Hello My Server");
    //to respond to a particular request
};

const server = http.createServer(requestHandler);
//creation of server

server.listen(port,function(argument){
    if(argument){
        //This will run if there is some argument
        //Acc to listen property argument will be there if error comes
        console.log("Error");
    }
    else{
        console.log("Server is working fine on port : " , port);
    }
});

