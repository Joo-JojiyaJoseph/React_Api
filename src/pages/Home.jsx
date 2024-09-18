import  React from "react";
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

const Home = () => {
  // const { name } = useContext(AppContext);
  
  return (
    <>
  <Slider/>
  <ContactField/>
  <About/>
  <Feature/>
  <Services/>
  <Choose/>
  <Project/>
  <Faq/>
  <Testimonial/>
  <Client/>
  <Funfact/>
  <Cta/>
    </>
  );
};

export default Home;
