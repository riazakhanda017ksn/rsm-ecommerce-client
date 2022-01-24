import React from 'react';

const Contact = () => {
    return (
        <div style={{background:'#E7E7E7'}}>
        <div className='Contact' 
        data-aos='fade-right'
        >
            <div className="px-5">
                <div className="row">
                    <div className="col-lg-6">
                               <h4>If you need any help please</h4>
               <h1>Get in touch</h1>
               <p>If you would like to hear from me, please email me. Please feel free to contact us if you have a question or just want to say hi.
               Please expect a reply from me as soon as possible!
                </p>

                <form action="">
                    <div className="_first_div">
                    <input type="text" placeholder='username' />
                    <input type="text"  placeholder='number' />
                    </div>
                    <div className="main-input-div">
                        <input type="email" name="" id="" placeholder='email' /> <br />
                        <textarea name="" id="" cols="10" rows="6" placeholder='message'></textarea>
                        <button>Send Message</button>
                    </div>
                </form>
                    </div>
                </div>
            </div>
     
        </div>    
        </div>
    );
};

export default Contact;