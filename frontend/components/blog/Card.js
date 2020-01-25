import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';

const Card = ({ blog }) => {
	const showBlogCategories = blog =>
		blog.categories.map((c, i) => (
			<Link key={i} href={`/categories/${c.slug}`}>
				<a className='mr-1 ml-1 mt-3'>{c.name}</a>
			</Link>
		));

	const showBlogTags = blog =>
		blog.tags.map((t, i) => (
			<Link key={i} href={`/tags/${t.slug}`}>
				<a className='mr-1 ml-1 mt-3'>{t.name}</a>
			</Link>
		));

	return (
		<div className='card-div'>
			<div className='card' style={{ width: '18rem' }}>
				<img
					className='img img-fluid'
					style={{ maxHeight: '150px', width: 'auto' }}
					src={`${API}/blog/photo/${blog.slug}`}
					alt={blog.title}
				/>

				<div className='card-body'>
					<Link href={`/blogs/${blog.slug}`}>
						<a>
							<h5 className='card-title'>{blog.title}</h5>
						</a>
					</Link>
					<section className='tags-cat-btn'>
						{showBlogCategories(blog)}
						{showBlogTags(blog)}
					</section>

					<p className='card-text'>{renderHTML(blog.excerpt)}</p>
					<Link href={`/blogs/${blog.slug}`}>
						<a className='btn btn-primary'>Read more</a>
					</Link>
				</div>
				<p className='author-info pl-2 pr-2'>
					Written by {blog.postedBy.firstName} | Published{' '}
					{moment(blog.updatedAt).fromNow()}
				</p>
			</div>
		</div>
	);
};

export default Card;
