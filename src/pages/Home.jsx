import React from "react";
import AboutUs from "../components/AboutUs";
import Card from "../components/Card";
import RegisterHere from "../components/RegisterHere";
import Welcome from "../components/Welcome";
import Begin from "../components/Begin";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import cats from "../Database/categories.json"


// const categories = cats

const Home = ({loggedUser, posts, catList, setCatList}) => {
    return (<div>
    <Navbar loggedUser={loggedUser}></Navbar>
        <Card categories={catList} posts={posts} setCatList={setCatList}></Card>
        <Welcome></Welcome>
        <AboutUs></AboutUs>
        <RegisterHere></RegisterHere>
        <Begin></Begin>
        <Footer></Footer>
    </div>);
}


export default Home;