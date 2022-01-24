import React from 'react';

const BlogDetails = ({item}) => {
    return (
        <div className='blog-item' 
        style={{ background: `url(${item?.image})`,backgroundPosition:'center', backgroundRepeat:'no-repeat', height:'100vh',cursor:"pointer" }}
        data-aos={`${item?.fade}`}
        >
            <div className="flex-item-content">
                 <span> {
                item?.title
            }</span> 
            </div>
         
        </div>
    );
};

export default BlogDetails;