
 
  
  import React from "react";
  import { Link } from "react-router-dom";
  import "./footer.css";
  import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

  
  const Footer = () => {
   

    return (
      <div className="grow-relation">
  
  
        <div className="footer_container">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="about-eventor">
                  <h5>
                    <a
                      href="https://event-management-e60c2.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      rsm-ecommerce.com
                    </a>
                  </h5>
                  <p>
                    The ability to understand what key stakeholders want from your
                    event is critical. These people may not be in the event
                    industry.
                  </p>
                  <a
                    className="readmore"
                    href="https://event-management-e60c2.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    readmore <ArrowRightAltOutlinedIcon/>
                  </a>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-tit">
                  <h5>Useful Links</h5>
                  <ul>
                    <li>
                      <Link to="/about-us">
                         About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/packages">
                         Packages
                      </Link>
                    </li>
                    <li>
                      <Link to="/testimonial">
                        Testimonial
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                         Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-tit">
                  <h5>Discover</h5>
                  <ul>
                    <li>Buy & Sell</li>
                    <li>Merchant</li>
                    <li>Giving Back</li>
                    <li>Help & Support</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-tit">
                  <h5>About</h5>
                  <ul>
                    <li>Staff</li>
                    <li>Team</li>
                    <li>Careers</li>
                    <li>Blog</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-tit">
                  <h5>Follow Us</h5>
                  <ul>
                    <li>
                      <a
                        className="facebook"
                        href="https://www.facebook.com/Eventor-108900054948711"
                        target="_blank"
                        rel="noreferrer"
                      >
                        facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://google.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        google
                      </a>
                    </li>
                    <li>
                      <a
                        className="instagram"
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="usefull-link-section">
              <div className="row">
                <div className="col-lg-3">
                  <div className="our-main-link">
                    <p>Our Useful Links</p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="our-main-link">
                    <ul>
                      <li>
                        <Link to="/about-us">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/packages">
                           Packages
                        </Link>
                      </li>
                      <li>
                        <Link to="/testimonial">
                           Testimonial
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2">
                  <a
                    className="readmore dont-need-margin"
                    href="https://event-management-e60c2.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See all <ArrowRightAltOutlinedIcon/>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center all_right">
              <p>© 2021 All Rights Reserved by </p>
              <a
                className="readmore dont-need-margin"
                href="https://event-management-e60c2.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
              RSM-ecommerce
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;