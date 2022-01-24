import React, { useEffect } from 'react';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import "aos/dist/aos.css";
import Aos from "aos";

const ShopTitle = () => {
    useEffect(() => {
        Aos.init({
          duration: 2000,
        });
      }, [0]);
    const date = new Date()
    const year =  date.getFullYear()
    return (
        <div className='other-bg'>
             <div className='shop-title' 
             data-aos="fade-up"
             >
              <>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="content-of-shop" data-aos="fade-right">
             
            <span><FormatQuoteOutlinedIcon/></span>
            <span className="border-top"></span>
            <h1>GORGEOUS FASHION COLLECTION FOR THE AWESOME {year} SUMMER SEASON OF THE CANNES FESTIVAL</h1>
            
            <span className="border-top"></span>
                    </div>
                </div>
                </div>
            </>
            </div>
        </div>  
     
       
    );
};

export default ShopTitle;