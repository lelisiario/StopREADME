// Function to return a license section
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
  
This project is licensed under the ${license} license. See the [LICENSE](LICENSE) file for details.`;
  }
  return "";
}
// Function to return a license badge
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![GitHub license](https://github.com/drknzz/GitHub-Achievements)`;
  }
  return "";
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

${licenseSection}

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

For questions or feedback, please contact [${data.lelisiario}](https://github.com/${data.lelisiario})
`;
}


module.exports = generateMarkdown;