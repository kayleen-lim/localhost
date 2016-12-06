//
//	LOCALES ROUTER
//

//	DEPENDENCIES

var authController = require('../../app/controllers/auth')
,	destinationsController = require('../../app/controllers/destinations')
,	destinationsRouter = require('express').Router();

//	ROUTES

destinationsRouter.route('/')

	.get(authController.validate, destinationsController.index)
	.post(authController.validate, destinationsController.add);

destinationsRouter.route('/new')

	.get(authController.validate, destinationsController.new);

destinationsRouter.route('/:id')

	.delete(authController.validate, destinationsController.remove)
	.get(authController.validate, destinationsController.view)
	.post(authController.validate, destinationsController.update);

destinationsRouter.route('/:id/edit')

	.get(authController.validate, destinationsController.edit);

//	EXPORT

module.exports = destinationsRouter;