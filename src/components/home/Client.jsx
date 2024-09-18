import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';

const Client = () => {
    const { baseUrlImage } = useContext(AppContext);
    const [clients, setclients] = useState([]);
    const [error, setError] = useState(null);
    
    async function getclient() {
        try {
            const res = await fetch("/api/clients");
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
  return (
    <>
        {/* <!-- clients-section --> */}
        <section className="clients-section p_relative">
            <div className="auto-container">
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