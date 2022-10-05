const Employee = require('./employee');
const Manager = require('./manager')

// In addition to Employee's properties and methods, Engineer will also have the following:
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'

class Engineer extends Employee {
    constructor(github, id, name, email) {
        super(id, name, email);
        this.github = github;
    };

    getGithub() {
        return this.github;
    };

    getRole() {
        return 'Engineer';
    };
};

module.exports = Engineer