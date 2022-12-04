import React from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

import book from "../assets/book.png";
import movie from "../assets/movie.png";
import meme from "../assets/meme.png";
import recipe from "../assets/recipe.png";
import sport from "../assets/sport.png";

const Card = (props) => {
  // let navigate=useNavigate();
  return (
    <div className={`${classes.container} ${classes.wrapper}`}>
      <div className={`${classes.gallery}`}>
        {props.categories.map(category => (<Link to="/feed" state={{ cat: category }}><form className={`${classes.for}`} key={category.id} >
          <div className={`${classes.maincontent} ${classes.div}`}>
            <button
              className={`${classes.transparent}`}
              name="category"
              value={category.name}
            >
              <img src={"/" + category.img} alt="" />
            </button>
            <h2 style={{color: "#212529"}}>{category.name}</h2>
          </div>
        </form></Link>)
        )}
      </div>
    </div>
  );
};

export default Card;
