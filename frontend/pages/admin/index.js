import MainLayout from '../../components/MainLayout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';

const AdminIndex = () => {
	return (
		<MainLayout>
			<Admin>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-md-12 pt-5 pb-5'>
							<h3>Admin Dashboard</h3>
						</div>
						<div className='col-md-3 left-side pt-3'>
							<ul className='list-group'>
								<li className='list-group-item bg-primary'>
									<Link href='/admin/crud/category-tag'>
										<a>Create Categories</a>
									</Link>
								</li>
								<li className='list-group-item bg-primary'>
									<Link href='/admin/crud/category-tag'>
										<a>Create Tags</a>
									</Link>
								</li>
								<li className='list-group-item bg-primary'>
									<Link href='/admin/crud/blog'>
										<a>Create Blog</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className='col-md-9 right-side'>Right</div>
					</div>
				</div>
			</Admin>
		</MainLayout>
	);
};

export default AdminIndex;
