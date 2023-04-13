const mysql = require('mysql');
const {Sequelize} = require('sequelize');
require("dotenv").config();
const mysqlConnect = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
})

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: 'mysql'
    }
);


module.exports = {mysqlConnect, sequelize};