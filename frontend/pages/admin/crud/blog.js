import MainLayout from '../../../components/MainLayout';
import Admin from '../../../components/auth/Admin';
import BlogCreate from '../../../components/crud/BlogCreate';
import Link from 'next/link';

const Blog = () => {
	return (
		<MainLayout>
			<Admin>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-md-12 pt-5 pb-5'>
							<h2>Create a new blog</h2>
						</div>
						<div className='col-md-12'>
							<BlogCreate />
						</div>
					</div>
				</div>
			</Admin>
		</MainLayout>
	);
};

export default Blog;