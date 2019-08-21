const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
module.exports = new Sequelize('auth_db', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  operatorAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});


