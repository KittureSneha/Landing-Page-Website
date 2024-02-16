import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const instagramProfileUrl = "https://www.instagram.com/excelsangli/";
  const facebookProfileUrl = "https://www.facebook.com/ExcelSangli/";
  const whatsupProfileUrl = "http://wa.link/zgd8bk";
  const linkedinProfileUrl = "https://www.linkedin.com/home";
  const youtubeProfileUrl = "https://www.youtube.com/@excelinfotechsangli7456";   
  const [{ name, email, message }, setState] = useState(initialState);
  const currentYear = new Date().getFullYear();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
      
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p style={{fontSize:"14px"}}>
                <span>
                 <i className="fa fa-map-marker">
                  </i> Address
                </span>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5259.0525154769!2d74.5655688717143!3d16.86174082172412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc118691304d9ab%3A0x236787a277f6562b!2sExcel%20Infotech!5e0!3m2!1sen!2sin!4v1698212657670!5m2!1sen!2sin"
                width="320"
                height="150"
                style={{ border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
               </iframe>
               <br/>
                <br/> 

                {props.data ? props.data.address : "loading"}
              
              </p>
            </div>
            <div className="contact-item">
              <p style={{fontSize:"14px"}}>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                <a href = {`tel:${props.data?props.data.phone:"Loading"}`} >
                {props.data ? props.data.phone : "loading"}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p style={{fontSize:"14px"}}>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                <a href = {`mailto:${props.data?props.data.email:"Loading"}`} >
                {props.data ? props.data.email : "loading"}
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={facebookProfileUrl} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  {/*
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  */}

                  <li>
                    <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram" ></i>
                    </a>
                  </li>
                  <li>
                    <a href={whatsupProfileUrl} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  
                  
                  
                  <li>
                    <a href={youtubeProfileUrl} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy;{currentYear} Copyright 7 Segments Group. All Rights Reserved. 
          </p>
        </div>
      </div>
    </div>
  );
};




/*
<iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5259.0525154769!2d74.5655688717143!3d16.86174082172412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc118691304d9ab%3A0x236787a277f6562b!2sExcel%20Infotech!5e0!3m2!1sen!2sin!4v1698212657670!5m2!1sen!2sin"
          width="180"
          height="130"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      */