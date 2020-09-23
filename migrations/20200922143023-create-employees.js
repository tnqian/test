'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employees', {
      employee_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name            : Sequelize.STRING(50),
      email           : Sequelize.STRING(50),
      status          : Sequelize.INTEGER,
      created_at      : Sequelize.DATE,
      updated_at      : Sequelize.DATE,
      deleted_at      : Sequelize.DATE
    }, { charset : "utf8" })
    .then(() => queryInterface.addIndex('employees', ['status','deleted_at']))
    .then(() => queryInterface.addIndex('employees', ['name']))
    .then(() => queryInterface.addIndex('employees', ['created_at']))
    .then(() => queryInterface.addIndex('employees', ['deleted_at']))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('employees');
  }
};