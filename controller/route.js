var express     = require('express');
var router      = express.Router();
const _         = require('lodash');
const f         = require('../form/employees');


router.post('/get_employees', async function(req, response, next) {
	var keyword = req.body.keyword || null;
	var a = await f.getEmployees(keyword);
	return response.json(a);
});

router.post('/save_employee', async function(req, response, next) {

	var name   = req.body.name || null;
	var email  = req.body.email || null;
	var status = req.body.status || 0;

	if(_.isNull(name)){
		return response.json({
				"error":{
					"code"    : 201,
					"message" : "name cannot be blank",
				}
			});
	}
	if(_.isNull(email)){
		return response.json({
				"error":{
					"code"    : 201,
					"message" : "email cannot be blank",
				}
			});
	}
	if(_.isNull(status)){
		return response.json({
				"error":{
					"code"    : 201,
					"message" : "status cannot be blank",
				}
			});
	}


	var a = await f.saveEmployee(name, email, status);
	return response.json(a);
});


module.exports = router;