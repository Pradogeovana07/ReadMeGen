// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
var http = require('http');



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
  
});


function onRequest(request, response){
    response.writeHead(200, {'content-Type':'text/html'});
    fs.readFile('./index.html', null, function(error, data){
        if (error){
            response.writeFile(404);
            response.write('file not found');
        }else {
            response.write(data);
        }
        response.end();   
        
        
    });
    response.end();
}

http.createServer(onRequest).listen(3001);




















//  inquirer.prompt(questions, answers)`
// `

// # ${answers.title}

// ## Description
//  ${answers.description}

//  ## Installation
//   ${answers.installation}


//  ## Usage

//  ${answers.usage}


//  ## License

//  ${answers.license}



//   ## Contributing

//    ${answers.contributing}


//     ## Tests

//  ${answers.tests}



//   ${answers.questions}

//    )`;

// // // TODO: Create a function to write README file

//     const htmlPageContent = generateHTML(answers); 
//  function fs() {writeToFile('./README.md', (question, answers))
//      if (err) console.log('error', err);
//      else console.log('result', README.md);
//  }

// // TODO: Create a function to initialize app
// function config() {
//      fs.appendFile('log.txt', `${process.argv[2]}\n`, (err)=> err? console.log(err) : console.log('commit logged!')
// )
//  }

// // Function call to initialize app
// console.log(config.get("somequestion"));


