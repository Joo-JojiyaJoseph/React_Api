import  React from "react";
import Slider from "../components/home/Slider";
import About from "../components/home/About";
import Feature from "../components/home/Feature";

const Home = () => {
  // const { name } = useContext(AppContext);
  
  return (
    <>
  <Slider/>
  <About/>
  <Feature/>
    </>
  );
};

export default Home;
