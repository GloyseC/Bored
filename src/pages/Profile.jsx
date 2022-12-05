import React from "react";
import classes from "./Profile.module.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { store } from "../redux-store/store";
import Switch from "../components/ToggleSwitch";


function Profile({ loggedUser, posts, postfilter}) {
  // let pic = loggedUser.profilePicture;

  let pic = store.getState().profilePicture;
  return (
    <div>
      <Navbar loggedUser={loggedUser}></Navbar>
      <div className={`${classes.body}`}>
      <Switch />
        <div className={`text-center ${classes.user}`}>
          {" "}
          <img
            src={"/" + pic}
            width="100"
            className={`rounded-circle img1 ${classes.img1}`}
            alt=""
          />
          <h3 className="mt-2">
            {store.getState().name}
          </h3>{" "}
          <span className="mt-2 clearfix ">
            <small>
              {store.getState().username}
            </small>
          </span>
          <span className=" clearfix ">
            <small>
              {store.getState().age}
            </small>
          </span>
          <hr />
          <div className="row mt-3 mb-3">
            <div className="col-md-4">
              <h5>Categories</h5>
              <div className="dropdown">
                5
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link className="dropdown-item" to="/movies">Books</Link>
                  <Link className="dropdown-item" to="/movies">Movies</Link>
                  <Link className="dropdown-item" to="/movies">Memes</Link>
                  <Link className="dropdown-item" to="/movies">Recipes</Link>
                  <Link className="dropdown-item" to="/movies">Sports</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Posts</h5>{" "}
              <span className="num">
                {postfilter(posts).length}
              </span>
            </div>
            <div className="col-md-4">
              <h5>Creator points</h5> <span className="num">{postfilter(posts).length}</span>
            </div>
          </div>
          <hr className="line" />{" "}
          <small className="mt-4">
            <b>bio: </b>
            {store.getState().bio}
          </small>
          <br />
        </div>
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></script>
      </div>
    </div>
  );
}

export default Profile;
