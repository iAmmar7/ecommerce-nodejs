const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const {
  DATABASE_NAME,
  ROOT,
  PASSWORD,
  HOST,
  DIALECT
} = require('../config/keys');

let sequelize = new Sequelize(DATABASE_NAME, ROOT, PASSWORD, {
  host: HOST,
  dialect: DIALECT
})
var db = {};

fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function (file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;