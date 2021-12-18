const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    //mock intern data
    const intern = new Intern('Penny', '1734', 'p3np13@gmail.com', 'UNC');

    expect(intern.name).toBe('Penny');
    expect(intern.id).toBe('1734');
    expect(intern.email).toBe('p3np13@gmail.com');
    expect(intern.school).toBe('UNC');
});

test('gets intern attributes', () => {
    //mock intern data
    const intern = new Intern('Penny', '1734', 'p3np13@gmail.com', 'UNC');

    expect(intern.getName()).toBe('Penny'); 
    expect(intern.getId()).toBe('1734');
    expect(intern.getEmail()).toBe('p3np13@gmail.com');
    expect(intern.getSchool()).toBe('UNC')
    expect(intern.getRole()).toBe('Intern');
});
