import React, { useState } from 'react';

const ContactSection = () => {
    const [contacts, setContacts] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContacts(prevValues => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResponseMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(contacts),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText);
            }

            const data = await response.json();
            if (data.status === '200') {
                // Success
                setResponseMessage(data.msg);
                setContacts({}); // Reset form
            } else if (data.status === '422') {
                // Validation Errors
                const errors = Object.values(data.error).flat().join(', ');
                setResponseMessage(`Validation errors: ${errors}`);
            } else {
                // Unexpected response
                setResponseMessage('Unexpected response from the server.');
            }
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('There was an error sending your message.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Google Map Section */}
            <section className="google-map-section">
                <div className="map-inner p_relative d_block">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14538.929553238806!2d54.487438!3d24.355813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e40fa9d8c18f5%3A0xcfc6e5d72dbc9b74!2sMusaffah%20-%20M-39%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1726199558730!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-style-three">
                <div className="auto-container">
                    <div className="row clearfix">
                        {/* Contact Information */}
                        <div className="col-lg-4 col-md-12 col-sm-12 info-column">
                            <div className="contact-info mr_70">
                                <h3>Get In Touch</h3>
                                <p>Give us a call or drop by anytime, we answer all enquiries within 24 hours.</p>
                                <ul className="info-list clearfix">
                                    <li>CAPRICORN GENERAL MAINTENANCE</li>
                                    <li>Office No-7, M39, Mussafah, Abudhabi-UAE</li>
                                    <li><a href="mailto:info@capriconuae.com">info@capriconuae.com</a></li>
                                    <li>971(4)2283240</li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                            <div className="form-inner">
                                <form onSubmit={handleSubmit}>
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                required
                                                value={contacts.name || ''}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Your email"
                                                required
                                                value={contacts.email || ''}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <input
                                                type="text"
                                                name="phone"
                                                placeholder="Phone"
                                                required
                                                value={contacts.phone || ''}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea
                                                name="message"
                                                placeholder="Message"
                                                value={contacts.message || ''}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <div className="check-box">
                                                <input className="check" type="checkbox" id="checkbox" required />
                                                <label htmlFor="checkbox">
                                                    I agree that my submitted data is being collected and stored. *
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn mr-0">
                                            <button
                                                className="theme-btn btn-one"
                                                type="submit"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                                <i className="far fa-angle-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                {responseMessage && (
                                    <p>{responseMessage}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactSection;
