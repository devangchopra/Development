const http = require('http');
const port = 8000; 

function requestHandler(req,res){    
    console.log(req.url);

    res.writeHead(200,{'content-type' : 'text/html'});
    //200 : All are succesfull
    //Ex : Invalid Input : 422 response code
    //why text and html
    //because some browsers cant render html
    //so i say okay render as html
    //also this is a protocol
    //now restart and check

    //by this you are telling browser
    //how to render the text

    res.end("<h1>Gotcha</h1>");

    
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

