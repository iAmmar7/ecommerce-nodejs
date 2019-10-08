const Sequelize = require('sequelize');

const UserModel = require('./models/User');

const { DATABASE_NAME, ROOT, PASSWORD, HOST, DIALECT } = require('./config/keys');

const sequelize = new Sequelize(DATABASE_NAME, ROOT, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const User = UserModel(sequelize, Sequelize);

sequelize
  .sync({ force: false })
  .then(() => console.log('Database and table created here!'))
  .catch(err => console.log('Database table creation error!'))

module.exports = { User }