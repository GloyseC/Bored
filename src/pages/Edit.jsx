import React from "react";
import classes from "./Edit.module.css";
import logo from "../assets/logo.png";
import { useState } from "react";

function Edit({loggedUser, onSaveEditData}) {
  const [formData, setFormData] = useState({
    age: 0,
    email: "",
    image: "",
    password: "",
    confirm: "",
    bio: ""
  })

  const formSubmitHandler = (e) => {
    e.preventDefault();
    onSaveEditData(formData, loggedUser);
  }

  return (
    <section
      className="h-100 h-custom"
      style={{ backgroundColor: "rgb(253, 224, 224)" }}
    >
      <div className="container py-5 h-100">
        <div
          className={`${classes.row} row d-flex justify-content-center align-items-center h-100`}
        >
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <a href="/">
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
              </a>

              <hr style={{ width: "90%", margin: "auto", marginTop: "20px" }} />
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                  Edit your profile
                </h3>

                <form className="px-md-2" action="/edit" onSubmit={formSubmitHandler}>
                  <div className={`${classes.row} row`}>
                    <div className="col-md-8 mb-2">
                      <div className="form-outline form-floating mb-3">
                        <input
                          name="name"
                          type="text"
                          id="form3Examplname1q"
                          className={`form-control ${classes.formcontrol}`}
                          placeholder="name"
                          disabled
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Examplname1q"
                        >
                          Name
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className={`${classes.row} row`}>
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
                    className={`${classes.row} row`}
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
                        disabled
                      >
                        <option value="1" disabled>
                          Gender
                        </option>
                        <option value="3">Male</option>
                        <option value="2">Female</option>
                        <option value="4">Non-binary</option>
                      </select>
                    </div>
                  </div>

                  <div className={`${classes.row} row`}>
                    <div className="col-md-8 mb-3">
                      <div className="form-outline form-floating mb-3">
                        <input
                          name="email"
                          type="email"
                          id="   m3Examplemail1q"
                          className={`form-control ${classes.formcontrol} email`}
                          // onBlur={validateEmail()}
                          placeholder="email"
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

                  <div className={`${classes.row} row`}>
                    <div className="col-md-8 mb-3">
                      <div className="form-outline form-floating mb-3">
                        <input
                          name="username"
                          type="text"
                          id="form3Exampluser1q"
                          className={`form-control ${classes.formcontrol}`}
                          placeholder="username"
                          disabled
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Exampluser1q"
                        >
                          Username (cannot be changed)
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className={`${classes.row} row`}>
                    <div className="col-md-8 mb-3">
                      <i>Choose an image for your profile picture</i>
                      <div className="mb-3">
                        {/* <!-- <label htmlFor="formFile" className="form-label">Default file input example</label> --> */}
                        <input
                          className="form-control"
                          type="file"
                          id="formFile"
                          value={formData.image}
                          onChange={(e)=> setFormData(prev => ({...prev, image: e.target.value}))}
                        />
                      </div>
                    </div>
                  </div>

                  <div className={`${classes.row} row`}>
                    <div className="col-md-8 mb-3 mt-4">
                      <div className="form-outline form-floating mb-3">
                        <input
                          name="password"
                          type="password"
                          id="form3Examplepass1q"
                          className={`form-control ${classes.formcontrol}`}
                          placeholder="password"
                          required
                          value={formData.password}
                          onChange={(e)=> setFormData(prev => ({...prev, password: e.target.value}))}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Examplepass1q"
                        >
                          Password
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className={`${classes.row} row`}>
                    <div className="col-md-8 mb-3 mt-3">
                      <div className="form-outline form-floating mb-3">
                        <input
                          type="password"
                          name="confirmpass"
                          id="form3Examplec1q"
                          className={`form-control ${classes.formcontrol}`}
                          placeholder="confirmpassword"
                          required
                          value={formData.confirm}
                          onChange={(e)=> setFormData(prev => ({...prev, confirm: e.target.value}))}
                        />
                        <label className="form-label" htmlFor="form3Examplec1q">
                          Confirm Password
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className={`${classes.row} row`}>
                    <div className="col-md-8 mb-3 mt-3">
                      <div className="form-outline form-floating mb-3">
                        <input
                          type="text"
                          name="bio"
                          id="form3Example1qb"
                          className={`form-control ${classes.formcontrol}`}
                          placeholder="bio"
                          required
                          value={formData.bio}
                          onChange={(e)=> setFormData(prev => ({...prev, bio: e.target.value}))}
                        />
                        <label className="form-label" htmlFor="form3Example1qb">
                          Bio
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`${classes.btn} btn btn-success btn-lg mb-1`}
                  >
                    Edit
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

export default Edit;
