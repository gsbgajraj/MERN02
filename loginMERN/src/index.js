const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

// app.use(express.json())
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
// app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.get("/login",(req,res)=>{
    res.render("login.ejs")
})

app.get("/signup",(req,res)=>{
    res.render("signup.ejs")
})

app.listen(3000,()=>{
    console.log("port connected");
})