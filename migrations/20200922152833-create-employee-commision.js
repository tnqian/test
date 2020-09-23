'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employee_commisions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      employee_id     : Sequelize.INTEGER,
      amount          : Sequelize.DOUBLE,
      created_at      : Sequelize.DATE,
      updated_at      : Sequelize.DATE,
      deleted_at      : Sequelize.DATE
    }, { charset : "utf8" })
    .then(() => queryInterface.addIndex('employee_commisions', ['amount']))
    .then(() => queryInterface.addIndex('employee_commisions', ['created_at']))
    .then(() => queryInterface.addIndex('employee_commisions', ['deleted_at']))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('employee_commisions');
  }
};


