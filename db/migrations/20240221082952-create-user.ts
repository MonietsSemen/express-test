'use strict';

// const { QueryInterface, DataTypes} = require('sequelize');
// import { QueryInterface, DataTypes} from 'sequelize';
//import { QueryInterface, DataTypes} from 'sequelize'

import { QueryInterface, DataTypes} from 'sequelize'

/** @type {import(‘sequelize-cli’).Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
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
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('Users');
  }
};

// import { QueryInterface, DataTypes } from 'sequelize';
// /** @type {import(‘sequelize-cli’).Migration} */
// module.exports = {
//   async up(queryInterface: QueryInterface, Sequelize:typeof DataTypes) {
//     await queryInterface.createTable('Products', {
//       id: {
//         allowNull: false,
//           autoIncrement: true,
//           primaryKey: true,
//           type: Sequelize.INTEGER
//       },
//       name: {
//         type: Sequelize.STRING
//       },
//       price: {
//         type: Sequelize.DECIMAL
//       },
//       quantity: {
//         type: Sequelize.INTEGER
//       },
//       createdAt: {
//         allowNull: false,
//           type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//           type: Sequelize.DATE
//       }
//     });
//   },
//   async down(queryInterface:QueryInterface, Sequelize:any) {
//     await queryInterface.dropTable('Products');
//   }
// };