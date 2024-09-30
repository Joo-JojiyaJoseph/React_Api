import React from "react";
const Justifycentred = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',  // This will stack the h2 and button vertically
  textAlign: 'center', 
           // Add some padding (optional)
};
const buttonStyle = {
  marginTop: '20px'         // Add margin at the top of the button
};
const ContactField = () => {
  return (
    <>
      {/* <!-- contact-field --> */}
      <section className="search-field">
        <div className="auto-container">
          <div className="outer-container">
            <div className="title-text centred p_relative d_block">
              <h6>Contact Us Today</h6>
            </div>
            <div className="search-area">
            <div className="row clearfix" style={Justifycentred}>
                <h2>Let’s Build Something Great Together</h2>
                <button type="button" className="theme-btn btn-one" style={buttonStyle}> 
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- contact-field end --> */}
    </>
  );
};

export default ContactField;
