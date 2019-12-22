const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: String,
  salary: Number,
  type: Number
});

const Employee = mongoose.model("Employee", employeeSchema, "Employees");

module.exports = Employee;
