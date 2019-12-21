const router = require("express").Router();
let Employee = require("../models/Employee.model");

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
module.exports = router;
