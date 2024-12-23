// components/Services.jsx
import React from "react";

const Services = () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">
            Let Us tell something
          </h3>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-solid fa-screwdriver"></i>
            </span>
            <img src="./img/services/1.png" alt="" />
            <h4 className="my-3">Reliability</h4>
            <p className="text-muted">
              TechNova works with professionals to provide you with the best
              services.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa-solid fa-truck-pickup"></i>
            </span>
            <img src="./img/services/2.png" alt="" />
            <h4 className="my-3">Easy to Reach</h4>
            <p className="text-muted">Call us whenever wherever</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa-solid fa-lock"></i>
            </span>
            <img src="./img/services/3.png" alt="" />
            <h4 className="my-3">Security</h4>
            <p className="text-muted">
              Your data is safe with us so that it is not used by irresponsible
              parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
