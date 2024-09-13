import React from 'react'
import gallery_image from '/gallery/gallery1.jpg'

const GallerySection = () => {


    const gallerys = [
        {
          id: 1,
          image: gallery_image,
          title: 'House Wiring Repair',
          category: 'Installation',
          filterClass: 'all product finance business',
        },
        {
            id: 2,
            image: gallery_image,
            title: 'House Wiring Repair',
            category: 'Installation',
            filterClass: 'all product finance business',
          },
      
    
      ];
      
  return (
    <>
      <section className="project-page-two">
        <div className="auto-container">
         
        <div className="auto-container">
          <div className="upper-box">
            <div className="sec-title p_relative">
              <h5 className="d_block fs_17 lh_25 fw_medium mb_9"></h5>
              <h2 className="d_block fs_40 lh_50 fw_bold">Our Recent Works</h2>
            </div>
            {/* <div className="filters">
              <ul className="filter-tabs filter-btns clearfix">
                <li className="active filter" data-role="button" data-filter=".all">
                  All
                </li>
                <li className="filter" data-role="button" data-filter=".analytis">
                  Analytis
                </li>
                <li className="filter" data-role="button" data-filter=".finance">
                  Finance
                </li>
                <li className="filter" data-role="button" data-filter=".business">
                  Business
                </li>
                <li className="filter" data-role="button" data-filter=".corporate">
                  Corporate
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="outer-container">
          <div className="items-container row clearfix">
            {gallerys.map((gallery) => (
              <div key={gallery.id} className={`col-lg-3 col-md-6 col-sm-12 masonry-item small-column ${gallery.filterClass}`}>
                <div className="gallery-block-one">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src={gallery.image} alt={gallery.title} />
                    </figure>
                    <div className="view-btn">
                      <a href={gallery.image} className="lightbox-image" data-fancybox="gallery">
                        <i className="icon-28"></i>
                      </a>
                    </div>
                    <div className="text">
                      <h4>
                        <a href="gallery-details.html">{gallery.title}</a>
                      </h4>
                      <span>{gallery.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default GallerySection