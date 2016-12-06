//
//	USERS API CONTROLLER
//

//	DEPENDENCIES

var modelUtil = require('../../utils/model')
,	User = require('../../models/user');

//	ACTIONS

exports.add = function(req, res, next) {
	var user = new User();

	modelUtil.updateModelAttributes(req, user);

	user.save(function(err) {
		if (err) {
			next(err);
		}
	});

	res.status(200).json(user);
};