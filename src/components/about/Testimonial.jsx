import React from 'react';


const testimonials = [
  {
    id: 1,
    name: 'Rachel McAdams',
    designation: 'Electrician',
    image: 'assets/images/resource/testimonial-1.jpg',
    text: 'Adipisicing elit sed do eiusmod tempor incid labore et dolore magna aliqua enim minim quis veniam nostrud exercition ulamco laboris nis aliquip commodo.',
  },
  {
    id: 2,
    name: 'Jhon Haris',
    designation: 'Electrician',
    image: 'assets/images/resource/testimonial-2.jpg',
    text: 'Adipisicing elit sed do eiusmod tempor incid labore et dolore magna aliqua enim minim quis veniam nostrud exercition ulamco laboris nis aliquip commodo.',
  },
  {
    id: 3,
    name: 'Rachel McAdams',
    designation: 'Electrician',
    image: 'assets/images/resource/testimonial-1.jpg',
    text: 'Adipisicing elit sed do eiusmod tempor incid labore et dolore magna aliqua enim minim quis veniam nostrud exercition ulamco laboris nis aliquip commodo.',
  },
  {
    id: 4,
    name: 'Jhon Haris',
    designation: 'Electrician',
    image: 'assets/images/resource/testimonial-2.jpg',
    text: 'Adipisicing elit sed do eiusmod tempor incid labore et dolore magna aliqua enim minim quis veniam nostrud exercition ulamco laboris nis aliquip commodo.',
  },
  {
    id: 5,
    name: 'Rachel McAdams',
    designation: 'Electrician',
    image: 'assets/images/resource/testimonial-1.jpg',
    text: 'Adipisicing elit sed do eiusmod tempor incid labore et dolore magna aliqua enim minim quis veniam nostrud exercition ulamco laboris nis aliquip commodo.',
  },
  {
    id: 6,
    name: 'Jhon Haris',
    designation: 'Electrician',
    image: 'assets/images/resource/testimonial-2.jpg',
    text: 'Adipisicing elit sed do eiusmod tempor incid labore et dolore magna aliqua enim minim quis veniam nostrud exercition ulamco laboris nis aliquip commodo.',
  },
];

const Testimonial = () => {
  return (
    <>

      <section classNameName="testimonial-style-two about-page p_relative">
        <div classNameName="bg-layer"></div>
        <div classNameName="auto-container">
          <div classNameName="sec-title light p_relative mb_50 centred">
            <h5 classNameName="d_block fs_17 lh_25 fw_medium mb_9">Testimonials</h5>
            <h2 classNameName="d_block fs_40 lh_50 fw_bold">
              What Our Clients Say <br /> About Easton.
            </h2>
          </div>
          <div classNameName="two-item-carousel owl-carousel owl-theme owl-nav-none">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} classNameName="testimonial-block-one">
                <div classNameName="inner-box p_relative d_block">
                  <div classNameName="light-icon">
                    <img src="assets/images/icons/icon-3.png" alt="Icon" />
                  </div>
                  <div classNameName="icon-box p_relative d_block fs_65">
                    <i classNameName="icon-31"></i>
                  </div>
                  <p>{testimonial.text}</p>
                  <div classNameName="author-box p_relative d_block">
                    <figure classNameName="author-thumb p_absolute l_0 t_0 w_70 h_70 b_radius_50">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </figure>
                    <h5>{testimonial.name}</h5>
                    <span classNameName="designation p_relative d_block">
                      {testimonial.designation}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
};

export default Testimonial;
