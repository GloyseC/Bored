import React from "react";
import { Navbar } from "react-bootstrap";
import classes from "./NoPage.module.css";

const NoPage = ({loggedUser}) => {
    return (
        <div className={classes.nopage}>
            <Navbar loggedUser={loggedUser}></Navbar>
            <p className={classes.para}>No Page Found.</p>
        </div>
    );
}

export default NoPage;