const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    //mock employee data
    const employee = new Employee('Penny', '1734', 'p3np13@gmail.com');

    expect(employee.name).toBe('Penny');
    expect(employee.id).toBe('1734');
    expect(employee.email).toBe('p3np13@gmail.com');
});

test('gets employee attributes', () => {
    //mock employee data
    const employee = new Employee('Penny', '1734', 'p3np13@gmail.com');

    expect(employee.getName()).toBe('Penny'); 
    expect(employee.getId()).toBe('1734');
    expect(employee.getEmail()).toBe('p3np13@gmail.com');
    expect(employee.getRole()).toBe('Employee');
});


    
   