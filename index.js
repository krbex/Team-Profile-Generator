const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateMockup = require('./src/generateMockup');
const fs = require('fs').promises;
const inquirer = require('inquirer');
const employee = new Employee();

function employeeContinue() {
    return inquirer.prompt([
        {
            type: 'list',
            choices: ['Engineer', 'Intern', 'No I am finished'],
            name: 'anotherOne',
            message: 'Would you like to add an engineer or intern?'
        }
    ])
    .then((answers) => {
        if(answers.anotherOne === 'Engineer'){
            engineerAdd();
        } else if(answers.anotherOne === 'Intern'){
            internAdd();
        } else {
            console.log('Your team webpage is finished!')
        }
    }).then(generateMockup.generateTeam(employeeArray));
};

const employeeArray = []
managerAdd();
function managerAdd() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email?'
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is the managers office number?'
        },
    ])
    .then((answers) =>{
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
        employeeArray.push(manager);
        console.log(`Lets set up your team ${answers.name}!`);
        employeeContinue();
    });
};

function engineerAdd() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineers id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineers email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the managers GitHub username?'
        },
    ])
    .then((answers) =>{
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employeeArray.push(engineer);
        console.log(`Welcome to the team ${answers.name}!`);
        employeeContinue();
    });
}
function internAdd() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the interns name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the interns id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the interns email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does the intern go to?'
        },
    ])
    .then((answers) =>{
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employeeArray.push(intern);
        console.log(`Welcome to the team ${answers.name}!`);
        employeeContinue();
    });
}

module.exports = {
    employeeArray
}