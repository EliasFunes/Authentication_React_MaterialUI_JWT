import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import HomePage from './HomePage';
import DashboardPage from '../containers/DashboardPage';
import LoginPage from '../containers/LoginPage';
import SignUpPage from '../containers/SignUpPage';


import Auth from '../modules/Auth';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

import TextField from 'material-ui/TextField';

const styles = theme => ({
    flex: {
        flex: 1,
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    input: {
        color: "white",
        label: "white"
    }
});

function Base(props){
    // return(
    //     <div>
    //         <div className="top-bar">
    //             <div className="top-bar-left">
    //                 <NavLink to="/">React App</NavLink>
    //             </div>
    //
    //             {Auth.isUserAuthenticated() ? (
    //                 <div className="top-bar-right">
    //                     <Link to="/logout">Log out</Link>
    //                 </div>
    //             ) : (
    //                 <div className="top-bar-right">
    //                     <Link to="/login">Log in</Link>
    //                     <Link to="/signup">Sign up</Link>
    //                 </div>
    //             )}
    //
    //         </div>
    //
    //         <Switch>
    //             {Auth.isUserAuthenticated() ? (
    //                 <Route path="/" exact component={DashboardPage}/>
    //             ) : (
    //                 <Route path="/" exact component={HomePage}/>
    //             )}
    //
    //             <Route path="/login" exact  render={()=> {
    //                 if(typeof localStorage == "undefined"){
    //                     return (<Redirect to="/" />);
    //                 }else{
    //                     return (<LoginPage/>);
    //                 }
    //             }}/>
    //
    //             <Route path="/signup" exact component={SignUpPage}/>
    //
    //             <Route path="/logout" exact render={() => {
    //                 Auth.deauthenticateUser();
    //                 return (<Redirect to="/" />);
    //             }} />
    //
    //         </Switch>
    //
    //     </div>
    // );
    const { classes } = props;
    return(
        <Grid container spacing={0} justify="center" alignItems="center">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        React Material UI example
                    </Typography>

                    <LoginPage/>
                </Toolbar>
            </AppBar>
            <Grid item lg={6}>
            </Grid>
            <Grid item lg={6} container justify="center" alignItems="center" direction="column">
                <SignUpPage/>
            </Grid>
        </Grid>
    );

}

export default withStyles(styles)(Base)