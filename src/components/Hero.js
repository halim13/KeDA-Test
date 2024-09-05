import React from 'react'

function Hero() {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <section id="hero" className="hero section">
        <div className="hero-bg">
          <img src={require("../assets/img/hero-bg-light.webp")} alt="" />
        </div>
        <div className="container text-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 data-aos="fade-up">Welcome to <span>KeDA APP</span></h1>
            <p data-aos="fade-up" data-aos-delay="100">Solusi Cerdas untuk Kebutuhan Anda<br /></p>
            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
              <a href="#about" className="btn-get-started">Get Started</a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
            </div>
            <img src={require("../assets/img/hero-services-img.webp")} className="img-fluid hero-img" alt="" data-aos="zoom-out" data-aos-delay="300" />
          </div>
        </div>

      </section>
      {/* <!-- /Hero Section --> */}
    </>
  )
}

export default Hero