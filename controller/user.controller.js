const Model = require('../model/user.model');

const signup = (req, res) => {
    try {
        Model.create({
            fname: " ",
            lname: " ",
            phone: req.phone || "",
            email: req.email || "",
            imageURL: "https://",
            token: "1fs252r1-sdf-fd---sd-dsf-s",
        });
    } catch (error) {
        console.log(error);
    }
    res.status(200).send({req});
};

module.exports = {signup};