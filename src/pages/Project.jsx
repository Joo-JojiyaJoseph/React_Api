import React, { useContext, useEffect, useState } from 'react'
import HeroProject from '../components/project/HeroProject'
import ProjectSection from '../components/project/ProjectSection'
import { Helmet } from 'react-helmet-async';
import { AppContext } from '../context/AppContext';

const Project = () => {
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
      const res = await fetch("https://capricornuae.com/AdminApi/api/seo/project");
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
    <HeroProject/>
    <ProjectSection/>
    <></>
    </>
  )
}

export default Project