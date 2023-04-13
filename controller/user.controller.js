const Model = require('../model/user.model');
const { sequelize } = require('../db/db');

const signup = (req, res) => {
    // console.log(req.body);
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
                        imageURL: "",
                        token: "",
                    });
                    res.status(200).send({ res: req.body });
                }
            })
        })
    } catch (error) {
        console.log(error);
    }
};

const addName = (req, res) => {
    try {
        Model.findOne({
            where: { email: req.body.email }
        }).then(result => {
            if (result) {
                var fname = req.body.fname;
                var lname = req.body.lname;
                try {
                    Model.update({
                        "fname": fname,
                        "lname": lname,
                    }, {
                        where: { email: req.body.email}
                    }).then(result => {
                        if (result) {
                            res.status(200).send({ res: result });
                            
                        }
                    });
                } catch (error) {

                }
            } else {
                res.send("Email not found!");
            }
        });
    } catch (error) {
        res.send(`Something went wrong! \n\n${error.message}`);
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

module.exports = { signup, getall, addName };