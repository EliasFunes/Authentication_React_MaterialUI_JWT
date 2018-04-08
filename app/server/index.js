const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('../../config/index');

import path from 'path';

// connect to the database and load models
require('./models/index').connect(config.dbUri);


const app = express();

const assets = express.static(path.join(__dirname, '../'));
const estatico = express.static(path.join(__dirname, '../../static/'));

app.use(assets);
app.use(estatico);

//tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended:false }));

//pass the passport middleware
app.use(passport.initialize());

//load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

//pass the authentication checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);

//routes
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);


import router from './routes/router';
app.get("*", router);

const port = 3000;
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})

//REFERENCES FROM => 1) https://vladimirponomarev.com/blog/authentication-in-react-apps-creating-components
//					 2) https://vladimirponomarev.com/blog/authentication-in-react-apps-jwt