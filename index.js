// TODO: Include packages needed for this application
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
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
