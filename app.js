const express = require("express");

const app= express();
const path= require("path");
const port= 3030;

app.use(express.static("public"))

app.listen(port,(req,res)=> console.log("servidor corridendo en el puerto"+port));

app.get("/",(req,res)=> res.sendFile(path.join(__dirname,"views","index.html")));