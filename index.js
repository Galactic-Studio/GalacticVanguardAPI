require("dotenv").config();
const semver = require('semver')
const needle = require("needle");
const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.static("."));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10kb" })); //Limit the size of jsons to prevent abuse
var port = process.env.PORT || 8000; //Only Uncomment for testing on local servers
app.listen(port);

app.get("/downloadGame/:userId", (req, res) =>{
    
})
app.get("/latestGameVersion", (req,res)=>{
    res.send({"version": semver.valid(process.env.GAMEVERSION) })
})