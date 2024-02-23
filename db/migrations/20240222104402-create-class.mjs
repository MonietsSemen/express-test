'use strict';
import { QueryInterface, DataTypes } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.createTable('SchoolClass', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      schoolName: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'school',
          key: 'name'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.dropTable('SchoolClass');
  }
};