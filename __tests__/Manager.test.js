const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    //mock manager data
    const manager = new Manager('Penny', '1734', 'p3np13@gmail.com', '101');

    expect(manager.name).toBe('Penny');
    expect(manager.id).toBe('1734');
    expect(manager.email).toBe('p3np13@gmail.com');
    expect(manager.officeNumber).toBe('101'); 
});

test('gets manager attributes', () => {
    //mock manager data
    const manager = new Manager('Penny', '1734', 'p3np13@gmail.com', '101');

    expect(manager.getName()).toBe('Penny'); 
    expect(manager.getId()).toBe('1734');
    expect(manager.getEmail()).toBe('p3np13@gmail.com');
    expect(manager.getOffice()).toBe('101'); 
    expect(manager.getRole()).toBe('Manager');
});
