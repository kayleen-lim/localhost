//
//	LOCALES ROUTER
//

//	DEPENDENCIES

var authController = require('../../app/controllers/auth')
,	localesController = require('../../app/controllers/locales')
,	localesRouter = require('express').Router();

//	ROUTES

localesRouter.route('/')

	.get(authController.validate, localesController.index)
	.post(authController.validate, localesController.add);

localesRouter.route('/new')

	.get(authController.validate, localesController.new);

localesRouter.route('/:id')

	.delete(authController.validate, localesController.remove)
	.get(authController.validate, localesController.view)
	.post(authController.validate, localesController.update);

localesRouter.route('/:id/edit')

	.get(authController.validate, localesController.edit);

//	EXPORT

module.exports = localesRouter;