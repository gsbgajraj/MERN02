const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Rtu@1888:<password>@portfolio-db.xj7xlig.mongodb.net/?retryWrites=true&w=majority&appName=portfolio-db");

app.listen(8080, ()=>{
    console.log("app is listening to port 8080")
})