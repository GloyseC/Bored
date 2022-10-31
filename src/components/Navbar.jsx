import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import classes from "./Navbar.module.css";

const Navbar = ({loggedUser}) => {
  let pic = loggedUser.profilePicture

  // console.log(pic)
  // let pat = "../assets/" + String(pic)
    // console.log(pat)
    

    return (<nav className="navbar navbar-expand-lg navbar-light fixed-nav-bar">
    <div className="container-fluid navbar-inner">
      <a className="navbar-brand" href="/"><img src={logo} height="50px" width="200px" style={{marginLeft: "-40px"}} /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0 ml-auto my-auto">
          <li className="nav-item">
            <Link className={`${classes.navlink} nav-link active`} aria-current="page" to="/">Home</Link>
          </li>

          <li className={`${classes.navitem}`}>
            <Link className={`${classes.navlink} nav-link active`} to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className={`${classes.navlink} nav-link active`} to="/contact">Contact Us</Link>
          </li>


          <li className="nav-item dropdown dropdown-menu-right">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">

              <img src={"/" + pic} width="40" height="40" className="rounded-circle"/>
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              {/* <li><a className="dropdown-item" href="profile">Profile</a></li>
              <li><a className="dropdown-item" href="edit">Edit profile</a></li>
              <li><a className="dropdown-item" href="register">Sign up</a></li>
              <li><a className="dropdown-item" href="login">Login</a></li>
              <li><a className="dropdown-item" href="post">Create a post</a></li> */}

              <li><Link className="dropdown-item" to="/profile" state={loggedUser}>Profile</Link></li>
              <li><Link className="dropdown-item" to="/edit" state={loggedUser}>Edit profile</Link></li>
              {!loggedUser && <li><Link className="dropdown-item" to="/register" state={loggedUser}>Sign up</Link></li>}
              {!loggedUser && <li><Link className="dropdown-item" to="/login" state={loggedUser}>Login</Link></li>}
              <li><Link className="dropdown-item" to="/post" state={loggedUser}>Create a post</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>);
}

export default Navbar;