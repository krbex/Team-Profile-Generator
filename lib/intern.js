const Employee = require('./employee');
const Manager = require('./manager')

// In addition to Employee's properties and methods, Intern will also have the following:
// school
// getSchool()
// getRole()—overridden to return 'Intern'

class Intern extends Employee {
    constructor(school, id, name, email) {
        super(id, name, email);
        this.school = school;
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return 'Intern';
    };
};

module.exports = Intern