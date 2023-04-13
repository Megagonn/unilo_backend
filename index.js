const express = require('express')
const app = express();
const cors = require('cors');
const {mysqlConnect} = require('./db/db');
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user.route');


///middlewares
app.use(cors());
app.use("/user", userRoutes);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
///env
require("dotenv").config();

const port = process.env.PORT || 5860;

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