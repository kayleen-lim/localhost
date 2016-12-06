//
//	LOCALHOST MODEL
//

//	DEPENDENCIES

var mongoose = require('mongoose');

//	SCHEMA

var LocaleHostSchema = new mongoose.Schema({
	locale:{
		ref:'Locale',
		type:mongoose.Schema.Types.ObjectId
	},
	name:{
		required:true,
		type:String
	}
},
{
	timestamps:{
		createdAt:'createDate',
		updatedAt:'updateDate'
	}
});

//	EXPORT

var LocaleHost = mongoose.model('LocaleHost', LocaleHostSchema);

module.exports = LocaleHost;