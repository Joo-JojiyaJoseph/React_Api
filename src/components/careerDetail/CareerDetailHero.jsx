import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import page_title_image from '/page-title.jpg'

const CareerDetailHero = () => {
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
  return (
    <>
      <Helmet>
        <title>{careerids.title}</title>
        <meta name="description" content={careerids.description} />
        <meta property="og:title" content={careerids.title} />
        <meta property="og:description" content={careerids.description} />
      </Helmet>
    {/* <!-- Page Title --> */}
    <section className="page-title centred">
     <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{backgroundImage:`url(${page_title_image})`}}></div>
         <div className="auto-container">
             <div className="content-box">
                 <h2>{careerids.title}</h2>
                 <ul className="bread-crumb clearfix">
                 <li><Link to="home">Home</Link></li>
                     <li>{careerids.title}</li>
                 </ul>
             </div>
         </div>
     </section>
     {/* <!-- End Page Title --> */}
    </>
  )
}

export default CareerDetailHero