import  React, { useContext, useEffect, useState } from "react";
import Slider from "../components/home/Slider";
import About from "../components/home/About";
import Feature from "../components/home/Feature";
import ContactField from "../components/home/ContactField";
import Cta from "../components/home/Cta";
import Funfact from "../components/home/Funfact";
import Client from "../components/home/Client";
import Testimonial from "../components/home/Testimonial";
import Project from "../components/home/Project";
import Choose from "../components/home/Choose";
import Faq from "../components/home/Faq";
import Services from "../components/home/Services";
import { Helmet } from "react-helmet-async";
import { AppContext } from "../context/AppContext";
import DirectoreMsg from '../components/DirectoreMsg'
import ProjectSection from "../components/project/ProjectSection";


const Home = () => {
  // const { name } = useContext(AppContext);
  
  const { baseUrlImage } = useContext(AppContext);
  const [error, setError] = useState(null);
  const [seoData, setSeoData] = useState({
    title: 'Default Title',
    description: 'Default description',
    keywords: 'default, keywords',
    og_title: 'Default OG Title',
    og_description: 'Default OG Description',
    image: ''
  });

  async function getSeo() {
    try {
      const res = await fetch("https://capricornuae.com/AdminApi/api/seo/home");
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      setSeoData(data.seo);
    } 
    catch (error) {
      setError(error.message);
    }
  }
  useEffect(() => {
    getSeo();
  }, []);

  return (
    <>
         <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:title" content={seoData.og_title} />
        <meta property="og:description" content={seoData.og_description} />
        <meta property="og:image" content={`${baseUrlImage}/${seoData.image}`} />
      </Helmet>
 <Slider/>
  <ContactField/> 
  <About/>
  <DirectoreMsg/>
  <Feature/>
  <Services/>
  <Choose/>
  <Project/>
  {/* <ProjectSection/> */}
  <Faq/>
  <Client/>
  <Testimonial/>
  <Funfact/>
  <Cta/>
  </>
  );
};

export default Home;
