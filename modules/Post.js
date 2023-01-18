const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize("postApp", "root", "caramelo", {
    host: "localhost",
    dialect: "mysql"
});


const Post = sequelize.define({
    titulo: DataTypes.STRING,
    conteudo: DataTypes.TEXT
})

Post.sync({force: true});