import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';

const Client = () => {
    const { baseUrlImage } = useContext(AppContext);
    const [clients, setclients] = useState([]);
    const [error, setError] = useState(null);
    
    async function getclient() {
        try {
            const res = await fetch("https://capricornuae.com/AdminApi/api/clients");
            if (!res.ok) {
              throw new Error(`Error: ${res.status} ${res.statusText}`);
            }
            const data = await res.json();
            setclients(data.clients);
          } 
          catch (error) {
            setError(error.message);
          }
        }
    useEffect(() => {
      getclient();
    }, []);

    useEffect(() => {
      if (clients.length > 0) {
        // Initialize Owl Carousel after clients are loaded
        $('.five-item-carousel').owlCarousel({
          loop:true,
          margin:30,
          nav:true,
          smartSpeed: 500,
          autoplay: 1000,
          navText: [ '<span class="fal fa-angle-left"></span>', '<span class="fal fa-angle-right"></span>' ],
          responsive:{
            0:{
              items:1
            },
            480:{
              items:2
            },
            600:{
              items:3
            },
            800:{
              items:4
            },			
            1200:{
              items:5
            }
    
          }
        });
      }
    }, [clients]);


  return (
    <>
        {/* <!-- clients-section --> */}
        <section className="clients-section p_relative">
            <div className="auto-container">
            <div className="sec-title p_relative mb_50 centred">
                    <h2 className="d_block fs_40 lh_50 fw_bold">Our Clients</h2>
                </div>
                <div className="five-item-carousel owl-carousel owl-theme owl-nav-none owl-dots-none">
                {clients.length > 0 ? (
                    clients.map((client, index) => (
                    <figure  key={index} className="clients-logo p_relative d_block">
                        <Link><img src={`${baseUrlImage}/uploads/client/${client.image}`} alt=""/></Link>
                    </figure>
                      ))
                    ) : (
                      <p></p>
                    )}
            </div>
            </div>
        </section>
        {/* <!-- clients-section end --> */}
    </>
  )
}

export default Client