import React from 'react';

// Data for the team members
const teamMembers = [
  {
    id: 1,
    name: 'Jack Nicholson',
    designation: 'Manager',
    image: 'assets/images/team/team-4.jpg',
    socialLinks: {
      facebook: 'index-3.html',
      twitter: 'index-3.html',
      linkedin: 'index-3.html',
    },
  },
  {
    id: 2,
    name: 'Robert Downey',
    designation: 'Electrician',
    image: 'assets/images/team/team-5.jpg',
    socialLinks: {
      facebook: 'index-3.html',
      twitter: 'index-3.html',
      linkedin: 'index-3.html',
    },
  },
  
  // Add more team members as needed
];

const Project = () => {
  return (
    <>
      {/* <!-- team-style-two --> */}
      <section className="team-style-two p_relative">
        <div className="auto-container">
          <div className="sec-title p_relative mb_45 centred">
            <h5 className="d_block fs_17 lh_25 fw_medium mb_9">Our Staff</h5>
            <h2 className="d_block fs_40 lh_50 fw_bold">
              Our Professional Electrician <br /> Staff
            </h2>
          </div>
          <div className="three-item-carousel owl-carousel owl-theme owl-nav-none">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-block-two">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img src={member.image} alt={member.name} />
                    </figure>
                    <ul className="social-links clearfix">
                      <li>
                        <a href={member.socialLinks.facebook}>
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href={member.socialLinks.twitter}>
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href={member.socialLinks.linkedin}>
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="content-box">
                    <h3>
                      <a href="index-3.html">{member.name}</a>
                    </h3>
                    <span className="designation">{member.designation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- team-style-two end --> */}
    </>
  );
};

export default Project;
