import React, { useState } from "react";
import classes from "./Register.module.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register(props) {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    gender: "Male",
    email: "",
    username: "",
    image: "",
    password: "",
    confirm: "",
    bio: ""
  })

  let navigate=useNavigate();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onSaveRegData(formData);
    navigate("/login");
  }

  return (
    <section
      className="h-100 h-custom"
      style={{ backgroundColor: "rgb(253, 224, 224)" }}
    >
      <div className="container py-5 h-100">
        <div
          className={`${classes.row} d-flex justify-content-center align-items-center h-100`}
        >
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <Link to="/">
                <img
                  src={logo}
                  className="w-100"
                  style={{
                    borderTopLeftRadius: ".3rem",
                    borderTopRightRadius: ".3rem",
                    marginTop: "30px",
                  }}
                  alt="logo"
                />
              </Link>

              <hr style={{ width: "90%", margin: "auto", marginTop: "20px" }} />
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Register</h3>

                <form
                  className="px-md-2"
                  action="/register"
                  onSubmit={formSubmitHandler}
                >
                  <div className={`${classes.row}`}>
                    <div className="col-md-8 mb-2">
                      <div className="form-outline form-floating mb-3">
                        <input
                          name="name"
                          type="text"
                          id="form3Example1q"
                          className={`form-control ${classes.formcontrol}`}
                          placeholder="name"
                          value={formData.name}
                          onChange={(e)=> setFormData(prev => ({...prev, name: e.target.value}))}
                          required
                        />
                        <label className="form-label" htmlFor="form3Example1q">
                          Name
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className={`${classes.row}`}>
                    <div className="col-md-6 mb-3">
                      <div className="form-outline datepicker">
                        <label htmlFor="age">Age:</label>
                        <input
                          type="number"
                          id="age"
                          name="age"
                          min="1"
                          max="100"
                          style={{ width: "100%" }}
                          value={formData.age}
                          onChange={(e)=> setFormData(prev => ({...prev, age: e.target.value}))}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${classes.row}`}
                    style={{ marginBottom: "10px" }}
                  >
                    <div
                      className="col-md-6 mb-4"
                      style={{ marginTop: "15px", ariaRequired: "true" }}
                    >
                      <label htmlFor="gender">Gender</label>
                      <select
                        name="gender"
                        id="gender"
                        className="select"
                        style={{
                          height: "35px",
                          borderRadius: "5px",
                          marginLeft: "10px",
                        }}
                        value={formData.gender}
                        onChange={(e)=> setFormData(prev => ({...prev, gender: e.target.value}))}
                      >
                        <option value="1" disabled>
                          Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Non-binary">Non-binary</option>
                      </select>
                    </div>
                  </div>

                  <div className={`${classes.row}`}>
                    <div className="col-md-8 mb-3">
                      <div className={`form-outline form-floating mb-3`}>
                        <input
                          name="email"
                          type="email"
                          id="form3Examplemail1q"
                          className={`form-control ${classes.formcontrol} email`}
                          placeholder="name@example.com"
                          required
                          value={formData.email}
                          onChange={(e)=> setFormData(prev => ({...prev, email: e.target.value}))}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Examplemail1q"
                        >
                          Email
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className={`${classes.row}`}>
                    <div className="col-md-8 mb-3">
                      <div className="form-outline form-floating mb-3">
                        <input
                          name="username"
                          type="text"
                          id="form3Exampluser1q"
                          className={`form-control ${classes.formcontrol} username`}
                          placeholder="username"
                          required
                          value={formData.username}
                          onChange={(e)=> setFormData(prev => ({...prev, username: e.target.value}))}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Exampluser1q"
                        >
                          Username
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className={`${classes.row}`}>
                    <div className="col-md-8 mb-3">
                      <i>Choose an image for your profile picture</i>
                      <div className="mb-3">
                        {/* <!-- <label for="formFile" className="form-label">Default file input example</label> --> */}
                        <input
                          name="pfpicture"
                          className="form-control"
                          type="file"
                          id="formFile"
                          value={formData.image}
                          onChange={(e)=> setFormData(prev => ({...prev, image: e.target.value}))}
                        />
                      </div>
                    </div>
                  </div>

                  <div className={`${classes.row}`}>
                    <div className="col-md-8 mb-3 mt-4">
                      <div className="form-outline form-floating mb-3">
                        <input
                          name="password"
                          type="password"
                          id="form3Examplabe1q"
                          className={`form-control ${classes.formcontrol} password`}
                          placeholder="**********"
                          required
                          value={formData.password}
                          onChange={(e)=> setFormData(prev => ({...prev, password: e.target.value}))}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Examplabe1q"
                        >
                          Password
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className={`${classes.row}`}>
                    <div className="col-md-8 mb-3 mt-3">
                      <div className="form-outline form-floating mb-3">
                        <input
                          type="password"
                          id="form3Exampclabe1q"
                          className={`form-control ${classes.formcontrol} confirm-password`}
                          placeholder="**********"
                          required
                          value={formData.confirm}
                          onChange={(e)=> setFormData(prev => ({...prev, confirm: e.target.value}))}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Exampclabe1q"
                        >
                          Confirm Password
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className={`${classes.row}`}>
                    <div className="col-md-8 mb-3 mt-3">
                      <div className="form-outline form-floating mb-3">
                        <input
                          type="text"
                          name="bio"
                          id="form3Exampleb1q"
                          className={`form-control ${classes.formcontrol}`}
                          placeholder="..."
                          required
                          value={formData.bio}
                          onChange={(e)=> setFormData(prev => ({...prev, bio: e.target.value}))}
                        />
                        <label className="form-label" htmlFor="form3Exampleb1q">
                          Bio
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={`${classes.btn} btn btn-success btn-lg mb-1`}
                  >
                    Signup
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
