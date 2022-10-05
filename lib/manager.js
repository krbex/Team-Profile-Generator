const Employee = require('./employee');

// In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber
// getRole()—overridden to return 'Manager'

class Manager extends Employee {
    constructor(officeNumber, id, name, email) {
        super(id, name, email);
        this.officeNumber = officeNumber;
    };

    getRole() {
        return 'Manager';
    };
};

module.exports = Manager