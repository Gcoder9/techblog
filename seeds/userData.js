const { User } = require('../models');

const userData = [
    {
        "name": "Cassie Chambers",
        "email": "Cassie@gmail.com",
        "password": "password1234"
    },
    {
        "name": "Alexa Tyler",
        "email": "Alexa.tyler@gmail.com",
        "password": "password1234"
    },
    {
        "name": "Jessica Simpson",
        "email": "JessicaSim@gmail.com",
        "password": "password1234"
    },
    
];

const seedData = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedData;