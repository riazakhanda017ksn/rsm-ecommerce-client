import React from 'react';
import blog from '../../utilis/data';
import BlogDetails from './BlogDetails';

const Blog = () => {
    return (
        <div className='blog'>
        <div className="mainBlog">
        {
            blog.map((item)=><BlogDetails item={item} key={item?.id}></BlogDetails>)
        }
        </div>
        </div>
    );
};

export default Blog;