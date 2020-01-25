import { useState, useEffect } from 'react';
import { signup, isAuth } from '../../actions/auth';
import Router from 'next/router';

const SignupComponent = () => {
	const [values, setValues] = useState({
		userName: '',
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		error: '',
		loading: false,
		message: '',
		showForm: true
	});

	const {
		userName,
		firstName,
		lastName,
		email,
		password,
		error,
		loading,
		message,
		showForm
	} = values;

	useEffect(() => {
		isAuth() && Router.push(`/`);
	}, []);

	const handleSubmit = e => {
		e.preventDefault();
		// console.table({
		// 	userName,
		// 	firstName,
		// 	lastName,
		// 	email,
		// 	password,
		// 	error,
		// 	loading,
		// 	message,
		// 	showForm
		// });
		setValues({ ...values, loading: true, error: false });
		const user = { userName, firstName, lastName, email, password };

		signup(user).then(data => {
			if (data.error) {
				setValues({ ...values, error: data.error, loading: false });
			} else {
				setValues({
					...values,
					userName: '',
					firstName: '',
					lastName: '',
					email: '',
					password: '',
					error: '',
					loading: false,
					message: data.message,
					showForm: false
				});
			}
		});
	};

	const handleChange = name => e => {
		setValues({ ...values, error: false, [name]: e.target.value });
	};

	const showLoading = () =>
		loading ? <div className='alert alert-info'>Loading...</div> : '';
	const showError = () =>
		error ? <div className='alert alert-danger'>{error}</div> : '';
	const showMessage = () =>
		message ? <div className='alert alert-info'>{message}</div> : '';

	const signupForm = () => {
		return (
			<div className='auth-form'>
				<h3 className='auth-title'>Register</h3>
				<form onSubmit={handleSubmit}>
					<div className='form-group'>
						<input
							value={userName}
							onChange={handleChange('userName')}
							type='text'
							className='form-control'
							placeholder='Username'
						/>
					</div>
					<div className='form-group'>
						<input
							value={firstName}
							onChange={handleChange('firstName')}
							type='text'
							className='form-control'
							placeholder='First name'
						/>
					</div>
					<div className='form-group'>
						<input
							value={lastName}
							onChange={handleChange('lastName')}
							type='text'
							className='form-control'
							placeholder='Last name'
						/>
					</div>
					<div className='form-group'>
						<input
							value={email}
							onChange={handleChange('email')}
							type='email'
							className='form-control'
							placeholder='Email'
						/>
					</div>

					<div className='form-group'>
						<input
							value={password}
							onChange={handleChange('password')}
							type='password'
							className='form-control'
							placeholder='Password'
						/>
					</div>

					<div>
						<button className='btn btn-primary'>Signup</button>
					</div>
				</form>
				<style jsx>{`
					.form-control {
						border: none;
						background-color: #efefef;
						height: 45px;
					}
					h3.auth-title {
						color: #2c3e50;
						text-align: center;
						margin: 20px auto;
					}
					.auth-form {
						width: 95%;
						display: block;
						margin: 0 auto;
					}
				`}</style>
			</div>
		);
	};

	return (
		<React.Fragment>
			{showError()}
			{showLoading()}
			{showMessage()}
			{showForm && signupForm()}
		</React.Fragment>
	);
};

export default SignupComponent;
