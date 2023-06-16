const { Sequelize, Op } = require('sequelize');
const modelCharacter = require('./models/Character.js');
const modelAbility = require('./models/Ability.js');
const modelRole = require('./models/Role.js');

const user = 'postgres';
const pass = '1sqlsql2';
const dbName = 'henrydatabase';
const port = 5432;

const db = new Sequelize(
   `postgres://${user}:${pass}@localhost:${port}/${dbName}`,
   {
      logging: false,
   }
);

modelCharacter(db);
modelAbility(db);
modelRole(db);

module.exports = {
   ...db.models,
   db,
   Op,
};
