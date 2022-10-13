const Employee = require('./employee');

// In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber
// getRole()—overridden to return 'Manager'

class Manager extends Employee {
    constructor(officeNum, id, name, email) {
        super(id, name, email);
        this.officeNum = officeNum;
    };

    getRole() {
        return 'Manager';
    };

    getOfficenum() {
        return this.officeNum;
    };
};

module.exports = Manager