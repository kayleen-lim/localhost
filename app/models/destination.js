//
//	DESTINATION MODEL
//

//	DEPENDENCIES

var mongoose = require('mongoose');

//	SCHEMA

var DestinationSchema = new mongoose.Schema({
	address:{
		required:true,
		type:String,
	},
	stateProvincePrefecture:{
		required:true,
		type:String
	},
	city:{
		required:true,
		type:String
	},
	country:{
		required:true,
		type:String
	},
	description:String,
	lat:String,
	long:String,
	postalCode:String,
	users:[{
		ref:'User',
		type:mongoose.Schema.Types.ObjectId
	}],
	name:{
		required:true,
		type:mongoose.Schema.Types.ObjectId
	}
},
{
	timestamps:{
		createdAt:'createDate',
		updatedAt:'updateDate'
	}
});

//	EXPORT

var Destination = mongoose.model('Destination', DestinationSchema);

module.exports = Destination;