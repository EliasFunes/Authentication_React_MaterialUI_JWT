import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const LoginForm = ({
                       onSubmit,
                       onChange,
                       errors,
                       user
                   }) => (
    <form action="/" onSubmit={onSubmit}>
        <TextField
            label={(errors.email ? errors.email : "Email")}
            name="email"
            error={(errors.email ? true : false)}
            onChange={onChange}
            value={user.email}
        />
        <TextField
            label={(errors.password ? errors.password : "Password")}
            type="password"
            name="password"
            error={(errors.password ? true : false)}
            onChange={onChange}
            value={user.password}
        />
        <Button color="inherit" type="submit">Login</Button>
    </form>

)

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    successMessage: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
}

export default LoginForm;