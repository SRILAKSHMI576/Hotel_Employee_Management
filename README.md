Running Locally
Make sure you have Node.js, to install it refer:https://nodejs.org/en/download/

Clone Repo:
git clone https://github.com/SRILAKSHMI576/Hotel_Employee_Management # or clone your own fork

Run App:
cd <path-to-app>
npm install
npm start

API:
-> To post an employee:
EndPoint: /employees, Method: POST

-> To get all employees:
Endpoint: /employees, Method: GET

=> To find Maximum Salary Employees:
Endpoint: /employees/max-salary, Method: GET

=> To find average of specific type:
Endpoint: /employees/avg-salary?type=<type>, Method: GET
type can be 0/1
