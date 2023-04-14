const Model = require('../model/company.model');
// const HistoryModel = require('../model/user_histroy.model');
const { sequelize } = require('../db/db');
const formidable = require('formidable');
const fs = require('fs');
// const path = require('path');
const mailer = require('../mailer/mailer');

const signup = (req, res) => {
    try {
        sequelize.sync().then(() => {
            Model.findOne({
                where: {
                    email: req.body.email,
                },
            },).then((result) => {
                if (!result) {
                    Model.create({
                        companyName: req.body.companyName,
                        phone: req.body.phone || "",
                        email: req.body.email || "",
                        imageURL: " ",
                        token: " ",
                        otp: "0000",
                        comRegNum: " ",
                        address: " ",
                        bankName: " ",
                        accNum: "0",
                    }).then(()=>{
                        res.send({status: true, message: "Registration successful!"});
                    });
                }else{
                    res.send({status: false, message: "Registration successful!"});
                }
            });
        });
    } catch (error) {
        console.log(error);
        res.send({status: false, message: error});
    }
};

const signin = (req, res) => {
    try {
        sequelize.sync().then(() => {
            Model.findOne({where: {
                email: req.body.email,
                phone: req.body.phone,
            }}).then((result) => {
                if (result) {
                    console.log(result);
                    res.send({status: true, message: result});
                }else{
                    res.send({status: false, message:"Not found"});
                }
            });
        });
    } catch (error) {
        console.log(error);
        res.send({status: false, message: error});
    }
};

const update = (req, res) => {
    try {
        const formi = new formidable.IncomingForm();
        formi.parse(req, (err, fields, files) => {
            // console.log(fields, files);
            if (!err) {
                var companyName = fields.companyName;
                var comRegNum = fields.comRegNum;
                var phone = fields.phone;
                var address = fields.address;
                var oldPath = files.filepath.filepath;
                var filepath = `uploads/company/${files.filepath.originalFilename}`;
                fs.rename(oldPath, filepath, (err) => {
                    // if (!err) {
                    Model.update({
                        "companyName": companyName,
                        "comRegNum": comRegNum,
                        "phone": phone,
                        "address": address,
                        "imageURL": filepath
                    }, {
                        "where": {
                            email: fields.email
                        }
                    }).then(result => {
                        if (result) {
                            console.log("Successfully updated");
                            res.send({status: true, message: "Successfully updated"});
                            // res.send("");
                            // res.end();
                        }
                    })
                    // }
                    // res.end(err);
                })

            }
        })
    } catch (error) {
        
    }
};

module.exports = {signup, signin, update};