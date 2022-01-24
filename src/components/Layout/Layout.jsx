import React from 'react';
import Blog from '../Blog/Blog';
import Category from '../Category/Category';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Navbar from '../share/Navbar/Navbar';
import Slider from '../share/Slider/Slider';
import ShopTitle from '../ShopTitle/ShopTitle';
import Subscribe from '../Subscribe/Subscribe';


const Layout = () => {
    return (
        <>
           <Navbar/>
            <div className='overflow-x-need'>
            <Slider/>
            <Category/>
            <ShopTitle/>
            <Blog/>
            <Contact/>
            <Subscribe/>
            <Footer/>
        </div>
        </>
         
    );
};

export default Layout;