import React, { useState,useEffect} from "react";

export const Features = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 style={{marginBottom:"50px"}}>Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, fimg) => (
                <div
                  key={`${d.title}-${fimg}`}
                  className="col-xs-6 col-md-3 feature-card"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <h3 style={{marginBottom:"15px",
                              fontSize:"20px"
                            }}>{d.title}</h3>

                  <img src={d.fimg} className="features"></img>

                  <div className={`feature-content ${isHovered ? 'hovered' : ''}`}>

                    <h3 style={{textAlign:"center",
                        padding:windowWidth<=768 ?  "5px 18px 5px 18px" : "px 0px 0px 0px",
                        }}>{d.title}</h3>

                    <p style={{fontSize:windowWidth<=768 ? "10px":"15px",color:"#636262"}}>{d.text}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
