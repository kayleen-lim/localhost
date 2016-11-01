//
//	MODEL UTIL
//

exports.getAttributes = function(object) {
	var attributes = [];

	object.schema.eachPath(function(path) {
		attributes.push(path);
	});

	return attributes;
};

exports.updateModelAttributes = function(req, object) {
	var attributes = exports.getAttributes(object);

	var params = req.body;

	for (var param in params) {
		if (params.hasOwnProperty(param) && (attributes.indexOf(param) > -1)) {
			object[param] = params[param];
		}
	}
};