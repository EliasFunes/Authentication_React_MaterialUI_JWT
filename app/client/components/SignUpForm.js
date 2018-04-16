import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

const SignUpForm = ({
                        onSubmit,
                        onChange,
                        errors,
                        user
                    }) => (

            <form action="/" onSubmit={onSubmit}>

                <h2 className="card-heading">Sign Up</h2>

                {errors.summary && <p className="error-message">{errors.summary}</p> }

                <Grid item>
                    <TextField
                        label={(errors.name ? errors.name : "Name")}
                        name="name"
                        error={(errors.name ? true : false)}
                        onChange={onChange}
                        value={user.name}
                        margin="normal"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label={(errors.email ? errors.email : "Email")}
                        name="email"
                        error={(errors.email ? true : false)}
                        onChange={onChange}
                        value={user.email}
                        margin="normal"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label={(errors.password ? errors.password : "Password")}
                        type="password"
                        name="password"
                        onChange={onChange}
                        error={(errors.password ? true : false)}
                        value={user.password}
                        margin="normal"
                    />
                </Grid>
                <Grid item>
                    <Button variant="raised" color="primary" type="submit">
                        Create New Account
                    </Button>
                </Grid>
            </form>

)

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

export default SignUpForm;

