import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import HomePage from './HomePage';
import DashboardPage from '../containers/DashboardPage';
import LoginPage from '../containers/LoginPage';
import SignUpPage from '../containers/SignUpPage';

import Auth from '../modules/Auth';

const Base = () => (
    <div>
        <div className="top-bar">
            <div className="top-bar-left">
                <NavLink to="/">React App</NavLink>
            </div>

            {Auth.isUserAuthenticated() ? (
                <div className="top-bar-right">
                    <Link to="/logout">Log out</Link>
                </div>
            ) : (
                <div className="top-bar-right">
                    <Link to="/login">Log in</Link>
                    <Link to="/signup">Sign up</Link>
                </div>
            )}

        </div>

        <Switch>
            {Auth.isUserAuthenticated() ? (
                <Route path="/" exact component={DashboardPage}/>
            ) : (
                <Route path="/" exact component={HomePage}/>
            )}

            <Route path="/login" exact component={LoginPage}/>
            <Route path="/signup" exact component={SignUpPage}/>

            <Route path="/logout" exact render={() => {
                Auth.deauthenticateUser();
                return (<Redirect to="/" />);
            }} />

        </Switch>

    </div>
);

export default Base;