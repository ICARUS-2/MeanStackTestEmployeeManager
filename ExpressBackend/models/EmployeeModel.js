const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name: String,
    dateOfBirth: Date,
    email: String,
    hiringDate: Date,
    terminationDate: Date,
    status: String,
    info: String
})

module.exports = mongoose.model("Employee", employeeSchema)