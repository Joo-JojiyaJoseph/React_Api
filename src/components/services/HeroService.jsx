import React from 'react'
import page_title_image from '/page-title.jpg'
import { Link } from 'react-router-dom'

const HeroService = () => {
  return (
    <>
     {/* <!-- Page Title --> */}
        <section className="page-title centred">
        <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{backgroundImage:`url(${page_title_image})`}}></div>
            <div className="auto-container">
                <div className="content-box">
                    <h2>Services</h2>
                    <ul className="bread-crumb clearfix">
                    <li><Link to="home">Home</Link></li>
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