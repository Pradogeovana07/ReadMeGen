// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
var http = require('http');

const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
// function userQuestions(){
inquirer.prompt([
    {
        type:"input",
        message:"What is the title of your project?",
        name:"title"
    },
    {
        type:"input",
        message:"Describe your project",
        name:"description"
    },
    {
        type:"input",
        message:"Are there any usage instructions?",
        name:"usage"
    },
    {
        type:"list",
        message:"Do you want to include a license?",
        name:"license", 
        choices:
            [
                
                "MIT",
                "Apache_2.0",
                "The_Unlicense"
            ]
    },
    {
        type:"input",
        message:"Are the contribution guidelines?",
        name:"contributing"
    },
    {
        type:"input",
        message:"Are there any tests for this project?",
        name:"tests"
    },
    {
        type:"input",
        message:"What is your Github username?",
        name:"github"
    }
]).then((data)=> {
    const filename = `README.md`;

    fs.writeFile(filename, generateMarkdown(data), (err) => {
        err ? console.log(err) : console.log("Your README was created!")
    });
  
});