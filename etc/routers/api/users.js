//
//	USERS API ROUTER
//

//	DEPENDENCIES

var authController = require('../../../app/controllers/auth')
,	usersAPIController = require('../../../app/controllers/api/users')
,	usersAPIRouter = require('express').Router();

//	ROUTES

usersAPIRouter.route('/')

	.post(authController.authenticateAPI, usersAPIController.add);

//	EXPORT

module.exports = usersAPIRouter;