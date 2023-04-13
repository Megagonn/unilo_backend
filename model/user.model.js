const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../db/db');

const UserModel = sequelize.define('user_db', {
    "fname": {
        type: DataTypes.STRING,
        allowNull: false,
    },
    "lname": {
        type: DataTypes.STRING,
        allowNull: false,
    },
    "email": {
        type: DataTypes.STRING,
        allowNull: false,
    },
    "phone": {
        type: DataTypes.STRING,
        allowNull: false,
    },
    "imageURL": {
        type: DataTypes.STRING,
        allowNull: false,
    },
    "token": {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = UserModel;