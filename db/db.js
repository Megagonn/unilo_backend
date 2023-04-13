const mysql = require('mysql');
const {Sequelize} = require('sequelize');

const mysqlConnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
})

const sequelize = new Sequelize(
    'unilo_db',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = {mysqlConnect, sequelize};