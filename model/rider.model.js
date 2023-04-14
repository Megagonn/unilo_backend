const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../db/db');

const Model = sequelize.define("rider_dbs", {
    "riderCompanyId": {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    "riderName": {
        type: DataTypes.STRING,
        allowNull: false,
    },
    "riderCompanyName": {
        type: DataTypes.STRING,
        allowNull: false,
    },
    "imageUrl": {
        type: DataTypes.STRING,
        allowNull: false,
    },
    "email": {
        type: DataTypes.STRING,
        allowNull: false, unique: true,
    },
    "phone": {
        type: DataTypes.STRING,
        allowNull: false,
    },
    "star": {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0,
    },
    "address": {
        type: DataTypes.STRING,
        allowNull: false,
    },
    "status": {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    "role": {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "rider",
    },
    // "paymentType": {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    // "mapImageUrl": {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // }
})

module.exports = Model;