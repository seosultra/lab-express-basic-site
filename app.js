// 1-we are depending on express to create our server
const express = require("express");
const hbs = require("hbs");

hbs.registerPartials(__dirname + "/views/partials");
//2-how to create the server
const app = express();
app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");

app.set("views", __dirname + "/views");

// 4- Create a static directory (folder) where we locate css file & images
// 5-Use app.use(express.static('directoryName')) functionality of express to serve all the static files inside a single directory
//============ 6- building our application by indicating route handleres=====
//1- handle get requests sent to our application, we use the get method
//1-1- we specify the path that we want to handle requests from; requests sent to the root of the application can be retrievied by indication '/'.
// 1-2- We pass a call back function that will be executed everytime a get request is sent to our application for the root of our application
app.get("/", (request, response) => {
  response.render("home");
});
// to access additional pages, hbs >> '/routeName'
app.get("/about", (request, response) => {
  response.render("about");
});
app.get("/works", (request, response) => {
  response.render("works");
});

// when calling undefined route
app.get("*", (request, response) => {
  response.send("Not found");
});
//3- define the port that the server should listen to. After defining the port, run in the terminal nodemon app.js

app.listen(3003);

// 7 - cd in the terminal to go to same level of the lab file touch a file '.gitignore where we write the name of files that should not be committed
// >> node_modules & .DS_Store
