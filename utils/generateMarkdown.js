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
  if (license !== "None") {
    // Replace the placeholders with the appropriate license badge URL
    return `![License](https://img.shields.io/badge/license-${license}-green)`;
  }
  return "";
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

      // Generate the license section based on the selected license
      let licenseText = '';
      if (data.license !== 'None') {
          licenseText = `## License
  
  This project is licensed under the ${data.license} license. See the [LICENSE](LICENSE) file for details.`;
      }

  return `
  # ${data.title}
  
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
  
  ${licenseText}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  For questions or feedback, please contact [${data.githubUsername}](https://github.com/${data.githubUsername}) or email [${data.email}](mailto:${data.email}).
  `;
  }

module.exports = generateMarkdown;