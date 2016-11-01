//
//	SERVER CONFIGURATIONS
//

//	DEPENDENCIES

var bodyParser = require('body-parser')
,	compression = require('compression')
,	expressSession = require('express-session')
,	morgan = require('morgan')
,	passport = require('passport');

//	CONFIGURATIONS

module.exports = function(app, express) {
	app.set('views', 'app/views');
	app.set('view engine', 'ejs');

	app.use(compression());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended:true
	}));
	app.use(express.static('pub'));
	app.use(expressSession({
		cookie:{
			secure:false
		},
		resave:false,
		saveUninitialized:false,
		secret:process.env.DEMO_SECRET
	}));
	app.use(morgan('dev'));
	app.use(passport.initialize());
	app.use(passport.session());

	return {
		getDBURI:function() {
			return process.env.DEMO_DB;
		},
		getPort:function() {
			return process.env.DEMO_PORT;
		}
	};
};