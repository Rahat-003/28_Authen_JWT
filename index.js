// #28 - 14:27

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const todoHandler = require("./routeHandler/todoHandler");
const userHandler = require("./routeHandler/userHandler");

dotenv.config();
const app = express();
app.use(express.json());

// database connection with mongoose
const connectionString = "mongodb://127.0.0.1:27017";

// console.log(connectionString)

mongoose
    .connect(connectionString + "/todos") // runtime e create hobe
    /*
      #26 - 15:46
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
  */

    .then(() => {
        return console.log("connection successfull"); // return na krleo somossa nai
    })
    .catch((err) => {
        return console.log(err);
    });

// application routes
app.use("/todo", todoHandler);
app.use("/user", userHandler);

// default error handler
const errorHandler = (err, req, res, next) => {
    console.log(err);
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: err });
};

app.use(errorHandler);

const port = 3000;

app.listen(port, () => {
    console.log(`App is running at port ${port}`);
});
