//
//	USERS ROUTER
//

//	DEPENDENCIES

var authController = require('../../app/controllers/auth')
,	usersController = require('../../app/controllers/users')
,	usersRouter = require('express').Router();

//	ROUTES

usersRouter.route('/')

	.post(usersController.add);

usersRouter.route('/new')

	.get(usersController.new);

usersRouter.route('/:id')

	.delete(authController.validate, usersController.remove)
	.get(authController.validate, usersController.view)
	.post(authController.validate, usersController.update);

usersRouter.route('/:id/edit')

	.get(authController.validate, usersController.edit);

//	EXPORT

module.exports = usersRouter;