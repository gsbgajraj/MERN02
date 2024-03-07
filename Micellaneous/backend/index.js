const express = require("express");
const app = express();
const port=8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.get("/register", (req,res)=>{
    let {user, password} =req.query;
    res.send(`Welcome to your page @${user}`)
})
app.post("/register", (req,res)=>{
    console.log(req.body);
    res.send("post response accepted")
})

app.listen(port, ()=> console.log(`app is listening to port ${port}`))