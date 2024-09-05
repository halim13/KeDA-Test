import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <main className="main">
        <Hero />
        <About />
        <Pricing />
        <Contact />
      </main>
      {/* <!-- Scroll Top --> */}
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
      {/* <!-- Preloader --> */}
      {/* <div id="preloader"></div> */}
    </>
  )
}

export default Home;
