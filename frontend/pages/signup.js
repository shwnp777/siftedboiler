import MainLayout from '../components/MainLayout';
import SignupComponent from '../components/auth/SignupComponent';

const Signup = () => {
	return (
		<MainLayout>
			<div>
				<div className='row auth-div'>
					<div className='col-md-4 col-sm-8 col-xs-12 offset-sm-2 offset-md-4'>
						<SignupComponent />
					</div>
				</div>
			</div>

			<style jsx>{`
				.auth-div {
					display: block;
					margin-top: 80px;
				}
			`}</style>
		</MainLayout>
	);
};

export default Signup;
