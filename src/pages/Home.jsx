import React from "react";
import AboutUs from "../components/AboutUs";
import Card from "../components/Card";
import RegisterHere from "../components/RegisterHere";
import Welcome from "../components/Welcome";
import Begin from "../components/Begin";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import book from "../assets/book.png";
import movie from "../assets/movie.png";
import meme from "../assets/meme.png";
import recipe from "../assets/recipe.png";
import sport from "../assets/sport.png";

const dummy_categories = [
    {
      id: "1",
      name: "Books",
      img: book,
    },
    {
      id: "2",
      name: "Movies",
      img: movie,
    },
    {
      id: "3",
      name: "Memes",
      img: meme,
    },
    {
      id: "4",
      name: "Recipes",
      img: recipe,
    },
    {
      id: "5",
      name: "Sports",
      img: sport,
    }
  ]

const Home = ({loggedUser, posts}) => {
    return (<div>
    <Navbar loggedUser={loggedUser}></Navbar>
        <Card categories={dummy_categories} posts={posts}></Card>
        <Welcome></Welcome>
        <AboutUs></AboutUs>
        <RegisterHere></RegisterHere>
        <Begin></Begin>
        <Footer></Footer>
    </div>);
}


export default Home;