import React from 'react';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

const Categories = ({category}) => {
    console.log(category);
    return (
        <div className='categories' 
        style={{ background: `url(${category?.image})`,backgroundPosition:'center', backgroundRepeat:'no-repeat', height:'100vh' }}>
           <div className="content_of_category">
               <h4>{category.title}</h4>
               <button>Shop Now <ArrowRightAltOutlinedIcon/> </button>
           </div>
        </div>
    );
};

export default Categories;