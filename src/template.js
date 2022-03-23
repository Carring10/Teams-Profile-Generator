function generateHTMLPage(employeeArr) {
  return `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="style.css">
          <title>My Team</title>
        </head>
        <body>
        <header>
          <h1>My Team</h1>
        </header>
        <div class="card-container">
            ${employeeArr
              .map(
                (employee) => `
                <div class="cards">
                <h2>${employee.name}</h2>
                 <p>Id: ${employee.id}<p>
                <p>Email: <a>${employee.email}</a><p>
                ${
                  employee.officeNumber
                    ? `<p>Office Number: ${employee.officeNumber}<p>
                    <p class="role">Manager</p>`
                    : ""
                }
                ${
                  employee.github
                    ? `<p>Github: <a target="blank">${employee.github}</a><p>
                <p class="role">Engineer</p>`
                    : ""
                }
                ${
                  employee.school
                    ? `<p>School: ${employee.school}<p>
                <p class="role">Intern</p>`
                    : ""
                }
                </div>
                `
              )
              .join("")}
                </div>
        </body>
        </html>`;
}

module.exports = generateHTMLPage;
