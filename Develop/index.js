// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateFile = require("./assets/template.js");
const writeFile = require("./assets/generator.js");

// TODO: Create an array of questions for user input

const questions = ()=> {
    
    return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the name of your project?",
        validate: projName => {
            if (projName) {
                return true;
            } else {
                console.log("Please enter a name for the project!");
                return false
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project",
        validate: projDescription => {
            if (projDescription) {
                return true;
            } else {
                console.log("Please enter a description for the project!");
                return false
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Enter the installation instruction for your project",
        validate: install => {
            if (install) {
                return true;
            } else {
                console.log("Please enter an instruction!");
                return false
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Enter the usage of your project",
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log("Please enter the usage of your project!");
                return false
            }
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter the contributors to your project",
        validate: contribGuide => {
            if (contribGuide) {
                return true;
            } else {
                console.log("Please enter the contributors!");
                return false
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "Enter the test instructions for your project",
        validate: testInfo => {
            if (testInfo) {
                return true;
            } else {
                console.log("Please enter the test instructions!");
                return false
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username.",
        validate: testInfo => {
            if (testInfo) {
                return true;
            } else {
                console.log("Please enter your GitHub username!");
                return false
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address.",
        validate: testInfo => {
            if (testInfo) {
                return true;
            } else {
                console.log("Please enter your email!");
                return false
            }
        }
    }
])
};

function start() {
    console.log(`

    Let's make a README file for your project!
    
    `);
    return questions();
}


start()
    .then(data => {
        return generateFile(data);
    })
    .then(readMeFile => {
        return writeFile(readMeFile);
    })
    .catch(err => {
        console.log(err);
    });