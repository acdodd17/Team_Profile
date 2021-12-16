//Manager class -> Employee add officeNumber and change role
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = "", id = "", email = "", officeNumber = "") {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    getOffice() {
        return this.officeNumber;
    };
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;