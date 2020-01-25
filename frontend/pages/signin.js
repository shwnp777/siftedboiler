import MainLayout from '../components/MainLayout';
import SigninComponent from '../components/auth/SigninComponent';

const Signin = () => {
	return (
		<MainLayout>
			<div>
				<div className='row auth-div'>
					<div className='col-md-4 col-sm-8 col-xs-12 offset-sm-2 offset-md-4'>
						<SigninComponent />
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

export default Signin;
