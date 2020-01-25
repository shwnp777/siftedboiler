import HeaderNav from './HeaderNav';

const MainLayout = ({ children }) => (
	<div>
		<HeaderNav />
		{children}
	</div>
);

export default MainLayout;
