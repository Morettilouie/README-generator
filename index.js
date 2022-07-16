// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        message: 'Describe your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What steps did you take to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'credits'
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    return `
    # ${data.title}

    ## Description
    ${data.description}

    ## Installation
    ${data.installation}
    
    ## Usage
    ${data.usage}

    ## Credits
    ${data.credits}

    ## License
    ## Badges
    ## Features
    ## How to Contribute
    ## Tests
    `
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            fs.writeFile(`README.md`, writeToFile(data), err => 
                err ? console.log(err) : console.log('README.md file created successfully!')
            );
        });
}

// Function call to initialize app
init();
