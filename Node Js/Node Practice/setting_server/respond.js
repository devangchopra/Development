const http = require("http");
const port = 8000;

//To handle requests creating a function
//We generally name this function as request handler

function requestHandler(req,res){
    console.log(req.url);
}

//Now load and see the console...op

const server = http.createServer(requestHandler);


server.listen(port,function(err){
    if(err){
        console.log("Error" , err);
    }
    console.log("Working on port" , port);
})


