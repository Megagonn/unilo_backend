const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../db/db');

const Model = sequelize.define("company_dbs", {
    "companyName": {
        type: DataTypes.STRING,
        allowNull: false,
    },
    "phone": {
        type: DataTypes.STRING,
        allowNull: false,
    },
    "email": {
        type: DataTypes.INTEGER,
        allowNull: false, unique: true,
    },
    "imageUrl": {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:"",
    },
    "comRegNum": {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue:"",
    },
    "address": {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue:"",
    },
    "bankName": {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:"",
    },
    "accNum": {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:"",
    },
    "accName": {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:"",
    },
    "numberOfRiders": {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0,
    },
    "star": {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0,
    },
    "role": {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "admin",
    },
    "otp": {
        type: DataTypes.STRING,
        allowNull: false,
    },
    "testimonianl": {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    "profileProgress": {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0,
    },

})

module.exports = Model;