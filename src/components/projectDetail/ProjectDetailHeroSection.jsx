import React, { useEffect, useState } from 'react'
import page_title_image from '/page-title.jpg'
import { useParams } from 'react-router-dom';

const ProjectDetailHeroSection = () => {
  const { id } = useParams(); // Get project ID from the URL
  const [projectids, setProjectids] = useState([]);
  async function getProjectids() {
    try {
      const res_id = await fetch(`/api/projectids/${id}`);
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
  return (
    <>
    {/* <!-- Page Title --> */}
     <section className="page-title centred">
     <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{backgroundImage:`url(${page_title_image})`}}></div>
         <div className="auto-container">
             <div className="content-box">
                 <h2>{projectids.title}</h2>
                 <ul className="bread-crumb clearfix">
                     <li><a href="">Home</a></li>
                     <li>Projects</li>
                 </ul>
             </div>
         </div>
     </section>
     {/* <!-- End Page Title --> */}

 </>
  )
}

export default ProjectDetailHeroSection