console.log("Starting Server System")
const servers = require("./src/server")

const express = require("express")
const app = express()
app.use(express.static("."));
app.use(express.urlencoded({extended: true}));
app.use(express.json({limit: "1Mb"})); //Limit the size of jsons to prevent abuse
const port = process.env.PORT || 8000;
app.listen(port);
var server = new servers.Server("test")
server.startServer()

app.get("/startServer", (res,req)=>{
    var server = new servers.Server("test")
    server.startServer()
})
app.post("/joinServer", (res,req)=>{

})
app.post("/playerConnect", (req,res)=>{ //Required before player can join a server (Sets up the player class)

})