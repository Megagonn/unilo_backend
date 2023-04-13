const express = require('express')
const app = express();
const cors = require('cors');
const {mysqlConnect} = require('./db/db');
const userRoutes = require('./routes/user.route');

///env
require("dotenv").config();

const port = process.env.PORT || 5860;

mysqlConnect.connect((err) => {
    var query = "create database IF NOT EXISTS unilo_db;"
    if (err) {
        console.log(err.code, err.message, err.stack);
        return;
    }
    console.log("Connection secured!");
    mysqlConnect.query(query, (err, result) => {
        if (err) {
            console.log(err);;
        }
        console.log("DB created!");
    })
})

///middlewares
app.use(cors());
app.use("/user", userRoutes);


app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Unilo app listening on port ${port}!`));