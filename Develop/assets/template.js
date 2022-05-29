const generateReadme = arr => {

    return `
# ${arr.name}
## Description
${arr.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)
## Installation: 
- ${arr.installation}
## Usage:
- ${arr.usage}
## Contributors:
- ${arr.contribution}
## Tests:
- ${arr.test}
## Questions:
Feel free to rech out with any questions. 
- **Github Profile:** https://github.com/${arr.github}
- **Email Address:**  ${arr.email}.`;
}

module.exports = templateData => {
    return generateReadme(templateData);
}