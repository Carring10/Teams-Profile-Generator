// TODO: Packages needed for application.
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Make an array of questions for user input.
const questions = inquirer
  .prompt([
    {
      type: "input",
      message: "What is the team manager's name?",
      name: "name",
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
      message: "What is their office number?",
      name: "officeNumber",
    },
  ])
  .then((answers) => {
    writeToFile("./dist/index.html", answers);
  })
  .catch((err) => console.log(err));

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
          <h1>${answers["name"]}</h1>
          <p>${answers["id"]}</p>
          <p>${answers["email"]}</p>
          <p>${answers["officeNumber"]}</p>
        </body>
        </html>`;
}
