function generateHTMLPage(answers) {
  const htmlTemplate = `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title></title>
        </head>
        <body>
          <h1>${answers.managerName}</h1>
          <p>${answers.id}</p>
          <p>${answers.email}</p>
          <p>${answers.officeNumber}</p>

          <h1>${answers["engineerName"]}</h1>
          <p>${answers["engineerId"]}</p>
        </body>
        </html>`;
  return htmlTemplate;
}

module.exports = generateHTMLPage;
