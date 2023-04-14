const express = require('express')
const app = express();
const cors = require('cors');
const {mysqlConnect, sequelize} = require('./db/db');
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user.route');
const Model = require('./model/user.model');

///middlewares
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
///env
require("dotenv").config();

app.use("/api/v1/user", userRoutes);
const port = process.env.PORT || 5860;

// app.post("api/v1/user", (req, res) => {
//     console.log(req);
//     try {
//         Model.create({
//             fname: " ",
//             lname: " ",
//             phone: req.phone || "",
//             email: req.email || "",
//             imageURL: "https://",
//             token: "1fs252r1-sdf-fd---sd-dsf-s",
//         });
//         res.status(200).send({req});
//     } catch (error) {
//         console.log(error);
//     }
    
// })


///db connection
sequelize.authenticate().then((_)=>{
    console.log("DB authentication successful");
}).catch((err)=>{
    console.log(err);
});


app.get('/', (req, res) => res.send('Hello World!'));
// mysqlConnect.connect((err) => {
//     var query = "create database IF NOT EXISTS unilo_db;"
//     if (err) {
//         console.log(err.code, err.message, err.stack);
//         return;
//     }
//     console.log("Connection secured!");
//     mysqlConnect.query(query, (err, result) => {
//         if (err) {
//             console.log(err);;
//         }
//         console.log("DB created!");
//     })
// })




app.listen(port, () => console.log(`Unilo app listening on port ${port}!`));

module.exports = app;