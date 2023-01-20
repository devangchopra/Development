const http = require("http");
const port = 8000;

function requestHandler(req,res){

    res.writeHead(200,{"content-type" : "text/html"});
    //200 : Response code
    //We are sending a response to browser in which we are telling 
    //ki render via text or html

    //res.end("Hi World");

    
    //Via node js
    //Rendering of html to browser also becomes easy
    res.end("<h1>Helloo World</h1>");

}

const server = http.createServer(requestHandler);
server.listen(port,function(err){
    if(err){
        console.log("ERROR" , err);
    }
    console.log("Working"  , port);
})