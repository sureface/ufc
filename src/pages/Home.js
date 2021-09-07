import React from 'react';
import NavigationBar from "../components/navigationBar";
import '../styles/home.scss'
import Carousel from "../components/carousel";
import ShowCase from "../components/showCase";

const Home = (props) => {

    return (
        <div className="homePage">
          <NavigationBar />
          <Carousel />
          <ShowCase />
        </div>
    );
};

export default Home;