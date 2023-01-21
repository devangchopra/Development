//Creating MiddleWare
const express = require("express");
const path = require("path");
const port = 8000;
const app =express();
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));
app.use(express.urlencoded());

// //Middleware : 1 
// app.use(function(req,res,next){
//     //Next : passes on the changes to next middleware
//     //if there is no next middleware...then it will go to the controller

//     console.log("MiddleWare 1 Called");
//     //but after this the page would keep loading
//     //why becuase we haven't passed the control yet
//     //so for that
//     next();
//     //and it works
// })

// //chaining the middleware
// //Middleware : 2
// app.use(function(req,res,next){
//     console.log("MiddleWare 2 Called");
//     next();
// })


//Middleware : 3
//Manipulating the data of request
app.use(function(req,res,next){
    req.myName = "Devang";
    next();
})

//Middleware : 4
app.use(function(req,res,next){
    console.log("MyName" , req.myName);
    next();
})





var contactList = [
    {
        name : "Devang",
        phone : "70091551331"
    },
    {
        name : "Sheldon",
        phone : "1234567890"
    },
    {
        name : "Hello World",
        phone : "8521364790"
    }
]



app.post("/create-contact" , function(req,res){
    contactList.push(req.body);
    return res.redirect("/");
});


app.get("/practice" , function(req,res){
    return res.render("practice");    
});

//I can also access the same from here

app.get("/" , function(req,res){
    
    console.log("Controller prints ", req.myName);

    return res.render("home_02" ,{
        title : "Contacts List",
        contact_list : contactList
    });
});

app.listen(port,function(err){
    if(err){
        console.log("Error... " , err);
    }
    console.log("Working fine on port : " , port);
});
