// TODO: Packages needed for application.
const inquirer = require("inquirer");
const init = () => {
  // set up first prompt
  // .then (another prompt);
  // .then (employee info)
  // if statements
  // process.exit(); to stop
  // will conitnue
  // add employee
};

const fs = require("fs");

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
    {
      type: "list",
      name: "teamMember",
      message: "Would you like to add an engineer or intern?",
      choices: ["engineer", "intern", "Finish building my team"],
    },
  ])
  .then((answers) => {
    addEmployee(answers);
  })
  .catch((err) => console.log(err));

function addEmployee(answers) {
  if (answers.teamMember === "engineer") {
    inquirer.prompt([
      {
        type: "input",
        message: "Engineers name:",
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
    ]);
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
function generateHTMLPage(answers) {
  return `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title></title>
        </head>
        <body>
          <h1>${answers["managerName"]}</h1>
          <p>${answers["id"]}</p>
          <p>${answers["email"]}</p>
          <p>${answers["officeNumber"]}</p>

          <h1>${answers["engineerName"]}</h1>
          <p>${answers["engineerId"]}</p>
        </body>
        </html>`;
}

// const names = ["",]
// name els = ${names.map(name => `<h2>${name}<h2>`)}
