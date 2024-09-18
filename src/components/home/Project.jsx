import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

const Project = () => {
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
    {/* <!-- project-section --> */}
        <section className="project-section">
            <div className="outer-container">
                <div className="project-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                {projects.length > 0 ? (
          projects.map((project, index) => (
                <div key={index} className="project-block-one">
                        <div className="inner-box">
                            <figure className="image-box"><img src={`${baseUrlImage}/${project.image}`}  alt=""/></figure>
                            <div className="view-btn">
                            <Link to={`${baseUrlImage}/${project.image}`} alt={project.title} className="lightbox-image" data-fancybox="gallery"><i className="icon-28"></i></Link>
                                </div>
                            <div className="text">
                                <h4><Link to={`/project/${project.id}`}>{project.title}</Link></h4>
                                <span>Installation</span>
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
        </section>
        {/* <!-- project-section end --> */}
    </>
  )
}

export default Project