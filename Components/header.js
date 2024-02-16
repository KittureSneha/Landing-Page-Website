import React from "react";

export const Header = (props) => {

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            < div className="col">
              <div className="col-md-30 col-md-offset-0 intro-text">
              <div className="video-container">
              <video autoPlay loop muted playsInline>
                    <source src="/img/Intro Video.mp4" type="video/mp4" />
                    {/* Add other video source tags for different formats if needed */}
                  </video>
                </div>

                {/* <a href="#features" className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a>{" "}*/}
              </div>        
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
