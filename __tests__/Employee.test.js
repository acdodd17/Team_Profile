const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    //mock employee data
    const employee = new Employee('Anna', 1734, 'acdodd17@gmail.com');

    expect(employee.name).toBe('Anna');
    expect(employee.id).toBe(1734);
    expect(employee.email).toBe('acdodd17@gmail.com');
});

test('gets employee name', () => {
    expect(employee.getName()).toBe('Anna');
})