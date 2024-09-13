import React from 'react'
import page_title_image from '/page-title.jpg'

const HeroService = () => {
  return (
    <>
     {/* <!-- Page Title --> */}
        <section class="page-title centred">
        <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{backgroundImage:`url(${page_title_image})`}}></div>
            <div class="auto-container">
                <div class="content-box">
                    <h2>Services</h2>
                    <ul class="bread-crumb clearfix">
                        <li><a href="">Home</a></li>
                        <li>Services</li>
                    </ul>
                </div>
            </div>
        </section>
        {/* <!-- End Page Title --> */}
    </>
  )
}

export default HeroService