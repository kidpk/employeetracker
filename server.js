var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employeesDB",
});

connection.connect(function (err) {
	if (err) throw err;
start();
  });

function start() {
	inquirer
	  .prompt({
		name: "action",
		type: "list",
		message: "What would you like to do?",
		choices: [
		  "View All Employees",
		  "View All Employees By Department",
		  "View All Roles",
		  "Add Employee",
		  "Add Department",
		  "Add Role",
		  "Update Employee Role",
		  "Remove Department",
		  "Remove Roles",
		  "Remove Employees"
		]
	  })
    


function addDepartment() {
  inquirer
    .prompt({
      name: "action",
      type: "input",
      message: "What department do you want to add?",
    })}
   

function addRole() {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What is the the new role?",
      },
      {
        name: "salary",
        type: "input",
        message: "How big is the salary for this role?",
      },
      {
        name: "manager_id",
        type: "list",
        message: "Which department is this role being added to?",
        choices: ["1", "2", "3", "4"],
      },
    ])}
    

function addEmployee() {
  inquirer
    .prompt([
      {
        name: "first",
        type: "input",
        message: "What iss the first name of the new employee?",
      },
      {
        name: "last",
        type: "input",
        message: "What is the last name of the new employee?",
      },
      {
        name: "role_id",
        type: "input",
        message: "What is the new employee's role ID?",
      },
      {
        name: "manager_id",
        type: "input",
        message: "What is the new manager's ID?",
      },
    ])}
   

function updateEmployee() {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "Which employee do you want to update? (Enter ID)",
      },
      {
        name: "new",
        type: "input",
        message: "What is the new role ID for this employee?",
      },
    ])}
}
  
// This is what I was able to make after staring at different activities and projects to see how it works.
// I'm really tired and learning the function to create each input is gonna take a while,
// I researched it a good amount and tried running them in other projects but I couldnt get the seeds to connect to mysql.
// At least it shows stuff in the nodejs!!!