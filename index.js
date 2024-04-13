// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
//Questions for User
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "repoLink",
      message: "What is the link to your repo?",
    },
    {
        type: "input",
        name: "User Story",
        message: "Provide a User Story here",
    },
    {
        type: "input",
        name: "Acceptance Criteria",
        message: "Provide Acceptance Criteria here",
    },
    {
        type: "input",
        name: "What does your project do?",
        message: "Provide a description of your project here",
    },
    {
        type: "input",
        name: "Installation",
        message: "Provide installation instructions here",
    }
  ];
  
  // Prompt the user for input using inquirer
  inquirer.prompt(questions).then((answers) => {
    // Generate README content based on user input
    const readmeContent = generateMarkdown(answers);

    // Write the generated README content to a file named 'README.md'
    writeToFile("README.md", readmeContent);
  }).then((answers) => {
    console.log(answers);
  })

// Function to write README file
function writeToFile(fileName, data) {
  // Use fs.writeFile to write the README file
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`${fileName} generated successfully!`);
  });
}

// Function call to initialize app
init();
