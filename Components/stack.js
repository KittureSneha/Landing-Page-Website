import { Image } from "./image";
import React,{useState,useEffect} from "react";
import './stack.css';

const data = [
  { 
    id: 1, 
    title: 'Front End Development', 
    image :['img/Tech/FrontEnd.png'], 
    imageUrl: 
    [
      'img/Tech/figma.png',
      'img/Tech/html.png',
      'img/Tech/css.png',
      'img/Tech/bootstrap.png',
      'img/Tech/angular.png',
      'img/Tech/react.png',
      'img/Tech/tailwind.png',
    ],

    labels: ['Figma', 'HTML', 'CSS', 'Bootstrap', 'Angular.JS', 'React JS', 'Tailwind'],
  },

  {
     id: 2, 
     title: 'Back End Development', 
     image :['img/Tech/BackEnd.png'], 
     imageUrl: 
     [
      'img/Tech/javascript.png',
      'img/Tech/nodejs.png',
      'img/Tech/redis.png',
      'img/Tech/mysql.png',
      'img/Tech/mongodb.png',
      'img/Tech/larvel.png',
      'img/Tech/php.png',
      'img/Tech/codeigniter.png'
     ],

     labels: ['JavaScript', 'Node.js', 'Redis', 'MySQL', 'MongoDB', 'Laravel', 'PHP', 'CodeIgniter'],

     
  },

  { 
    id: 3, 
    title: 'Mobile App Development', 
    image :['img/Tech/MobileApp.png'],
    imageUrl: 
    [
      'img/Tech/react.png',
      'img/Tech/android.png',
      'img/Tech/ionic.png'
     ],

     labels: ['React Native', 'Android', 'Ionic'],
      
  },
];

function Stack() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [windowWidth,setWindowWidth] = useState(window.innerWidth);

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
  };

  const options = ["Front End Development", "Back End Development", "Mobile App Development"];
  const [currentOptionIndex, setCurrentOptionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOptionIndex((prevIndex) => (prevIndex + 1) % options.length);
    }, 2000); 

    return () => {
      clearInterval(interval);
    };
  }, [options.length]);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize",handleResize);

    };
  },[]);




  return (
    <div id="stack" className="text-center">
      <div className="container">
        <div className="section-title1">
          <h2  style={{marginTop:"150px",}}>Our Tech Stacks</h2>
         
        </div>
        <div className=" row " >
          <div className="stack-items">

          <div className="App">
      <div className="item-list">
        {data.map((item) => (
          <div
            key={item.id}
            className={`item ${selectedItem === item.id ? 'active' : ''}`}
            onClick={() => handleItemClick(item.id)}
          >
            <img src={item.image} className="item-img"  alt=""></img>
            {item.title}
          </div>
        ))}
      </div>
      <div className="item-details">
        {selectedItem !== null ? (
          <div>
            <h2>{data[selectedItem - 1].title}</h2>
            <p>{data[selectedItem - 1].content}</p>
            {data[selectedItem -1].imageUrl && (
              
                <div className="column card-grid">
                {data[selectedItem -1].imageUrl.map((url,index)=>(
                  <div key={index} className="col-md-4">
                  <div className="logo-card">
                  <img key={index} src={url} alt={`Image ${index}`}></img>
                  <div className="logo-label">{data[selectedItem - 1].labels[index]}</div>
              </div>
              </div>
              
                ))}
                </div> 
                
            )}
          </div>
        ) : (
          <div>
            
            <h3 style={{
            fontSize:windowWidth <= 768 ? "25px" : "40px",
             color:windowWidth <= 768 ? "white" : "grey" }}> {"Click"}</h3> 
              
            <h2>
            <span style={{ color: "#f22424" ,fontSize:windowWidth <= 768 ? "20px" : "27px"}}>
              {options[currentOptionIndex]}
            </span>
            </h2>
          </div>
        )}
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stack;


  
