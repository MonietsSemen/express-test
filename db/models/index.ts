import { Options, Sequelize } from 'sequelize';
const env = process.env.NODE_ENV || 'development';
import pg from 'pg';
import * as SchoolClass from './class';
import * as School from './school';
import * as User from './user';
import connections from '../config/sequelize';

pg.defaults.parseInt8 = true;

type ModelInstances = {
  init(sequelize: Sequelize): void;
  associate?(sequelize: Sequelize): void;
};

type Config = {
  username: string;
  password: string | null;
  database: string;
  host: string;
  dialect: 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql';
};

const models: ModelInstances[] = [
  SchoolClass,
  School,
  User,
];
const options: Config = connections[env] as Config;

export const sequelize = new Sequelize(options as Options);

models.forEach((model) => model.init(sequelize));
models.forEach((model) => {
  if (model.associate) {
    model.associate(sequelize);
  }
});

export default { ...sequelize.models };


/*

'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
*/
