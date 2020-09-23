'use strict';
module.exports = function (sequelize, DataTypes) {
	var model = sequelize.define('employees', {
		employee_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name            : DataTypes.STRING(50),
		email           : DataTypes.STRING(50),
		status          : DataTypes.INTEGER,
		created_at      : DataTypes.DATE,
		updated_at      : DataTypes.DATE,
		deleted_at      : DataTypes.DATE
	}, {
		tableName: 'employees'
	});

	return model;
}