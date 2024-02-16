import React,{useEffect,useState} from "react";

export const Team = (props) => {
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
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2 style={{marginTop:"150px"}}>Meet the Team</h2>
          <p>
            Faces behind Our Digital Magic
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 col-sm-4 team">
                  <div className="container1">
                    <div className="box">
                      <div className="imgBox">
                    {" "}
                    <img src={d.img} alt="..." />
                    </div>
                    <div className="content">
                      <span><h4>{d.name}</h4>
                      <p>{d.job}</p></span>
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
