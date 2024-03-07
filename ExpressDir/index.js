const express = require("express");
const app = express();
console.dir(app);

const port = 3000;

app.listen(port, ()=> { console.log(`App is listening to incoming requests at ${port}`)})

app.get("/:username/:id",(req,res) =>{
   let {username,id} = req.params;
   htmlstr=`<h1>welcome to the page of ${username} </h1>`;
   res.send(htmlstr)
})

app.get("/search",(req,res) => {
   let {q} =req.query;
   if(!q){
      res.send("<h1>Nothing searched</h1>")
   }
   res.send(`<h1>Here is the search results for the query: ${q}😃</h1>`);
})