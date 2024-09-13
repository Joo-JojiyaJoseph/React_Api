import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';

// const projects = [
//   {
//     id: 1,
//     imgSrc: 'assets/images/project/project-12.jpg',
//     link: 'assets/images/project/project-12.jpg',
//     title: 'House Wiring Repair',
//     category: 'Installation',
//     filters: ['all', 'product', 'finance', 'business'],
//   },
//   {
//     id: 2,
//     imgSrc: 'assets/images/project/project-13.jpg',
//     link: 'assets/images/project/project-13.jpg',
//     title: 'Landscape Lighting',
//     category: 'Installation',
//     filters: ['all', 'analytis', 'business', 'corporate'],
//   },

// ];

const ProjectSection = () => {
const { baseUrlImage } = useContext(AppContext);
const [projects, setProjects] = useState([]);
const [error, setError] = useState(null);

async function getProject() {
    try {
        const res = await fetch("/api/project");
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setProjects(data.projects);
        console.log(data.projects)
      } 
      catch (error) {
        setError(error.message);
      }
    }
useEffect(() => {
  getProject();
}, []);

  return (
    <>
      {/* <!-- project-page-section --> */}
      <section className="project-page-two">
        <div className="auto-container">
          <div className="sortable-masonry">
            <div className="upper-box centred mb_30">
              <div className="sec-title p_relative mb_40">
                <h5 className="d_block fs_17 lh_25 fw_medium mb_9">Project</h5>
                <h2 className="d_block fs_40 lh_50 fw_bold">Our Recent Works</h2>
              </div>
              <div className="filters">
                <ul className="filter-tabs filter-btns clearfix">
                  <li className="active filter" data-role="button" data-filter=".all">All</li>
                  <li className="filter" data-role="button" data-filter=".analytis">Analytis</li>
                  <li className="filter" data-role="button" data-filter=".finance">Finance</li>
                  <li className="filter" data-role="button" data-filter=".business">Business</li>
                  <li className="filter" data-role="button" data-filter=".corporate">Corporate</li>
                </ul>
              </div>
            </div>
            <div className="items-container row clearfix">
            {projects.length > 0 ? (
          projects.map((project, index) => (
                <div
                key={index}
                  className={`col-lg-4 col-md-6 col-sm-12 masonry-item small-column`} >
                  <div className="project-block-three">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <img src={`${baseUrlImage}/${project.image}`} alt={project.title} />
                        </figure>
                        <div className="view-btn">
                          <a href="" className="lightbox-image" data-fancybox="gallery">
                            <i className="icon-28"></i>
                          </a>
                        </div>
                      </div>
                      <div className="lower-content">
                        <h4>
                          <a href="project-details.html">{project.title}</a>
                        </h4>
                        {/* <span>{project.category}</span> */}
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
      {/* <!-- project-page-section end --> */}
    </>
  );
};

export default ProjectSection;
