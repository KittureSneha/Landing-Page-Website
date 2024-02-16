import React, { useState,useEffect } from "react";

export const Services = (props) => {
  const [flippedServiceIndex, setFlippedServiceIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  const handleCardHover = (index) => {
    setFlippedServiceIndex(index);
  };

  const handleCardLeave = () => {
    setFlippedServiceIndex(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title" >
          <h2>Our Services</h2>
          <p style={{
            fontSize:windowWidth <= 768 ? "13px" : "16px",
            marginBottom: windowWidth <= 768 ? "120px" : "2px",
            padding:windowWidth <= 768 ? "0px 40px 0px 0px" : "0px"}} >
              We take immediate action in implementing your vision in a safe, 
              <br />dependable, and scalable manner.</p>
          <p></p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div
                    className={`flip-card ${
                      flippedServiceIndex === i ? "flipped" : ""
                    }`}
                    onMouseEnter={() => handleCardHover(i)}
                    onMouseLeave={handleCardLeave}
                  >
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src={d.pimg} alt={d.name} />
                        <div className="service-desc">
                          <h3 style={{
                              padding: windowWidth <= 768 ? "20px 40px 10px 40px" : "20px 55px 10px 55px",
                              }}>{d.name}</h3>
                          <h3>{d.title}</h3>
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <p style={{textAlign:"justify",padding:windowWidth<=768 ? "7px" : "20px",
                        fontSize: windowWidth <= 768 ? "10px":"15px", color: "white"}}>{d.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};



