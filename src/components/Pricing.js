import React from 'react'

function Pricing() {
  return (
    <>
      {/* <!-- Pricing Section --> */}
      <section id="pricing" className="pricing section">

        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Pricing</h2>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container">

          <div className="row gy-4">

            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="pricing-item">
                <h3>Basic Plan</h3>
                <h4><sup>$</sup>10<span> / month</span></h4>
                <a href="/" className="cta-btn">Start a free trial</a>
                <p className="text-center small">No credit card required</p>
                <ul>
                  <li><i className="bi bi-check"></i> <span>Mencatat barang masuk dan keluar</span></li>
                  <li><i className="bi bi-check"></i> <span>Mencatat Keuntungan</span></li>
                  <li className='na'><i className="bi bi-x"></i> <span>Dapat menganalisa hasil penjualan dengan CHART</span></li>
                  <li className="na"><i className="bi bi-x"></i> <span>Support 7x24 Jam</span></li>
                  <li className="na"><i className="bi bi-x"></i> <span>Export data ke Excel</span></li>
                  <li className="na"><i className="bi bi-x"></i> <span>AI Prediksi penghasilan</span></li>
                </ul>
              </div>
            </div>
            {/* <!-- End Pricing Item --> */}

            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="pricing-item featured">
                <p className="popular">Popular</p>
                <h3>Business Plan</h3>
                <h4><sup>$</sup>15<span> / month</span></h4>
                <a href="/" className="cta-btn">Start a free trial</a>
                <p className="text-center small">No credit card required</p>
                <ul>
                  <li><i className="bi bi-check"></i> <span>Mencatat barang masuk dan keluar</span></li>
                  <li><i className="bi bi-check"></i> <span>Mencatat Keuntungan</span></li>
                  <li><i className="bi bi-check"></i> <span>Dapat menganalisa hasil penjualan dengan CHART</span></li>
                  <li><i className="bi bi-check"></i> <span>Support 7x24 Jam</span></li>
                  <li className="na"><i className="bi bi-x"></i> <span>Export data ke Excel</span></li>
                  <li className="na"><i className="bi bi-x"></i> <span>AI Prediksi penghasilan</span></li>
                </ul>
              </div>
            </div>
            {/* <!-- End Pricing Item --> */}

            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
              <div className="pricing-item">
                <h3>3/Entrepreneur Plan</h3>
                <h4><sup>$</sup>20<span> / month</span></h4>
                <a href="/" className="cta-btn">Start a free trial</a>
                <p className="text-center small">No credit card required</p>
                <ul>
                  <li><i className="bi bi-check"></i> <span>Mencatat barang masuk dan keluar</span></li>
                  <li><i className="bi bi-check"></i> <span>Mencatat Keuntungan</span></li>
                  <li><i className="bi bi-check"></i> <span>Dapat menganalisa hasil penjualan dengan CHART</span></li>
                  <li><i className="bi bi-check"></i> <span>Support 7x24 Jam</span></li>
                  <li><i className="bi bi-check"></i> <span>Export data ke Excel</span></li>
                  <li><i className="bi bi-check"></i> <span>AI Prediksi penghasilan</span></li>
                </ul>
              </div>
            </div>
            {/* <!-- End Pricing Item --> */}

          </div>

        </div>

      </section>
      {/* <!-- /Pricing Section --> */}
    </>
  )
}

export default Pricing