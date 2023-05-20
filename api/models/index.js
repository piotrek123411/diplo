const fs = require('fs');
const path = require('path');

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const basename = path.basename(__filename);

const models = {};

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(DataTypes, sequelize);
    models[model.name] = model;
  });

module.exports = models;