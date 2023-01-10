const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/Ola/:nome/:cargo", function(req, res){
    res.send("<h1> Olá " + req.params.nome + ", " + req.params.cargo + "</h1>");
});

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");
});



