import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const ProjectDetailSection = () => {
  
const { baseUrlImage } = useContext(AppContext);
  const { id } = useParams(); // Get project ID from the URL
  const [projectids, setProjectids] = useState([]);
  async function getProjectids() {
    try {
      const res_id = await fetch(`https://capricornuae.com/AdminApi/api/projectids/${id}`);
      if (!res_id.ok) {
        throw new Error(`Error: ${res_id.status} ${res_id.statusText}`);
      }
      const data_id = await res_id.json();
      if (data_id.status == 200) {
        setProjectids(data_id.projectids);
      } else {
        return <div>Loading...</div>;
      }
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    getProjectids();
  }, []);

  //Get projects ,List----------------------
  const [projects, setProjects] = useState([]);
  async function getProject() {
    try {
      const res = await fetch("/api/project");
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      setProjects(data.projects);
    } catch (error) {
      setError(error.message);
    }
  }
  useEffect(() => {
    getProject();
  }, []);

  //-----------------------------------------------

  return (
    <>
      
      {/* <!-- project-details --> */}
      <section className="project-details p_relative">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
              <div className="project-details-content">
                <div className="content-one">
                  <div className="text mb_60">
                    <h2>{projectids.title}</h2>
                  </div>
                  <figure className="image-box">
                  <img src={`${baseUrlImage}/${projectids.image}`} alt={projectids.title} style={{height:'300px',objectFit:'cover'}} />
                  </figure>
                  <div className="text">
                    {/* <h3>Project Discription</h3> */}
                    <p>
                    {projectids.description}
                    </p>
                  </div>
                </div>
                {/* <div className="content-two">
                  <div className="image-box">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                        <figure className="image">
                          <img
                            src="assets/images/project/project-19.jpg"
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                        <figure className="image">
                          <img
                            src="assets/images/project/project-20.jpg"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="text">
                    <h3>Projects</h3>
                    <p>
                      Exercitation ullamco laboris nisi ut aliquip ex commodo
                      consequat duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore fugiat nulla pariatur.
                      excepteur sint occae cat cupidatat non proident sunt in
                      culpa officia deseunt molit anim est laborum Sed
                      perspiciatis unde omnis iste natus error sit voluptatem
                      acusantium dolore mque laudantium, totam rem aperiam
                      eaque.
                    </p>
                    <p>
                      Abodit ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia conse quuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt.
                    </p>
                    <ul className="list-style-one clearfix">
                      <li>Emergency power solutions</li>
                      <li>Full-service electrical layout</li>
                      <li>Rapid response times</li>
                    </ul>
                    <p>
                      Aliquip ex commodo consequat duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore fugiat
                      nulla pariatur. excepteur sint occae cat cupidatat non
                      proident sunt in culpa officia deseunt molit anim est
                      laborum Sed perspiciatis unde omnis iste natus error sit
                      voluptatem acusantium.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div className="project-sidebar ml_70">
                <ul className="project-info clearfix">
                  {projects.length > 0 ? (
                    projects.map((project, index) => (
                      <li key={index}>
                        <Link to={`/project/${project.id}`}>
                          {project.title}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <p></p>
                  )}
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="nav-btn clearfix">
            <div className="prev-btn pull-left">
              <h6>
                <Link to={`/project/${projectids.id + 1}`}>
                  <i className="far fa-angle-left"></i>Prev Project
                </Link>
              </h6>
            </div>
            <div className="next-btn pull-right">
              <h6>
                <Link to={`/project/${projectids.id - 1}`}>
                  Next Project<i className="far fa-angle-right"></i>
                </Link>
              </h6>
            </div>
          </div> */}
        </div>
      </section>
      {/* <!-- project-details end --> */}
    </>
  );
};

export default ProjectDetailSection;
