import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm.jsx';


class LoginPage extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			errors:{},
			user:{
				email:'',
				password:''
			}
		};

		this.processForm = this.processForm.bind(this);
		this.changeUser = this.changeUser.bind(this);
	}


	processForm(event) {
		event.preventDefault();
		
		const email = encodeURIComponent(this.state.user.email);
		const password = encodeURIComponent(this.state.user.password);
		const formData = `email=${email}&password=${password}`;

		const xhr = new XMLHttpRequest();
		xhr.open('post', '/auth/login');
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhr.responseType = 'json';
		xhr.addEventListener('load', () => {
			if (xhr.status === 200){
				//success
				//change the component-container state
				this.setState({
					errors:{}
				});
			}else{
				//failure
				const errors = xhr.response.errors ? xhr.response.errors : {};
				errors.summary = xhr.response.message;	
				this.setState({
					errors
				});
			}
		});
		xhr.send(formData);
	}

	changeUser(event) {
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
				onSubmit={this.processForm}
				onChange={this.changeUser}
				errors={this.state.errors}
				user={this.state.user}
			/>
		);
	}

}

export default LoginPage;