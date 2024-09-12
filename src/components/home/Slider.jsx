import { React, useEffect, useState } from "react";
// import { PulseLoader } from "react-spinners";
// import slider1 from '/home/banner/banner-1.jpg'

const Slider = () => {

    const [sliders, setSliders] = useState([]);
    const [error, setError] = useState(null);
  
    async function getSlider() {
      try {
        const res = await fetch("/api/slider");
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setSliders(data.sliders);
      } 
      catch (error) {
        setError(error.message);
      }
    }
    useEffect(() => {
      getSlider();
    }, []);
  
  return (
    <>

{/* <!-- banner-section --> */}
        <section className="banner-section banner-style-one p_relative">
            <div className="shape">
                <div className="shape-1 p_absolute l_0 b_0 z_2"></div>
                <div className="shape-2 p_absolute l_0 t_0 z_2"></div>
                <div className="shape-3 p_absolute l_0 t_0 z_2"></div>
            </div>
            <div className="banner-carousel owl-theme owl-carousel owl-dots-none">
            {sliders.length > 0 ? (
          sliders.map((slider, index) => (

            <div  key={index} className="slide-item p_relative pt_180">
            <div className="image-layer p_absolute" style={{backgroundImage:`url(${slider.image})`}} alt={slider.title} ></div>
            <div className="auto-container">
                <div className="content-box p_relative d_block z_5">
                    <h2 className="p_relative d_block fs_60 lh_70 fw_bold mb_18">{slider.title} <span>Electricty</span> Service for Your Family</h2>
                    <p className="p_relative d_block fs_18">{slider.description} Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim.</p>
                </div> 
            </div>
        </div>

          ))
        ) : (
          <p></p>
        )
        }
            </div>
        </section>
        {/* <!-- banner-section end --> */}


    </>
  )
}

export default Slider