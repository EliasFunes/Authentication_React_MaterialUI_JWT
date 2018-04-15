import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const SignUpForm = ({
                        onSubmit,
                        onChange,
                        errors,
                        user
                    }) => (
    <Card className="container">
        <CardContent>
            <form action="/" onSubmit={onSubmit}>
                <h2 className="card-heading">Sign Up</h2>

                {errors.summary && <p className="error-message">{errors.summary}</p> }

                <div className="field-line">
                    <TextField
                        label={(errors.name ? errors.name : "Name")}
                        name="name"
                        error={(errors.name ? true : false)}
                        onChange={onChange}
                        value={user.name}
                    />
                </div>

                <div className="field-line">
                    <TextField
                        label={(errors.email ? errors.email : "Email")}
                        name="email"
                        error={(errors.email ? true : false)}
                        onChange={onChange}
                        value={user.email}
                    />
                </div>

                <div className="field-line">
                    <TextField
                        label={(errors.password ? errors.password : "Password")}
                        type="password"
                        name="password"
                        onChange={onChange}
                        error={(errors.password ? true : false)}
                        value={user.password}
                    />
                </div>

                <div className="button-line">
                    <Button variant="raised" color="primary" type="submit">
                        Create New Account
                    </Button>
                </div>

                Already have an account? <Link to={'/login'}>Log in</Link>

            </form>
        </CardContent>
    </Card>
)

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

export default SignUpForm;

