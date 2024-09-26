import React, { useState } from 'react';
import shape_9 from '/home/shape-9.png';
import faq_1 from '/home/faq-1.jpg';
import faq_2 from '/home/faq-2.jpg';
import './home.js'; 

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* <!-- faq-section --> */}
      <section className="faq-section p_relative">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image_block_five">
                <div className="image-box">
                  <div className="shape" style={{ backgroundImage: `url(${shape_9})` }}></div>
                  <figure className="image image-1"><img src={faq_1} alt="FAQ Image 1" /></figure>
                  <figure className="image image-2"><img src={faq_2} alt="FAQ Image 2" /></figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_five">
                <div className="content-box p_relative d_block ml_30">
                  <div className="sec-title p_relative mb_50">
                    <h5 className="d_block fs_17 lh_25 fw_medium mb_9">FAQ’S</h5>
                    <h2 className="d_block fs_40 lh_50 fw_bold mb_25">Frequently Asked Question</h2>
                    <p className="fs_16">All of our services are backed by our 100% satisfaction guarantee Our electricians.</p>
                  </div>
                  <ul className="accordion-box">
                    {faqData.map((item, index) => (
                      <li key={index} className={`accordion block ${activeIndex === index ? 'active-block' : ''}`}>
                        <div className={`acc-btn ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                          <div className="icon-outer"><i className="far fa-angle-down"></i></div>
                          <h5>{item.question}</h5>
                        </div>
                        <div className={`acc-content ${activeIndex === index ? 'current' : ''}`} style={{ display: activeIndex === index ? 'block' : 'none' }}>
                          <div className="text">
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- faq-section end --> */}
    </>
  );
};

// Sample FAQ data
const faqData = [
  {
    question: 'Do You Do Residential Work?',
    answer: 'Lorem ipsum dolor sit elit consectur sed eiusmod tempor set aliquat enim minim veniam exercitation ullamco nis laboris aliquip commodo.'
  },
  {
    question: 'Are You Licensed and Insured?',
    answer: 'Lorem ipsum dolor sit elit consectur sed eiusmod tempor set aliquat enim minim veniam exercitation ullamco nis laboris aliquip commodo.'
  },
  {
    question: 'Do You Do Commercial Electrical Repair?',
    answer: 'Lorem ipsum dolor sit elit consectur sed eiusmod tempor set aliquat enim minim veniam exercitation ullamco nis laboris aliquip commodo.'
  }
];

export default Faq;
