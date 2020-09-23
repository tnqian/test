'use strict';
module.exports = function (sequelize, DataTypes) {
  var model = sequelize.define('employee_commisions', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
      employee_id     : DataTypes.INTEGER,
      amount          : DataTypes.DOUBLE,
      created_at      : DataTypes.DATE,
      updated_at      : DataTypes.DATE,
      deleted_at      : DataTypes.DATE
  }, {
    tableName: 'employee_commisions'
  });

  return model;
}