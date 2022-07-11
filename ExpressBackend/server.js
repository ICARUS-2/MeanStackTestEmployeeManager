const express = require("express")
const mongoose = require("mongoose")
const app = express();

const employeeController = require("./controllers/EmployeeController")

mongoose.connect("mongodb://localhost:27017/testdb", () => {console.log("Connected")},  (e) => {console.error(e)});

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