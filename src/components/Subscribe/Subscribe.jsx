import React from 'react';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
const Subscribe = () => {
    return (
        <div style={{background:'#D8D8D8'}}>
        <div className='subscribe' 
        
        data-aos='fade-left'
        >
            <div className="row px-5">
              <div className="col-lg-6"></div>
              <div className="col-lg-6">
                  <div className="need-flex-for-subscribe-section">
                    <div>
                          <h3>Subscribe now </h3>
                  <h1>
                       Subscribe and get 10% discount</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Nostrum saepe dolor, magnam voluptatum unde sit, quam labore quo adipisci id tenetur, 
                  quidem hic. Delectus!</p>
                 <form action="">
                <div className='input-button-flex'>
                <input type="email" name="" id="" placeholder='WRITE YOUR EMAIL' />
                <button>Subscribe <span className='display-none'><ArrowRightAltOutlinedIcon/></span></button>
                  </div>
                 </form>
                 
                    </div>
                    
                  </div>
                  
                 
              </div>
              
            </div>
        </div>
        </div>
    );
};

export default Subscribe;