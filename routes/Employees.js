const router = require("express").Router();
let Employee = require("../models/Employee.model");

//to add employee
router.route("/").post((req, res) => {
  const body = req.body;
  var employee_details = new Employee(body);
  employee_details
    .save()
    .then(doc => {
      res.status(201);
      return res.send(doc);
    })
    .catch(err => {
      res.status(404);
      res.send(err);
    });
});

//to get all Employees
router.route("/").get((req, res) => {
  Employee.find()
    .then(employees => {
      console.log("Response Resolved");
      return res.json(employees);
    })
    .catch(err => {
      console.log("Response Failed");
      return res.json(err);
    });
});

//Employees with highest salary
router.route("/max-salary").get((req, res) => {
  Employee.find()
    .then(employees => {
      const maxSalary = Math.max.apply(
        Math,
        employees.map(function(o) {
          return o.salary;
        })
      );

      const allMaxSalaryEmployees = employees.filter(
        employee => employee.salary === maxSalary
      );

      return res.send(allMaxSalaryEmployees);
    })
    .catch(err => {
      return res.json(err);
    });
});

module.exports = router;
