import { Sequelize } from 'sequelize';
import config from "./config.json"

const env = process.env.NODE_ENV || 'development';
const connections: Sequelize = checkConnection();

function checkConnection() {
  if (process.env.NODE_ENV) {
    return new Sequelize(process.env[env], config);
  } else {
    return new Sequelize(config.database, config.username, config.password, config);
  }
}

export default connections;