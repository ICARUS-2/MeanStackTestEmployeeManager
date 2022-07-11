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
        res.send("Employee successfully created")
    }
    catch(err)
    {
        res.statusCode = 400;
        res.send(err)
    }
})

//Update existing employee
router.post('/:id/edit', async (req, res) =>
{
    let id = req.params.id.toString();

    let emp;

    //First try to find the employee
    try
    {
        emp = await EmployeeModel.find().where({"_id": id})

        if (emp.length != 1)
        {
            res.statusCode = 404
            res.send("No employee with ID "+id+ " exists")
            return;
        }
    }
    catch(err)
    {
        res.statusCode = 404
        res.send("No employee with ID "+id+ " exists")
        return;
    }

    //Then update it once its existence is confirmed
    try
    {
        let name = req.body.name;
        let dob = req.body.dateOfBirth;
        let email = req.body.email;
        let hiringDate = req.body.hiringDate;
        let terminationDate = req.body.terminationDate;
        let status = req.body.status;
        let info = req.body.info;

        emp[0].name = name;
        emp[0].dateOfBirth = dob;
        emp[0].email = email;
        emp[0].hiringDate = hiringDate;
        emp[0].terminationDate = terminationDate;
        emp[0].status = status;
        emp[0].info = info;

        emp[0].save();
        res.statusCode = 201
        res.send("Employee " + id + " successfully edited")
        return;
    }
    catch(err)
    {
        console.log(err)
        res.statusCode = 400
        res.send(err);
        return;
    }
})

//Remove employee
router.post('/delete', async (req, res) =>
{
    //TODO
})

module.exports = router;