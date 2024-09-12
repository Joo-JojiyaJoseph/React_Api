import React from 'react'
import page_title_image from '/gallery/page-title.jpg'

const Banner = () => {
  return (
    <>
    {/* <!-- Page Title --> */}
        <section class="page-title centred">
            <div class="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{backgroundImage:`url(${page_title_image})`}}></div>
            <div class="auto-container">
                <div class="content-box">
                    <h2>Projects 2</h2>
                    <ul class="bread-crumb clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li>Projects 2</li>
                    </ul>
                </div>
            </div>
        </section>
        {/* <!-- End Page Title --> */}

    </>
  )
}

export default Banner