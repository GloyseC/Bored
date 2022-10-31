import React from "react";
import { Navbar } from "react-bootstrap";
import classes from "./Books.module.css";

const Books = ({ loggedUser, posts }) => {
  return (
    <div className={`${classes.body}`}>
      <Navbar loggedUser={loggedUser}></Navbar>
      {posts
        .filter((post) => post.category === "Books")
        .map((post) => (
          <div className={`${classes.fh5coportfolio}`} key={post.id}>
            <form action="/story">
              <div
                className={`${classes.fh5coportfolioitem}`}
                style={{ marginTop: "50px" }}
              >
                <div
                  className={`${classes.fh5coportfoliofigure} animate-box}`}
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
                <div
                  className={`${classes.fh5coportfoliodescription}`}
                  style={{ height: "500px" }}
                >
                  <h2>{post.title}</h2>
                  <hr style={{ height: "3px" }} />
                  <p style={{ marginTop: "20px" }}>{post.content}</p>

                  <p>
                    <button
                      className="btn btn-primary"
                      name="postid"
                      value="<%= post.postImg %>"
                      type="submit"
                    >
                      {" "}
                      Read the full story{" "}
                    </button>
                  </p>
                </div>
              </div>
            </form>
          </div>
        ))}
    </div>
  );
};

export default Books;
