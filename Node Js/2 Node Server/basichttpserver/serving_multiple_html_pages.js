// Now what i want is that when user says
// localhost/404 : 404 HTML page should be shown
// And when user says
// localhost/profile : profile user page should be shown

const http = require("http"); //Module
const port = 8000; //Logical port address
const fs = require("fs"); // Module for file reading


//This function will handle all the requests
//via GET ... ?

function requestHandler(req , res){
    res.writeHead(200,{"content-type" : "text/html"});

    let filePath;
    //variable

    //making switch cases
    switch(req.url){
        //This is the default case
        case '/':
          filePath = './index.html';
          break; 
        
        case '/profile':
            filePath = './profile.html';
            break;
        
        default:
            filePath = './404.html';
    }

    //Now read the filepath and render the page

    fs.readFile(filePath,function(err,data){
        
        if(err){
            console.log("Error" , err);
            return res.end("<h1>Error</h1>");
        }

        return res.end(data);

    })
}


//Creating the server
const server = http.createServer(requestHandler);


//Started the server
server.listen(port,function(argument){
    if(argument){
        console.log("Error");
    }
    else{
        console.log("Server is working fine on port :: " , port);
    }
});