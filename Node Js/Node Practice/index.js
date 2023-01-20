//Basic Printing
console.log("Hello World");

//Funtions
function add(a,b){
    return a+b;
}

console.log(add(2,3));

//Input
//Global Variable : Process
//Process looks up to the whole development environment
console.log(process.argv);
//Returns the array of strings : node present ... current dir .. input

//To extract from this we need to slice and convert this
console.log(process.argv[2]);


//Modules : Check modules_rev folder
//For module ... we use export then we use require


//Js : both frontend as well as backend
//db : yes : mongodb

//NPM always gets installed whenever we are installing nodejs
//to check : npm -v
//Node Package Manager
//All libraries , packages are installed and managed via this only


//Server : Earlier .. Now (facebook .. diff for diff users)
//Server has some logical functions written in it. According to
//the output of those data is displayed in the views

//Setting up our own server : Check setting_server
//1 ) index.js : Basic Setup
//2 ) response.js : Respponding the request
//3 ) understanding response
//4 ) reading and serving html file
//If multiple html pages....switch case 
//path ko store krna pdega...same function readFile mei
//file path daalna pdega
//Ab if any change is there we need to run again n again
//Ek baari init : initialize
//Now every time node... when i do change
//so to free from that we use nodemon
//Terminal >> npm install -g nodemon
//-g : global :: Node Local
//it automatically runs when we press ctrl+s

//To overcome such a lot of work : we use framework of node.js
//Framework : Express
//Eases the coding
//Framework will manage all those depandancies and the folder
//and will organize them for me


//Folder Strcutre : Generally we use : MVC : Models Views Control
//Controller gets the required data from the module acc to request
//from browser and then fits that into the view and sends it back
//to the browser
//Controller : Heart

//Express doesn't tells you how to strcture the code...freedom

//Express : Check Express Folder
//1 ) index.js
//2 ) response.js


//Request Respnse Cycle
//GET : want some data
//POST  : sending some data  in dbs
//PUT : missing fill
//PATCH : update
//DELETE

//Templates