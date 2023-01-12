const Sequelize = require("sequelize");
const sequelize = new Sequelize("sistemaDeCadastro", "root", "caramelo", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(error){
    console.log("Falha ao se conectar" + error)
})