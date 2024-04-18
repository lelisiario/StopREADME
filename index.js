// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

//Writing the ReadME file
function writeToFile(generatedReadme, data) {
  try {
    fs.writeFileSync(generatedReadme, data);
    console.log(`${generatedReadme} generated successfully!`);
  } catch (err) {
    console.error(`Error writing ${generatedReadme}:`, err);
  }
}

//initiallizing the app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("generatedReadme", generateMarkdown({ ...responses }));
  });
}

//Questions for User
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "projectDescription",
        message: "Provide a description of your project here",
    },
    {
        type: "input",
        name: "installation",
        message: "Provide installation instructions here",
    },
    {
    type: "input",
    name: "usage",
    message: "How is your product used?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause", "None"],
  },
  {
      type: "input",
      name: "contributors",
      message: "Cite your sources and attributes here",
  },
  {
      type: "input",
      name: "tests",
      message: "What tests have you done?",
},
{
      type: "input",
      name: "questions",
      message: "Provide questions here",
},
{
  type: "input",
  name: "githubUsername",
  message: "What is your GitHub username?",
},
{
  type: "input",
  name: "email",
  message: "What is your email address?",
},
  ];
  


// Function call to initialize app
init();
