const express = require("express")
const router = express.Router();
const EmployeeModel = require("../models/EmployeeModel")

//Retrieve list of employees
router.get('/', async (req, res) =>
{
    let employees = await EmployeeModel.find();

    res.send(employees)
})

router.get('/:id', async (req, res) =>
{
    let id = req.params.id.toString();

    try
    {
        let emp = await EmployeeModel.find().where({"_id": id})

        if (emp.length == 1)
        {
            res.statusCode = 200
            res.send(emp[0])
        }
        else
        {
            res.statusCode = 404
            res.send("No employee with ID "+id+ " exists")
        }
    }
    catch(err)
    {
        res.statusCode = 404
        res.send("No employee with ID "+id+ " exists")
    }
})

//Create a new employee
router.post('/new', async (req, res) =>
{
    console.log(req.body)

    let name = req.body.name;
    let dob = req.body.dateOfBirth;
    let email = req.body.email;
    let hiringDate = req.body.hiringDate;
    let terminationDate = req.body.terminationDate;
    let status = req.body.status;
    let info = req.body.info;

    try
    {
        
        let employee = await EmployeeModel.create({
            name: name,
            dateOfBirth: dob,
            email: email,
            hiringDate: hiringDate,
            terminationDate: terminationDate,
            status: status,
            info: info
        })

        employee.save()
        res.statusCode = 201;
        res.send(employee)
    }
    catch(err)
    {
        res.statusCode = 400;
        res.send(err)
    }
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