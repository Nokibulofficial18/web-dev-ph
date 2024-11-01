import PropTypes from 'prop-types'; 
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id,title, cover,author,author_img,reading_time,posted_date,
        hashtags
    } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center pt-4 mb-4 '>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex flex-row gap-5 items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='text-2xl text-red-500'><FaBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx)=> <span key={idx} className='mr-3'><a href='#'>{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(id,reading_time)} className='text-purple-600 font-semibold underline'>Mark as read</button>
        </div>
    );
};
Blog.prototype = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}
export default Blog;