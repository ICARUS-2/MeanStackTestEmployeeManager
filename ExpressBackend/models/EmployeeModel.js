const mongoose = require('mongoose')
const STATUSES = require('../enums/Status')

const employeeSchema = new mongoose.Schema({
    name: String,
    dateOfBirth: Date,
    email: String,
    hiringDate: Date,
    terminationDate: Date,
    status: 
    {
        type: String,
        validate: 
        {
            validator: (v) =>
            {
                return STATUSES.includes(v)
            },
            message: (props) => "Status invalid"
        }
    },
    info: String
})

module.exports = mongoose.model("Employee", employeeSchema)