const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("hello world from the server");
})
console.log("welcome to my application");