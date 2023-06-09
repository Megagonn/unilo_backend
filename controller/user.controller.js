const Model = require('../model/user.model');
// const HistoryModel = require('../model/user_histroy.model');
const { sequelize } = require('../db/db');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const mailer = require('../mailer/mailer');


const signup = (req, res) => {
    // console.log(req.body);
    try {
        sequelize.sync().then(() => {
            Model.findOne({
                where: {
                    email: req.body.email
                },
            }).then(async (result) => {
                if (result) {
                    res.send({ status: false, message: "Email already exists!" });
                    res.end();
                } else {
                    try {
                        await mailer(req.body.email, "Welcome to Unilo", "This is your OTP 1235");
                        Model.create({
                            fname: " ",
                            lname: " ",
                            phone: req.body.phone || "",
                            email: req.body.email || "",
                            imageURL: " ",
                            token: " ",
                            lastOTP: "0000",
                            history: "",
                            status: false,
                        }).then((_) => {
                            res.send({ status: true, message: "Registration successful!" });
                        });
                    } catch (error) {
                        console.log(error);
                        res.end({ status: false, message: "Something went wrong" });
                    }
                }
            })
        })
    } catch (error) {
        console.log(error);
        res.send({ status: false, message: error });
    }
};

const addName = (req, res) => {
    var fname = req.body.fname;
    var lname = req.body.lname;
    try {
        sequelize.sync().then(() => {
            Model.update({
                "fname": fname,
                "lname": lname,
                "status": true,
            }, {
                where: { email: req.body.email }
            }).then(result => {
                if (result) {
                    res.status(200).send({ res: result });
                }
            });
        });
    } catch (error) {
        res.send(`Something went wrong! \n\n${error.message}`);
    }
};

const signin = (req, res) => {
    try {
        sequelize.sync().then(() => {
            Model.findOne({
                where: {
                    email: req.body.email,
                    phone: req.body.phone,
                }
            }).then((result) => {
                if (result) {
                    console.log(result);
                    res.send({ status: true, message: result });
                } else {
                    res.send({ status: false, message: "Not found" });
                }
            });
        });
    } catch (error) {
        console.log(error);
        res.send({ status: false, message: error });
    }
};

const updateProfile = (req, res) => {
    // const formi = new Formidable;
    try {
        const formi = new formidable.IncomingForm();
        formi.parse(req, (err, fields, files) => {
            // console.log(fields, files);
            if (!err) {
                var fname = fields.fname;
                var lname = fields.lname;
                var phone = fields.phone;
                var oldPath = files.filepath.filepath;
                var filepath = `uploads/user/${files.filepath.originalFilename}`;
                fs.rename(oldPath, filepath, (err) => {
                    // if (!err) {
                    Model.update({
                        "fname": fname,
                        "lname": lname,
                        "phone": phone,
                        "imageURL": filepath
                    }, {
                        "where": {
                            email: fields.email
                        }
                    }).then(result => {
                        if (result) {
                            console.log("Successfully updated");
                            res.send("Successfully updated");
                            // res.end();
                        }
                    })
                    // }
                    // res.end(err);
                })

            }
        })
    } catch (error) {
        res.send(error);
    }
};

const getall = (_, res) => {
    try {
        sequelize.sync().then(() => {
            Model.findAll().then((result) => {
                res.json(result);
            })
        })
    } catch (error) {

    }
};

module.exports = { signup, getall, addName, updateProfile, signin };