const http = require('http');
const port = 8000; 

const fs = require('fs');
//module used for reading and writing fs
//const because to read and write index.html file

function requestHandler(req,res){    
    console.log(req.url);
    res.writeHead(200,{'content-type' : 'text/html'});
    
    fs.readFile('./index.html',function(err,data){
        if(err){
            //if error do this
            console.log("Error",err);
            return res.end("<h1>Error</h1>");
        }
        return res.end(data);
        //if no error..display data of html
    });
    //readFile : function
    //funtion(err,data) : automatic calll...if error -> comes to err
    //data : file in html file
    //in node js we write ./
    //we prefer to write like this

    
};

const server = http.createServer(requestHandler);

server.listen(port,function(argument){
    if(argument){
        console.log("Error");
    }
    else{
        console.log("Server is working fine on port :: " , port);
    }
});

