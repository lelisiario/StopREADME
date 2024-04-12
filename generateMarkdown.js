// Function to return a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return "";
  }
}

// Function to return the license link
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[MIT License](https://opensource.org/licenses/MIT)";
  } else if (license === "GNU GPLv3") {
    return "[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "Apache 2.0") {
    return "[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return "";
  }
}

// Function to return the license section of README
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License

This project is licensed under the terms of the ${license}. For more details, please see the [${license}](#license) section above.`;
  } else {
    return "";
  }
}

 
// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Project Title](#project-title)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${licenseSection}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For questions or feedback, please contact [${data.username}](https://github.com/${data.username}) or email [${data.email}](${data.email}).
`;
}

module.exports = generateMarkdown;

