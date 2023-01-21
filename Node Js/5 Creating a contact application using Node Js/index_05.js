//In this file we are going to include static files
//to beautify our page
//We will do so by middleware
//Step 1 : create a folder named as assets
//1.2 : inside that create css .. js and  images folder

//Step 2 : General code
const express = require("express");
const port = 8000;
const path = require("path");
const app = express();
app.set("view engine" , "views");
app.set("views" , path.join(__dirname,"views"));
app.use(express.urlencoded());


//Step 3 : The code
app.use(express.static("assets"));
//Middleware : Inbuilt Library : Assest folder name
//to style

//Rest : In the stylind dir


