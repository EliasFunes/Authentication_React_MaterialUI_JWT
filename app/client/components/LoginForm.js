import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card, {  CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const LoginForm = ({
                       onSubmit,
                       onChange,
                       errors,
                       successMessage,
                       user
                   }) => (
    <Card className="container">
        <CardContent>
            <form action="/" onSubmit={onSubmit}>
                <h2 className="card-heading">Login</h2>

                {successMessage && <p className="success-message">{successMessage}</p>}
                {errors.summary && <p className="error-message">{errors.summary}</p>}

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
                        error={(errors.password ? true : false)}
                        onChange={onChange}
                        value={user.password}
                    />
                </div>
                <div className="button-line">
                    <Button variant="raised" color="primary" type="submit">
                        Log in
                    </Button>
                </div>

                Don't have an account? <Link to={'/signup'}>Create one</Link>

            </form>
        </CardContent>
    </Card>

)

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    successMessage: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
}

export default LoginForm;