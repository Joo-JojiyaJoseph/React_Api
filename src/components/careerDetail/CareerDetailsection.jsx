import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CareerDetailsection = () => {
    
    const { id } = useParams(); // Get  ID from the URL
    const [careerids, setCareerids] = useState([]);
    async function getCareerids() {
      try {
        const res_id = await fetch(`https://capricornuae.com/AdminApi/api/careerids/${id}`);
        if (!res_id.ok) {
          throw new Error(`Error: ${res_id.status} ${res_id.statusText}`);
        }
        const data_id = await res_id.json();
        if (data_id.status == 200) {
          setCareerids(data_id.careerids);
        } else {
          return <div>Loading...</div>;
        }
      } catch (error) {
        setError(error.message);
      }
    }
  
    useEffect(() => {
      if (id) {
        getCareerids();
      }
    }, [id]);
  
    //Get Career ,List----------------------
    const [careers, setCareers] = useState([]);
    async function getCareer() {
      try {
        const res = await fetch("https://capricornuae.com/AdminApi/api/job");
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setCareers(data.job);
      } catch (error) {
        setError(error.message);
      }
    }
    useEffect(() => {
      getCareer();
    }, []);
  
    //-----------------------------------------------
  return (
    <>
     <section className="project-details p_relative">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
              <div className="project-details-content">
                <div className="content-one">
                  <div className="text mb_60">
                    <h2>{careerids.title}</h2>
                  </div>
                
                  <div className="text">
                    <p>
                    {careerids.description}
                    </p>
                  </div>
                </div>
         
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div className="project-sidebar ml_70">
                <ul className="project-info clearfix">
                  {careers.length > 0 ? (
                    careers.map((career, index) => (
                      <li key={index}>
                        <Link to={`/career/${career.id}`}>
                          {career.title}
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
       
        </div>
      </section>
    </>
  )
}

export default CareerDetailsection