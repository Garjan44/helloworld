/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Garjan Raj Gosain  Student ID: 134210210 Date: 2023/01/18
*
*  Online (Cyclic) URL:  https://tired-dress-fly.cyclic.app/
*
********************************************************************************/ 



var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
const path=require("path")

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Garjan Raj Gosain - 134210210");
});


// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);

