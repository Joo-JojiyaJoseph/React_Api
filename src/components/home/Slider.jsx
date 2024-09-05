import { React, useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

const Slider = () => {

    const [sliders, setSliders] = useState([]);
    // const [error, setError] = useState(null);
  
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
      <p className="text-black">Home</p>
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}

      <div className="slider-container">
        {sliders.length > 0 ? (
          sliders.map((slider, index) => (
            <div key={index} className="slider-item">
              <img src={slider.image} alt={slider.title} />
              <h3>{slider.title}</h3>
              <p>{slider.description}</p>
            </div>
          ))
        ) : (
          <p></p>
        )
        }
      </div>
    </>
  )
}

export default Slider