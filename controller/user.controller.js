const Model = require('../model/user.model');
const { sequelize } = require('../db/db');

const signup = (req, res) => {
    console.log(req.body);
    try {
        sequelize.sync().then(() => {
            Model.findOne({
                where: {
                    email: req.body.email
                },

            }).then((result) => {
                if (result) {
                    res.send("Email already exists!");
                    res.end();
                } else {

                    Model.create({
                        fname: " ",
                        lname: " ",
                        phone: req.body.phone || "",
                        email: req.body.email || "",
                        imageURL: "https://",
                        token: "1fs252r1-sdf-fd---sd-dsf-s",
                    });
                    res.status(200).send({ res: req.body });
                }
            })
        })
    } catch (error) {
        console.log(error);
    }
};

const getall = (req, res) => {
    try {
        sequelize.sync().then(() => {
            Model.findAll().then((result) => {
                res.json(result);
            })
        })
    } catch (error) {

    }
};

module.exports = { signup, getall };