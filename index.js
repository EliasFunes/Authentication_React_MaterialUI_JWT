const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');

// connect to the database and load models
require('./server/models').connect(config.dbUri);


const app = express();

//tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

//tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended:false }));

//pass the passport middleware
app.use(passport.initialize());

//load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

//pass the authentication checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

//routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

const router = require('./server/routes/router');
app.use("*", router);

const port = 3000;
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})

//REFERENCES FROM => 1) https://vladimirponomarev.com/blog/authentication-in-react-apps-creating-components
//					 2) https://vladimirponomarev.com/blog/authentication-in-react-apps-jwt