import React, { useContext, useEffect, useState } from 'react'
import gallery_image from '/gallery/gallery1.jpg';
import './Gallery.css';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

const GallerySection = () => {

  const { baseUrlImage } = useContext(AppContext);
  const [gallerys, setGallerys] = useState([]);
  const [error, setError] = useState(null);
  
  async function getGallery() {
      try {
          const res = await fetch("/api/gallery");
          if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`);
          }
          const data = await res.json();
          setGallerys(data.gallerys);
          console.log(data.gallerys)
        } 
        catch (error) {
          setError(error.message);
        }
      }
  useEffect(() => {
    getGallery();
  }, []);
  

  return (
      <>
          <section className="gallery-page-two mb-20">
              <div className="auto-container">
                  <div className="auto-container">
                      <div className="upper-box">
                          <div className="sec-title p_relative">
                              <h5 className="d_block fs_17 lh_25 fw_medium mb_9"></h5>
                              <h2 className="d_block fs_40 lh_50 fw_bold">Our Recent Works</h2>
                          </div>
                      </div>
                  </div>
                  <div className="outer-container">
                      <div className="items-container row clearfix">

                      {gallerys.length > 0 ? (
          gallerys.map((gallery, index) => (

                              // <div   key={index} className={`col-lg-3 col-md-6 col-sm-12 masonry-item small-column ${gallery.filterClass}`}>
                              <div   key={index} className={`col-lg-4 col-md-6 col-sm-12 masonry-item small-column `}>
                                  <div className="gallery-block-one">
                                      <div className="inner-box">
                                          <figure className="image-box">
                                              <img src={`${baseUrlImage}/uploads/gallery/${gallery.image}`} alt={gallery.title} />
                                          </figure>
                                          <div className="view-btn">
                                              <Link to={`${baseUrlImage}/uploads/gallery/${gallery.image}`} className="lightbox-image" data-fancybox="gallery">
                                                  <i className="icon-28"></i>  {/* Icon centered on the image */}
                                              </Link>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                        ))
                      ) : (
                        <p></p>
                      )
                      }
                      </div>
                  </div>
              </div>
          </section>

      </>
  );
};

export default GallerySection;