import React from 'react';
import categories from '../../utilis/Categories';
import Categories from './Categories';

const Category = () => {
    return (
        <div className='category'>
            {
                categories.map((category)=><Categories category={category} key={category?.id}></Categories>)
            }
        </div>
    );
};

export default Category;