import {InferAttributes, InferCreationAttributes, Model, Sequelize, DataTypes} from 'sequelize';

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare firstName?: string;
  declare lastName?: string;
  declare email: string;
}

export const init = (sequelize: Sequelize) =>
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

export default User
