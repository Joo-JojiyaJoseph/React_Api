import React from 'react'

const Funfact = () => {
  return (
    <>
      {/* <!-- funfact-section --> */}
        <section className="funfact-section p_relative centred bg-color-2">
            <div className="auto-container">
                <div className="inner-container p_relative">
                    <div className="counter-block-one wow slideInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="icon-box p_relative d_block fs_60"><i className="icon-38"></i></div>
                            <div className="count-outer count-box">
                                <span className="count-text" data-speed="1500" data-stop="90">300+</span>
                            </div>
                            <p>Successful projects</p>
                        </div>
                    </div>
                    <div className="counter-block-one wow slideInUp animated" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="icon-box p_relative d_block fs_60"><i className="icon-39"></i></div>
                            <div className="count-outer count-box">
                                <span className="count-text" data-speed="1500" data-stop="2.6">300+</span><span></span>
                            </div>
                            <p>Satisfied Clients</p>
                        </div>
                    </div>
                    <div className="counter-block-one wow slideInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="icon-box p_relative d_block fs_60"><i className="icon-40"></i></div>
                            <div className="count-outer count-box">
                                <span className="count-text" data-speed="1500" data-stop="35">200+</span>
                            </div>
                            <p>Experienced Staff</p>
                        </div>
                    </div>
                    <div className="counter-block-one wow slideInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="icon-box p_relative d_block fs_60"><i className="icon-41"></i></div>
                            <div className="count-outer count-box">
                                <span className="count-text" data-speed="1500" data-stop="10">3+</span>
                            </div>
                            <p>Awards Win</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- funfact-section --> */}
    </>
  )
}

export default Funfact