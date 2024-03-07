const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");


// app.use((req,res,next)=>{
//     console.log("i am middleware 1");
//     next();
// })

// app.use((req,res,next)=>{
//     console.log("i am middleware 2");
//     next();
// })

//logger-morgan
// app.use((req,res,next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// })
app.use("/random",(req,res)=>{
    res.send("i am only for random")
})

const checktoken = app.use("/api",(req,res,next)=>{
    let {token} = req.query;
    if(token=="giveaccess"){
        next();
    }
     throw new Error(403,"Access to admin forbidden")
})

app.get("/api",checktoken, (req,res)=>{
    res.send("Data")
})
app.get("/",(req,res)=>{
    res.send("this is root path");
})

app.get("/random",(req,res)=>{
    res.send("i am random path")
})
//404
app.use((req,res)=>{
    res.status(404).send("page not found")
})
app.listen(8080,()=>{
    console.log("app is listening to port 8080")
})
