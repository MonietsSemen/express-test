import {Model, Sequelize, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional} from 'sequelize';

class School extends Model<InferAttributes<School>, InferCreationAttributes<School>> {
  declare id: number;
  declare name: string;
  declare address: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

export const init = (sequelize: Sequelize) =>
School.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  {
    sequelize,
    tableName: 'Schools'
  }
)

export const associate = ({ models }: Sequelize) => {
  School.hasMany(models.SchoolClass, {
    as: 'SchoolClasses',
    constraints: false,
    foreignKey: 'schoolId',
  });
}

export default School;