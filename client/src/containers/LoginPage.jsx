import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm.jsx';


class LoginPage extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			errors : {},
			user: {
				email:'',
				password:''
			}
		};

		this.processForm = this.proccessForm.bind(this);
		this.changeUser = this.changeUser.bind(this);
	}


	proccessForm(event) {
		event.preventDefault();

		console.log('email:', this.state.email);
		console.log('password:', this.state.password);
	}

	changeUser(event){
		const field = event.target.name;
		const user = this.state.user;
		user[field] = event.target.value;

		this.setState({
			user
		});
	}

	render(){
		return (
			<LoginForm
				onSubmit={this.proccessForm}
				onChange={this.changeUser}
				errors={this.state.errors}
				user={this.state.user}
			/>
		);
	}

}

export default LoginPage;