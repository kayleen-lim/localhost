//
//	LOCALES CONTROLLER
//

//	DEPENDENCIES

var Destination = require('../models/destination')
,	modelUtil = require('../utils/model');

//	ACTIONS

exports.add = function(req, res, next) {
	var destination = new Destination();

	modelUtil.updateModelAttributes(req, destination);

	destination.save(function(err) {
		if (err) {
			next(err);
		}
	});

	res.redirect('/l/' + destination.id);
};

exports.edit = function(req, res, next) {
	Destination
		.findById(req.params.id)
		.exec(function(err, destination) {
			if (err) {
				next(err);
			}

			res.render('destinations/edit', {
				destination:destination,
				user:req.user
			});
		});
};

exports.index = function(req, res, next) {
	Destination
		.find()
		.populate('users')
		.exec(function(err, destinations) {
			if (err) {
				next(err);
			}

			res.render('destinations/index', {
				destinations:destinations,
				user:req.user
			});
		});
};

exports.new = function(req, res, next) {
	var destination = new Destination();

	res.render('destinations/new', {
		destination:destination,
		user:req.user
	});
};

exports.remove = function(req, res, next) {
	Destination
		.findById(req.params.id)
		.exec(function(err, destination) {
			if (err) {
				next(err);
			}

			destination.remove(function(err) {
				if (err) {
					next(err);
				}
			});

			res.redirect('/l');
		});
};

exports.update = function(req, res, next) {
	Destination
		.findById(req.params.id)
		.exec(function(err, destination) {
			if (err) {
				next(err);
			}

			destination.remove(function(err) {
				if (err) {
					next(err);
				}
			});

			res.redirect
		});
};

exports.view = function(req, res, next) {
	Destination
		.findById(req.params.id)
		.exec(function(err, destination) {
			if (err) {
				next(err);
			}

			res.render('destinations/view', {
				destination:destination,
				user:req.user
			});
		});
};