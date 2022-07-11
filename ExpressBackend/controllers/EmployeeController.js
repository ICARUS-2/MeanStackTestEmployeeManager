const express = require("express")
const router = express.Router();
const EmployeeModel = require("../models/EmployeeModel")

//Retrieve list of employees
router.get('/', async (req, res) =>
{
    let employees = await EmployeeModel.find();

    res.send(employees)
})

//Create a new employee
router.post('/new', async (req, res) =>
{
    console.log(req.body)

    res.send("TEst")
})

//Update existing employee
router.post('/edit', async (req, res) =>
{
    //TODO
})

//Remove employee
router.post('/delete', async (req, res) =>
{
    //TODO
})

module.exports = router;