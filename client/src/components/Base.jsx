import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import HomePage from './HomePage.jsx';
import LoginPage from '../containers/LoginPage.jsx';
import SignUpPage from '../containers/SignUpPage.jsx';

const Base = () => (
	<div>
		<div className="top-bar">
			<div className="top-bar-left">
				<NavLink to="/">React App</NavLink>
			</div>
			<div className="top-bar-right">
				<Link to="/login">Log in</Link>
				<Link to="/signup">Sign up</Link>
			</div>
		</div>

			<Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/login" exact component={LoginPage}/>
                <Route path="/signup" exact component={SignUpPage}/>
            </Switch>

	</div>
);

export default Base;