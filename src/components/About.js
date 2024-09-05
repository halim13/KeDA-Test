import React from 'react'

function About() {
  return (
    <>
      {/* <!-- About Section --> */}
      <section id="about" className="about section">

        <div className="container">

          <div className="row gy-4">

            <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
              <p className="who-we-are">Who We Are</p>
              <h3>Unleashing Potential with Creative Strategy</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
              </ul>
              <a href="/" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
            </div>

            <div className="col-lg-6 about-images" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-lg-6">
                  <img src="assets/img/about-company-1.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6">
                  <div className="row gy-4">
                    <div className="col-lg-12">
                      <img src="assets/img/about-company-2.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-12">
                      <img src="assets/img/about-company-3.jpg" className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
      {/* <!-- /About Section --> */}
    </>
  )
}

export default About