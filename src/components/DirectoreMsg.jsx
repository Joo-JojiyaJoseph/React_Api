import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const DirectorMsg = () => {
    const [director_messages, setdirector_messages] = useState([]);
    const [error, setError] = useState(null);
    const { baseUrlImage } = useContext(AppContext);

    async function getdirector_message() {
        try {
            const res = await fetch("https://capricornuae.com/AdminApi/api/director_message");
            if (!res.ok) {
              throw new Error(`Error: ${res.status} ${res.statusText}`);
            }
            const data = await res.json();
            setdirector_messages(data.director_message);
            console.log(data.director_message)
          } 
          catch (error) {
            setError(error.message);
          }
        }
    useEffect(() => {
      getdirector_message();
    }, []);

  return (
    <section className="about-section sec-pad">
    <div className="auto-container">
    <div className="row align-items-center clearfix">
  {/* Content Section */}
  <div className="col-lg-6 col-md-12 col-sm-12 content-column">
    <div className="content_block_one">
      <div className="content-box p_relative d_block">
        <div className="sec-title p_relative mb_25">
          <h2 className="d_block fs_40 lh_50 fw_bold">Director's Message</h2>
        </div>
        <div className="text p_relative d_block mb_30">
          <p>{director_messages.message}</p>
        </div>
      </div>
    </div>
  </div>

  {/* Image Section */}
  <div className="col-lg-6 col-md-12 col-sm-12 image-column text-center">
    <img
      src={`${baseUrlImage}/uploads/director_message/${director_messages.image}`}
      alt="Director's Message"
      style={{
        maxWidth: "50%",
        height: "auto",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    />
  </div>
</div>

    </div>
  </section>
  );
};

export default DirectorMsg;
