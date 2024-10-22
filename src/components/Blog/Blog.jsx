import PropTypes from 'prop-types';
import { Bookmark } from 'lucide-react';

const Blog = ({ blog }) => {
    const { cover_img, author_img, author_name, posted_date, reading_time, blog_title, hashtags } = blog;

    return (
        <div className=' mb-8 rounded-xl pb-2'>
            <img src={cover_img} className='w-full rounded-xl h-80 object-cover' />
            <div className='flex my-4 items-center justify-between'>
                <div className='flex items-center gap-6'>
                    <img src={author_img} className='w-14' />
                    <div>
                        <h3 className='text-2xl font-bold text-[#111]'>{author_name}</h3>
                        <p className='text-[#11111199] font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <p className='flex items-center text-[#11111199] text-xl font-bold'>{reading_time} min read <span><Bookmark></Bookmark></span></p>
            </div>
            <h2 className='text-[#111] text-4xl font-bold mb-4'>{blog_title}</h2>
            <p className='mt-4'>
                {hashtags.map(hashtag => <a href='#' key={hashtag} className='text-[#11111199] text-xl font-medium mr-3'>#{hashtag}</a>)}
            </p>
            <button className='text-xl font-semibold text-[#6047EC] underline mt-5'>Mark as read</button>
        </div>
    )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;