import {Model, Sequelize, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional} from 'sequelize';

class SchoolClass extends Model<InferAttributes<SchoolClass>, InferCreationAttributes<SchoolClass>> {
  declare id: CreationOptional<number>;
  declare schoolId: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

export const init = (sequelize: Sequelize) =>
  SchoolClass.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    schoolId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'schools',
        key: 'id'
      }
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
    tableName: 'SchoolClasses'
  }
)

export const associate = ({models}: Sequelize) => {
  SchoolClass.belonsTo(models.School, {
    as: 'school',
    constraints: false,
    foreignKey: 'schoolId',
  })
}


export default SchoolClass;