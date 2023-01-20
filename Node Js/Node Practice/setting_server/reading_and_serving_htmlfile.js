const http = require("http");
const port  = 8000;

//for this we require a module named as file system .. fs
const fs = require("fs");

function requestHandler(req,res){

    fs.readFile('./profile.html',function(err,data){
        if(err){
            console.log("ERROR" , err);
            return res.end("<h1>Error</h1>");
        }
        return res.end(data);
    })

    //It will read the HTML page...if error comes
    //Error will be shown 
    //Else .... data of that HTML file will be shown

}

const server = http.createServer(requestHandler);
server.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log("Working fine" , port);
})