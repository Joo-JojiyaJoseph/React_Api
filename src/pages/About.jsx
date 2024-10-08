import React, { useEffect, useState } from 'react'
import HeroAbout from '../components/about/HeroAbout'
import AboutSection from '../components/about/AboutSection'
import Testimonial from '../components/about/Testimonial'
import Project from '../components/about/Project'
import { Helmet } from 'react-helmet-async'

const About = () => {
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
      const res = await fetch("https://capricornuae.com/AdminApi/api/seo/about");
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
        <meta property="og:image" content={seoData.image} />
      </Helmet>
    <HeroAbout/>
    <AboutSection/>
    <Testimonial/>
    <Project/>
   
    </>
  )
}

export default About