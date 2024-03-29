import React, { useEffect } from "react";

export const Navigation = (props) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if(section) {
      section.scrollIntoView({ behaviour: "smooth"});
    }
  };

  useEffect(() =>{
    if(performance.navigation.type === 1){
      scrollToSection("header");
    } 
  },[]);

  const handleClick = () => {
    scrollToSection("header");
  };


  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
          <img src="/img/Logo1.png"
               alt="Company Logo"
               onClick={handleClick}></img>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            
          <li>
              <a href="#header" className="page-scroll">
                Home
              </a>
            </li>
          <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
           
          <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            {/* <li>
              <a href="#stack" className="page-scroll">
                Tech Stack
              </a>
            </li> */}
            {/*
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
             */}
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
          
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
