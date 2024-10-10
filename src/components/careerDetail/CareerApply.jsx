import React, { useState } from "react";

const CareerApply = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    job: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submitting status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting status

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('job', formData.job);
    formDataToSend.append('resume', formData.resume);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/careerApply', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data.msg || 'Application submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          resume: null,
          job: '',
        });
      } else {
        const errorData = await response.json();
        setResponseMessage(errorData.msg || 'Submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseMessage('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false); // Reset submitting status
    }
  };

  return (
    <section className="contact-style-three">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Contact Information */}
          {/* <div className="col-lg-4 col-md-12 col-sm-12 info-column">
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
          </div> */}

          {/* Contact Form */}
          <div className="col-lg-12 col-md-12 col-sm-12 form-column">
            <div className="form-inner">
              <form onSubmit={handleSubmit}>
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <input
                      type="file"
                      name="resume"
                      onChange={handleFileChange}
                      required
                    />
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
                      {isSubmitting ? 'Sending...' : 'Apply'}
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
  );
}

export default CareerApply;
