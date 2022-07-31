const uuid = require('uuid');

const members = [
    {
        id: 'test',
        name: 'Test EazyId',
        email: 'test@gmail.com',
        status: 'active',
    },
    {
        id:uuid.v4(),
        name: 'John Doe',
        email: 'john@doe.com',
        status: 'inactive'
    },
    {
        id:uuid.v4(),
        name: 'Will Smith',
        email: 'will@smith.com',
        status: 'active'
    },
    {
        id:uuid.v4(),
        name: 'Will Smith jr',
        email: 'will@smithjr.com',
        status: 'inactive'
    }
];

module.exports = members;