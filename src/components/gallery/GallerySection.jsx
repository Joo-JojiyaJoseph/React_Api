import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

const GallerySection = () =>  {
    const { baseUrlImage } = useContext(AppContext);
    const [gallerys, setGallerys] = useState([]);
    const [error, setError] = useState(null);
    
    async function getgallery() {
        try {
            const res = await fetch("/api/gallery");
            if (!res.ok) {
              throw new Error(`Error: ${res.status} ${res.statusText}`);
            }
            const data = await res.json();
            setGallerys(data.gallerys);
          } 
          catch (error) {
            setError(error.message);
          }
        }
    useEffect(() => {
      getgallery();
    }, []);
    
      return (
        <>
          {/* <!-- project-page-section --> */}
          <section className="project-page-two">
            <div className="auto-container">
              <div className="sortable-masonry">
                <div className="upper-box centred mb_30">
                  <div className="sec-title p_relative mb_40">
                    <h5 className="d_block fs_17 lh_25 fw_medium mb_9">Gallery</h5>
                    <h2 className="d_block fs_40 lh_50 fw_bold">Our Projects: A Glimpse into Our Excellence.</h2>
                  </div>
                  {/* <div className="filters">
                    <ul className="filter-tabs filter-btns clearfix">
                      <li className="active filter" data-role="button" data-filter=".all">All</li>
                      <li className="filter" data-role="button" data-filter=".analytis">Analytis</li>
                      <li className="filter" data-role="button" data-filter=".finance">Finance</li>
                      <li className="filter" data-role="button" data-filter=".business">Business</li>
                      <li className="filter" data-role="button" data-filter=".corporate">Corporate</li>
                    </ul>
                  </div> */}
                </div>
                <div className="items-container row clearfix">
                {gallerys.length > 0 ? (
              gallerys.map((gallery, index) => (
                    <div
                    key={index}
                      className={`col-lg-4 col-md-6 col-sm-12 masonry-item small-column`} >
                      <div className="project-block-three">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src={`${baseUrlImage}/uploads/gallery/${gallery.image}`} alt={gallery.title} style={{height:'300px',objectFit:'cover'}} />
                            </figure>
                            <div className="view-btn">
                              <Link to={`${baseUrlImage}/uploads/gallery/${gallery.image}`} alt={gallery.title} className="lightbox-image" data-fancybox="gallery">
                                <i className="icon-28"></i>
                              </Link>
                            </div>
                          </div>
                          {/* <div className="lower-content">
                            <h4>{gallery.title}</h4>
                            <span>{gallery.category}</span>
                          </div> */}
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
          {/* <!-- project-page-section end --> */}
        </>
      );
    };
    

export default GallerySection;