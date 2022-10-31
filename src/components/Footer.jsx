import React from "react";
import classes from "./Footer.module.css";
import logo from "../assets/logo.png";

const Footer = (props) => {
  return (
    <footer className={`page-footer font-small foot ${classes.footer}`}>
      <div className="footer-copyright text-center py-3">
        <img src={logo} alt="" className="footerimg" />
        <div>&#169;2021. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
