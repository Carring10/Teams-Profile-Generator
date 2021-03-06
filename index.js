// TODO: Packages needed for application.
const inquirer = require("inquirer");
const fs = require("fs");

const generateHTMLPage = require("./src/template.js");

const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const employeeArr = [];

// TODO: Make an array of questions for user input.
const questions = inquirer
  .prompt([
    {
      type: "input",
      message: "What is the team manager's name?",
      name: "managerName",
    },
    {
      type: "input",
      message: "What is their employee id?",
      name: "id",
    },
    {
      type: "input",
      message: "What is their email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is their office number?",
      name: "officeNumber",
    },
  ])
  .then((answers) => {
    addEmployee(answers);

    const manager = new Manager(
      answers.managerName,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    employeeArr.push(manager);
  })
  .catch((err) => console.log(err));

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "rawlist",
        name: "teamMember",
        message: "Would you like to add an engineer or intern?",
        choices: ["Engineer", "Intern", "Finish building my team"],
      },
    ])
    .then((answers) => {
      promptEmployeeQuestions(answers);
    });
}

function promptEmployeeQuestions(answers) {
  if (answers.teamMember === "Engineer") {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Engineer's name:",
          name: "employeeName",
        },
        {
          type: "input",
          message: "What is their id number?",
          name: "employeeId",
        },
        {
          type: "input",
          message: "What is their email?",
          name: "employeeEmail",
        },
        {
          type: "input",
          message: "What is their GitHub username?",
          name: "github",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.employeeName,
          answers.employeeId,
          answers.employeeEmail,
          answers.github
        );
        employeeArr.push(engineer);

        addEmployee(answers);
      });
  } else if (answers.teamMember === "Intern") {
    inquirer
      .prompt([
        {
          type: "input",
          message: "intern's name:",
          name: "employeeName",
        },
        {
          type: "input",
          message: "What is their id number?",
          name: "employeeId",
        },
        {
          type: "input",
          message: "What is their email?",
          name: "employeeEmail",
        },
        {
          type: "input",
          message: "What school do they attend?",
          name: "school",
        },
      ])
      .then((answers) => {
        addEmployee(answers);

        const intern = new Intern(
          answers.employeeName,
          answers.employeeId,
          answers.employeeEmail,
          answers.school
        );
        employeeArr.push(intern);
      });
  }

  if (answers.teamMember === "Finish building my team") {
    finalizeTeam(answers, employeeArr);
  }
}

function finalizeTeam(answers, employeeArr) {
  writeToFile("./dist/index.html", answers, employeeArr);
}

// TODO: Make a function to write HTML page.
function writeToFile(filePath, answers, employeeArr) {
  fs.writeFile(filePath, generateHTMLPage(employeeArr), (err) => {
    err ? console.error(err) : console.log("Success!");
  });
}
