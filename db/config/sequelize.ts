import { Sequelize } from 'sequelize';
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const connections: Sequelize = checkConnection();

function checkConnection() {
  if (config.use_env_variable) {
    return new Sequelize(process.env[config.use_env_variable], config);
  } else {
    return new Sequelize(config.database, config.username, config.password, config);
  }
}

export default connections;