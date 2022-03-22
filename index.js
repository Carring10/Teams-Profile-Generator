// TODO: Packages needed for application.
const inquirer = require("inquirer");
const fs = require("fs");

const generateHTMLPage = require("./src/template.js");

const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

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
    console.log(manager);
  })
  .catch((err) => console.log(err));

function addEmployee(answers) {
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
        addEmployee(answers);
        const engineer = new Engineer(
          answers.employeeName,
          answers.employeeId,
          answers.employeeEmail,
          answers.github
        );
        console.log(engineer);
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
      });
  }
  if (answers.teamMember === "Finish building my team") {
    finalizeTeam(answers);
  }
}

function finalizeTeam(answers) {
  writeToFile("./dist/index.html", answers);
}

// TODO: Make a function to write HTML page.
function writeToFile(filePath, answers) {
  fs.writeFile(filePath, generateHTMLPage(answers), (err) => {
    err ? console.error(err) : console.log("Success!");
  });
}

// TODO: Make a function to generated HTML page.

// const names = ["",]
// name els = ${names.map(name => `<h2>${name}<h2>`)}
