import MainLayout from '../../../components/MainLayout';
import Admin from '../../../components/auth/Admin';
import Link from 'next/link';
import Category from '../../../components/crud/Category';
import Tag from '../../../components/crud/Tag';

const CategoryTag = () => {
	return (
		<MainLayout>
			<Admin>
				<div className='container-fluid'>
					<div className='row p-3'>
						<div className='col-md-12 pt-5 pb-5'>
							<h4>Manage Categories and Tags</h4>
						</div>
						<div className='align-cat-tag'>
							<div className='col-lg-6 p-4 m-1 cat-tag-divs'>
								<h4>Categories</h4>
								<div className='container form-cat-div'>
									<Category />
								</div>
							</div>
							<div className='col-lg-6 p-4 m-1 cat-tag-divs'>
								<h4>Tags</h4>
								<div className='container form-cat-div'>
									<Tag />
								</div>
							</div>
						</div>
					</div>
				</div>
			</Admin>
		</MainLayout>
	);
};

export default CategoryTag;
