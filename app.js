const express = require("express");
const cors = require("cors");
const userroute = require("./routes/router");
const app = express();
require("./config/db");



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(userroute);




/* app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/./viwes/index.html")
})*/


app.use((req,res,next)=>{
    res.status(404).json({
        message: "404 not found"
    })
})

app.use((err,req,res,next)=>{
    res.status(500).json({
        message: "something broek",
        see: err
    })
})




module.exports= app;