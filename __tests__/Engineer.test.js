const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    //mock engineer data
    const engineer = new Engineer('Penny', '1734', 'p3np13@gmail.com', 'p3np13');

    expect(engineer.name).toBe('Penny');
    expect(engineer.id).toBe('1734');
    expect(engineer.email).toBe('p3np13@gmail.com');
    expect(engineer.github).toBe('p3np13');
});

test('gets engineer attributes', () => {
    //mock engineer data
    const engineer = new Engineer('Penny', '1734', 'p3np13@gmail.com', 'p3np13');

    expect(engineer.getName()).toBe('Penny'); 
    expect(engineer.getId()).toBe('1734');
    expect(engineer.getEmail()).toBe('p3np13@gmail.com');
    expect(engineer.getGithub()).toBe('p3np13');
    expect(engineer.getRole()).toBe('Engineer');
});
