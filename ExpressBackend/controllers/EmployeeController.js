const express = require("express")
const router = express.Router();
const EmployeeModel = require("../models/EmployeeModel")

//Retrieve list of employees
router.get('/', async (req, res) =>
{
    try
    {
        let employees = await EmployeeModel.find();

        res.statusCode = 200
        res.send(employees)
    }
    catch(err)
    {
        res.statusCode = 500
        res.send("Failed to retrieve Employees")
    }
})

//Retrieves an employee by its ID
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
        if (err.message.includes("Cast to"))
        {
            res.statusCode = 404
            res.send("No employee with ID "+id+ " exists")
        }

        res.statusCode = 500
        res.send("Failed to retrieve Employee")
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

//Create a new employee
router.post('/testnew', async (req, res) =>
{
    console.log(req.body)

    let name = "TEST EMPLOYEE";
    let dob = "2000-1-1";
    let email = "TEST EMAIL";
    let hiringDate = "2000-1-1";
    let terminationDate = "2000-1-1";
    let status = "Active";
    let info = "TEST INFO";

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

        await emp[0].save();

        res.statusCode = 201
        res.send("Employee " + id + " successfully edited")
        return;
    }
    catch(err)
    {
        res.statusCode = 400;
        res.send(err.message)
    }
})

//Remove employee
router.post('/:id/delete', async (req, res) =>
{
    let id = req.params.id.toString();

    try
    {
        //Will be the employee that is deleted if deletion succeeds, retu
        let delResult = await EmployeeModel.findOneAndDelete().where({"_id": id})
    
        if (delResult != null)
        {
            res.statusCode = 200;
            res.send("Employee successfully deleted")
        }
        else
        {
            res.statusCode = 404;
            res.send("No employee with ID "+id+ " exists")
        }
    }
    catch(err)
    {
        res.statusCode = 404
        res.send("No employee with ID "+id+ " exists")
        return;
    }
})

module.exports = router;