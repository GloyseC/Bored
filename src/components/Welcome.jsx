import React from "react";
import classes from "./Welcome.module.css";
import desc from '../assets/desc.png'

const Welcome = (props) => {
    return (
        <div className={`${classes.desc}`}>
        <img src={desc} alt="" className={`${classes.im}`} />
        <div className={`${classes.descr}`}>
          <h1 className={`${classes.ee}`}>Welcome to Bored...</h1>
          <p>Lorem ipsum dolor sit ame Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum tempora dicta alias
            culpa eaque dolores iure excepturi similique tenetur nisi non in voluptatum, nihil incidunt distinctio vel
            placeat quasi amet temporibus totam animi perferendis eligendi. Nulla aspernatur cupiditate quaerat quae,
            laudantium et? Quos nisi nulla quis, hic cumque inventore architecto exercitationem similique. Porro a
            praesentium fugit natus amet! Ipsum recusandae earum dolor blanditiis explicabo accusantium beatae
            necessitatibus nulla odio? Rem quisquam ab maiores eaque atque fugiat cumque consequatur quae ipsa,
            voluptatibus, fuga similique laborum commodi blanditiis asperiores. Neque, sit vel laborum ut accusamus incidunt
            maxime aspernatur alias saepe laudantium libero. t consectetur adipisicing elit. Sequi doloremque dicta magnam,
            ipsum eveniet excepturi, officia possimus suscipit inventore esse deserunt delectus repudiandae quo dolor.</p>
        </div>
      </div>
    );
}

export default Welcome;