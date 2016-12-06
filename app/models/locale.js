//
//	LOCALE MODEL
//

//	DEPENDENCIES

var mongoose = require('mongoose');

//	SCHEMA

var LocaleSchema = new mongoose.Schema({
	description:String,
	localeHosts:[{
		ref:'LocaleHost',
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

var Locale = mongoose.model('Locale', LocaleSchema);

module.exports = Locale;