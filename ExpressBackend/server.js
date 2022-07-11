const cors = require('cors')
const express = require("express");
const { options } = require("mongoose");
const mongoose = require("mongoose")
const app = express();

app.use(cors({
    origin: '*'
}));

const employeeController = require("./controllers/EmployeeController")

mongoose.connect("mongodb://localhost:27017/testdb", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(logger)

//Allow express to access the request body
app.use(express.urlencoded({extended: true}))

//Allows express to parse JSON from URL
app.use(express.json())

app.use("/employees", employeeController)

function logger(req, res, next)
{
    console.log(req.originalUrl)
    next()
}

app.listen(5004)