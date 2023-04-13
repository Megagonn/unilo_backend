const Model = require('../model/user.model');

const signup = (req, res) => {
    console.log(req.body);
    try {
        Model.create({
            fname: " ",
            lname: " ",
            phone: req.body.phone || "",
            email: req.body.email || "",
            imageURL: "https://",
            token: "1fs252r1-sdf-fd---sd-dsf-s",
        });
        res.status(200).send({res: req.body});
    } catch (error) {
        console.log(error);
    }
};

module.exports = {signup};