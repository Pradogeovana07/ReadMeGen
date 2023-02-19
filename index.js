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
        name:"questions"
    }
]).then((data)=> {
    const filename = `${data.name}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) => {
        err ? console.log(err) : console.log("Your README was created!")
    });
  
})



















 inquirer.prompt(questions, answers)`(


 # ${answers.title}

 ## Description
  ${answers.description}

  ## Installation
   ${answers.installation}


  ## Usage

  ${answers.usage}


  ## License

 ${answers.license}



## Contributing

   ${answers.contributing}


     ## Tests

  ${answers.tests}



  ${answers.questions}

   )`;
 
// // // TODO: Create a function to write README file

function buildReadme(){
    fs.writeFileSync('README.md')
}

// // TODO: Create a function to initialize app
 function init() {
    inquirer.prompt(questions)
    .then(function(data){
        fs.appendFileSync('README.md');
        console.log(data)
    
})
 };

// // Function call to initialize app
init()
  



