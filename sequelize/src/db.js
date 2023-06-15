const { Sequelize } = require('sequelize');
const user = "postgres";
const pass = "1sqlsql2";
const port = 5432;
const dbName = 'demo';
const { Band } = require('./models/Band');
const { Album } = require('./models/Album');

const sequelize = new Sequelize(`postgres://${user}:${pass}@localhost:${port}/${dbName}`,
{logging:false}
);


// sequelize.authenticate()
// .then(()=>{
//     console.log('success ddbb')
// })
// .catch((error)=>{
//     console.log(error.message)
// })

Band(sequelize);
Album(sequelize);

module.exports = { sequelize }