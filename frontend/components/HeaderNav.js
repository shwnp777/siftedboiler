import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { signout, isAuth } from '../actions/auth';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const HeaderNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<Navbar color='primary' dark expand='md'>
				<Link href='/'>
					<NavLink
						style={{ cursor: 'pointer', color: '#ffffff' }}
						className='font-weight-bold'
					>
						<img
							className='logo-size'
							src='/static/img/logolight.png'
							alt='logo'
						/>
					</NavLink>
				</Link>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='ml-auto' navbar>
						<React.Fragment>
							<NavItem>
								<Link href='/blogs'>
									<NavLink>Blogs</NavLink>
								</Link>
							</NavItem>
						</React.Fragment>
						{!isAuth() && (
							<React.Fragment>
								<NavItem>
									<Link href='/signin'>
										<NavLink style={{ cursor: 'pointer' }}>Signin</NavLink>
									</Link>
								</NavItem>
								<NavItem>
									<Link href='/signup'>
										<NavLink style={{ cursor: 'pointer' }}>Signup</NavLink>
									</Link>
								</NavItem>
							</React.Fragment>
						)}

						{isAuth() && isAuth().role === 0 && (
							<NavItem>
								<Link href='/user'>
									<NavLink style={{ cursor: 'pointer' }}>{`${
										isAuth().firstName
									}'s Dashboard`}</NavLink>
								</Link>
							</NavItem>
						)}

						{isAuth() && isAuth().role === 1 && (
							<NavItem>
								<Link href='/admin'>
									<NavLink style={{ cursor: 'pointer' }}>{`${
										isAuth().firstName
									}'s Dashboard`}</NavLink>
								</Link>
							</NavItem>
						)}

						{isAuth() && (
							<NavItem>
								<NavLink
									style={{ cursor: 'pointer' }}
									onClick={() => signout(() => Router.replace(`/signin`))}
								>
									Signout
								</NavLink>
							</NavItem>
						)}
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default HeaderNav;
