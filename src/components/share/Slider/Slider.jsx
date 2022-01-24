import React from 'react';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
const Slider = () => {
    return (
    <div className='bg mb-2'>
 <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active first-img animate__animated animate__fadeInUp">
    <div className="container">
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <div className="img_text">
                     <h1> BREATH TAKING </h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quos sed cupiditate veniam dicta,
           quas necessitatibus voluptatibus, velit suscipit inventore recusandae soluta nihil sunt
            similique repudiandae.</p>
            <button>SHOP NOW <ArrowRightAltOutlinedIcon/></button>
            </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    </div>
    <div className="carousel-item second-img animate__animated animate__fadeInUp">
      
        <div className="container">
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <div className="img_text">
                     <h1>LIKE A DREAM</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quos sed cupiditate veniam dicta,
           quas necessitatibus voluptatibus, velit suscipit inventore recusandae soluta nihil sunt
            similique repudiandae.</p>
            <button>SHOP NOW <ArrowRightAltOutlinedIcon/></button>
            </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    </div>
    <div className="carousel-item third-img animate__animated animate__fadeInUp">
    <div className="container">
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <div className="img_text">
                     <h1>MODEL DRESS</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quos sed cupiditate veniam dicta,
           quas necessitatibus voluptatibus, velit suscipit inventore recusandae soluta nihil sunt
            similique repudiandae.</p>
            <button>SHOP NOW <ArrowRightAltOutlinedIcon/></button>
            </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    </div>
    <div className="carousel-item four-img animate__animated animate__fadeInUp">
    <div className="container">
            <div className="row">
                
                <div className="col-lg-6">
                    <div className="img_text customize">
                     <h1>NEW SEASON</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quos sed cupiditate veniam dicta,
           quas necessitatibus voluptatibus, velit suscipit inventore recusandae soluta nihil sunt
            similique repudiandae.</p>
            <button className='customize'>SHOP NOW <ArrowRightAltOutlinedIcon/></button>
            </div>
                </div>
                <div className="col-lg-6"></div>
            </div>
        </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Slider;