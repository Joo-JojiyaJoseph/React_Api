import React from 'react'
import page_title_image from '/page-title.jpg'
import { Link } from 'react-router-dom'

const HeroProject = () => {

  return (
    <>
       {/* <!-- Page Title --> */}
        <section class="page-title centred">
        <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{backgroundImage:`url(${page_title_image})`}}></div>
            <div class="auto-container">
                <div class="content-box">
                    <h2>Projects</h2>
                    <ul class="bread-crumb clearfix">
                    <li><Link to="home">Home</Link></li>
                        <li>Projects</li>
                    </ul>
                </div>
            </div>
        </section>
        {/* <!-- End Page Title --> */}

    </>
  )
}

export default HeroProject