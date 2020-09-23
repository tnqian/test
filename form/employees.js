// ./form/employees.js
const _         = require('lodash');
const m         = require('../models');
const Sequelize = require('sequelize');
const Op        = Sequelize.Op;

let getEmployees = async (keyword) => {
	return new Promise(function(success,fail){
		// default filter soft delete data
		var query = {
			deleted_at   : null,
		};

		if(!_.isNull(keyword) && keyword != '' && !_.isUndefined(keyword)){
			var item = {
				[Op.or]: {
					name: {
						[Op.like]: `%${keyword}%`
					},
					email: {
						[Op.like]: `%${keyword}%`
					},
				}
			};
			query = Object.assign(query,item);
		}

		m.employees.findAndCountAll({
			where   : query,
			order: [
				['employee_id', 'DESC'],
			],
		}).then(function(obj) {

			// set default value ;
			var employees = [];
			_.each(obj.rows,function (o, key){
				employees.push(o);
			});
			// return employees;
			success(employees)
		});
	});
}

let saveEmployee = async (name, email, status) => {
	return new Promise(function(success,fail){
		var employee_id = null;
		m.employees.create({
			name       : name,
			email      : email,
			status     : status,
			created_at : new Date(),
		}).then(function(obj) {

			// employee_id = obj.employee_id;
			success(obj)

		}).catch(function (err) {
			// throw err message
			return success({
				"error":{
					"code"    : 201,
					"message" : err,
				}
			})
		})
	});
}

exports = module.exports = {};
exports.getEmployees               = getEmployees;
exports.saveEmployee               = saveEmployee;