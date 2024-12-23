import React from "react";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Repair",
      description: "we repair your electronic device",
      imgSrc: "./img/1.jpg",
    },
    {
      title: "Build",
      description: "we custom our order",
      imgSrc: "./img/2.jpg",
    },
    {
      title: "Restore",
      description: "we repair customers data loss",
      imgSrc: "./img/3.jpg",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2 className="text-center text-uppercase">Portfolio</h2>
        <div className="row">
          {portfolioItems.map((item, index) => (
            <div className="col-md-4" key={index}>
              <PortfolioItem
                title={item.title}
                description={item.description}
                imgSrc={item.imgSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


