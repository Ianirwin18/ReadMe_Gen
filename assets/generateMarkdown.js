// const to import "licenseLinks const"
const licenseLinks = require("./licenseLinks");

// function to generate md for README using questions answered
function generateMd(data) {

    // set url for license badge links
    data.licenseUrl = licenseLinks[data.license];

    // return md contents
    return `# ${data.title}
    
${data.licenseUrl}
    
## Description
${data.description}
## Table of Contents
* [Resources](#resources)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
    
## Resources
* [Node.js](https://nodejs.org/)
* [Inquirer.js](https://www.npmjs.com/package/inquirer)
    
## Installation 
To install dependencies, run the following in your terminal:
\`
${data.installation}
\`
## Usage
${data.usage}
## License
This repository is licensed under the ${data.license}
## Contribution
${data.contribution}
## Tests
To run tests, run the following in your terminal:
\`
${data.tests}
\`
## Questions
If you have any questions, please contact me at: 
* Email: [${data.email}](mailto:${data.email}). 
* GitHub: [${data.username}](${data.username}).
     
`;

}

// export object to index.js using "module.exports"
module.exports = generateMd;