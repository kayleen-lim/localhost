//
//	DESTINATION MODEL
//

//	DEPENDENCIES

var mongoose = require('mongoose');

//	SCHEMA

var DestinationSchema = new mongoose.Schema({
	description:String,
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