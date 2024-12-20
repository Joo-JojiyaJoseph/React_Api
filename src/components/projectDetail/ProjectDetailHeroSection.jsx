import React, { useContext, useEffect, useState } from 'react'
import page_title_image from '/page-title.jpg'
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppContext } from '../../context/AppContext';

const ProjectDetailHeroSection = () => {
  
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
    if (id) {
      getProjectids();
    }
  }, [id]);
  return (
    <>
     <Helmet>
        <title>{projectids.title}</title>
        <meta name="description" content={projectids.description} />
        <meta name="keywords" content={projectids.title} />
        <meta property="og:title" content={projectids.title} />
        <meta property="og:description" content={projectids.description} />
        <meta property="og:image" content={`${baseUrlImage}/${projectids.image}`} />
      </Helmet>

    {/* <!-- Page Title --> */}
     <section className="page-title centred">
     <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{backgroundImage:`url(${page_title_image})`}}></div>
         <div className="auto-container">
             <div className="content-box">
                 <h2>{projectids.title}</h2>
                 <ul className="bread-crumb clearfix">
                 <li><Link to="../home">Home</Link></li>
                     <li>{projectids.title}</li>
                 </ul>
             </div>
         </div>
     </section>
     {/* <!-- End Page Title --> */}

 </>
  )
}

export default ProjectDetailHeroSection