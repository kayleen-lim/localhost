//
//	ROOT ROUTER
//

//	DEPENDENCIES

var authController = require('../../app/controllers/auth')
,	rootController = require('../../app/controllers/root')
,	rootRouter = require('express').Router();

//	ROUTES

rootRouter.route('/')

	.get(rootController.index);

rootRouter.route('/signin')

	.get(rootController.signin)
	.post(authController.authenticate);

rootRouter.route('/signout')

	.get(rootController.signout);

rootRouter.route('/signup')

	.get(rootController.signup);

//	EXPORT

module.exports = rootRouter;