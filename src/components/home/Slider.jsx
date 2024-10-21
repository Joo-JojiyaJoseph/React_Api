import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";

const Slider = () => {
  const [sliders, setSliders] = useState([]);
  const [error, setError] = useState(null);
  const { baseUrlImage } = useContext(AppContext);

  async function getSlider() {
    try {
      const res = await fetch("https://capricornuae.com/AdminApi/api/slider");
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      setSliders(data.sliders);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    getSlider();
  }, []);

  useEffect(() => {
    if (sliders.length > 0) {
      // Initialize Owl Carousel after sliders are loaded
      $('.banner-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1000,
        autoplay: 6000,
        navText: ['<span class="fal fa-angle-left"></span>', '<span class="fal fa-angle-right"></span>'],
        responsive: {
          0: { items: 1 },
          600: { items: 1 },
          800: { items: 1 },
          1024: { items: 1 }
        }
      });
    }
  }, [sliders]);

  return (
    <>
      {/* banner-section */}
      <section className="banner-section banner-style-one p_relative">
        <div className="shape">
          <div className="shape-1 p_absolute l_0 b_0 z_2"></div>
          <div className="shape-2 p_absolute l_0 t_0 z_2"></div>
          <div className="shape-3 p_absolute l_0 t_0 z_2"></div>
        </div>
        <div className="banner-carousel owl-theme owl-carousel owl-dots-none">
          {sliders.length > 0 ? (
            sliders.map((slider, index) => (
              <div key={index} className="slide-item p_relative pt_180">
                <div className="image-layer p_absolute"
                  style={{
              backgroundImage: `url(${baseUrlImage}/uploads/slider/${slider.image})`
            }}
                  alt={slider.title}
                ></div>
                <div className="auto-container">
                  <div className="content-box p_relative d_block z_5">
                    <h2 className="p_relative d_block fs_60 lh_70 fw_bold mb_18">
                      <span>{slider.title}</span> {slider.toptitle}
                    </h2>
                    <p className="p_relative d_block fs_18">{slider.subtitle}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No sliders available</p>
          )}
        </div>
      </section>
      {/* banner-section end */}
    </>
  );
};

export default Slider;
