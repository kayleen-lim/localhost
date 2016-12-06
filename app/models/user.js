//
//	USER MODEL
//

//	DEPENDENCIES

var bcrypt = require('bcrypt')
,	mongoose = require('mongoose');

//	SCHEMA

var UserSchema = new mongoose.Schema({
	coverImageProfileURL:String,
	coverImageThumbnailURL:String,
	destination:{
		ref:'Destination',
		type:mongoose.Schema.Types.ObjectId
	},
	displayURL:String,
	emailAddress:{
		required:true,
		type:String
	},
	firstName:String,
	hireDate:Date,
	isHost:Boolean,
	jobTitle:String,
	lastName:String,
	locationName:String,
	name:String,
	password:{
		required:true,
		type:String
	},
	preferredName:String,
	profileImageURL:String,
	username:{
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

//	INSTANCE METHODS

UserSchema.methods.validatePassword = function(password, next) {
	bcrypt.compare(password, this.password, function(err, valid) {
		if (err) {
			return next(err);
		}

		return next(null, valid);
	});
};

//	PRES

UserSchema.pre('save', function(next) {
	var user = this;

	if (!user.isModified('password')) {
		return next();
	}

	bcrypt.genSalt(parseInt(process.env.DEMO_SALT_ROUNDS), function(err, salt) {
		if (err) {
			return next(err);
		}

		bcrypt.hash(user.password, salt, function(err, hash) {
			if (err) {
				return next(err);
			}

			user.password = hash;

			next();
		});
	});
});

//	EXPORT

var User = mongoose.model('User', UserSchema);

module.exports = User;