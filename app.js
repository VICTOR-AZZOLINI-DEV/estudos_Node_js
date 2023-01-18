const express = require("express");
const app = express();
const handlebars = require("express-handlebars");


//Config
    //Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: "main"}));
    app.set('view engine', 'handlebars');
    //Configurando o parsing 
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
//Rotas
app.get("/cadastro", function(req, res){
    res.render("formulario");
});

app.post("/add", function(req, res){
    res.send("Título: " + req.body.titulo + " Conteúdo: " + req.body.conteudo);
});


app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");
});



