const Employee = require('../lib/employee')

describe('Employee', () => {
    it('Creates a new employee', () => {
        const emp = new Employee();
        expect(typeOf(emp)).toBe('object')
    });

    it('Adds an email from the constructor', () => {
        const em = 'test@test.com'
        const emp = new Manager('Eric', 1, em, 1)
        expect(emp.em).toBe()
    })
})