import React, { useState } from "react";
import classes from "./Contact.module.css";
import Navbar from "../components/Navbar";

const Contact = ({ loggedUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [temp, setTemp] = useState([]);
  const [show, setShow] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setShow(true)
    console.log(formData);
    setTemp((prev) => ([...prev, formData]));
    console.log(temp);
    setFormData({
      name: "",
      email: "",
      pnum : "",
      message: ""
    });
  }
  
  return (
    <div>
      <Navbar loggedUser={loggedUser}></Navbar>
      <div className={`${classes.body}`}>
        
        <div>
          <div
            className={`${classes.contactformwrapper} d-flex justify-content-center`}
            style={{ paddingTop: "50px" }}
          >
            <form
              action="/contact"
              onSubmit={formSubmitHandler}
              className={`${classes.contactform}`}
            >
              <h5 className={`${classes.title}`}>Contact us</h5>
              <p className={`${classes.description}`}>
                Feel free to contact us if you need any assistance, any help or
                another question.
              </p>
              <div>
                <input
                  type="text"
                  className={`${classes.formcontrol} rounded border-white mb-3 ${classes.forminput}`}
                  id="name"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={(e)=> setFormData(prev => ({...prev, name: e.target.value}))}
                />
              </div>
              <div>
                <input
                  type="email"
                  className={`${classes.formcontrol} rounded border-white mb-3 ${classes.forminput} email`}
                  placeholder="Email"
                  // onBlur={validateEmail}
                  value={formData.email}
                  onChange={(e)=> setFormData(prev => ({...prev, email: e.target.value}))}
                />
              </div>
              <div>
                <input
                  type="number"
                  className={`${classes.formcontrol} rounded border-white mb-3 ${classes.forminput} email`}
                  placeholder="Number"
                  // onBlur={validateEmail}
                  value={formData.pnum}
                  onChange={(e)=> setFormData(prev => ({...prev, pnum: e.target.value}))}
                />
              </div>
              <div>
                <textarea
                  id="message"
                  className={`${classes.formcontrol} rounded border-white mb-3 ${classes.formtextarea}`}
                  rows="5"
                  cols="30"
                  placeholder="Message"
                  required
                  value={formData.message}
                  onChange={(e)=> setFormData(prev => ({...prev, message: e.target.value}))}
                ></textarea>
              </div>
              <div className={`${classes.submitbuttonwrapper}`}>
                <button type="submit" className={`${classes.submitbutton}`}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <ul> */}
        {console.log(temp)}
        {show && <h3>Recent Comments</h3>}
        <div style={{display:"flex"}}>
          {temp.map((data) => {
            // <li>{`Name: ${data.name}, Email: ${data.email}, Message: ${data.message}`}</li>
            return( <div className={`${classes.newdiv}`}>
              <p className="fw-bold">NAME : {data.name}</p>
              <p>EMAIL : {data.email}</p>
              <p>NUMBER : {data.pnum}</p>
              <p>MESSAGE : {data.message}</p>
            </div>)

          })}
          </div>
        {/* </ul> */}
      </div>
    </div>
  );
};

export default Contact;