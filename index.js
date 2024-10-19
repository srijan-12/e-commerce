const express = require("express");
const app = express();
const port = 3200;

app.use("/",(req,res)=>{
    res.send("server is up and running");
})

app.listen(port,()=>{
    console.log(`server started at prot ${port}`);
})