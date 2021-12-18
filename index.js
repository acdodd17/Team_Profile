//require inquirer packages
const inquirer = require('inquirer');

//require employees to create new employees with user input
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//require fs and createPage to create HTML for team profile page
const fs = require('fs');
const generatePage = require('./src/generatePage');

//create team array to store new employee objects 
const team = [];

//begin user prompts to get manager info
const createManager = () => {
    return inquirer.prompt([
        {
            type: 'input', 
            name: 'name',
            message: "What is the team manager's name?", 
            validate: value => {
                if (typeof value === 'string') {
                    return true;
                } else {
                    console.log('Please enter a valid name!');
                    return false
                }
            }
        }, 
        {
            type: 'input', 
            name: 'id',
            message: "What is the manager's employee ID?"
        },
        {
            type: 'input', 
            name: 'email',
            message: "What is the manager's email address?"
        }, 
        {
            type: 'input', 
            name: 'officeNum',
            message: "What is the manager's office number?"
        }
    ])
    .then(({name, id, email, officeNum}) => {
        //create new manager with input data
        const manager = new Manager(name, id, email, officeNum);
        // push new manager to team array
        team.push(manager);
        //return to menu to add new team members
        menu();
    });
};

const menu = () => {
    return inquirer.prompt(
        {
            type: 'confirm', 
            name: 'addEmployee',
            message: 'Do you want to add another employee to your team?',
        } 
    )
    .then (answer => {
        if (answer.addEmployee) {
            console.log('Adding new employee!')
            newEmployee();
        } else {
            console.log('Creating team profile!')
            createTeam();
        }
    }) 
};

const newEmployee = () => {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'employeeType',
            message: "Which type of employee would you like to add?",
            choices: ['Engineer', 'Intern', 'Go back']
        }
    )
    .then (response => {
        if (response.employeeType === 'Engineer') {
            createEngineer();
        } 
        else if(response.employeeType === 'Intern') {
            createIntern();
        } else {
            menu();
        }
    });
}

const createEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input', 
            name: 'name',
            message: "What is the engineer's name?", 
            validate: value => {
                if (value) {
                    return true;
                } else {
                    console.log('Please enter a valid name!');
                    return false
                }
            }
        }, 
        {
            type: 'input', 
            name: 'id',
            message: "What is the engineer's employee ID?"
        },
        {
            type: 'input', 
            name: 'email',
            message: "What is the engineer's email address?"
        }, 
        {
            type: 'input', 
            name: 'github',
            message: "What is the engineer's GitHub username?"
        }
    ])
    .then(({name, id, email, github}) => {
        //create new engineer with input data
        const engineer = new Engineer(name, id, email, github);
        // push new engineer to team array
        team.push(engineer);
        //return to menu to add new team members
        menu();
    });
};

const createIntern = () => {
    return inquirer.prompt([
        {
            type: 'input', 
            name: 'name',
            message: "What is the intern's name?", 
            validate: value => {
                if (value) {
                    return true;
                } else {
                    console.log('Please enter a valid name!');
                    return false
                }
            }
        }, 
        {
            type: 'input', 
            name: 'id',
            message: "What is the intern's employee ID?"
        },
        {
            type: 'input', 
            name: 'email',
            message: "What is the intern's email address?"
        }, 
        {
            type: 'input', 
            name: 'school',
            message: "What school does the intern attend?"
        }
    ])
    .then(({name, id, email, school}) => {
        //create new intern with input data
        const intern = new Intern(name, id, email, school);
        // push new intern to team array
        team.push(intern);
        //return to menu to add new team members or create team
        menu();
    });
}; 

const createTeam = () => {
    console.log("New team created!");
    const teamProfile = generatePage(team);
    //write team data to index.html file
    fs.writeFile('./dist/index.html', teamProfile, err => {
        if(err) {
            console.log(err);
            return;
        }
    })
};

createManager();
