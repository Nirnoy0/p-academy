import React from 'react';
import 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import img1 from './Images/carosol-1.jpg';
import img2 from './Images/carosol-2.jpg';
import img3 from './Images/carosol-3.png';

const Home = () => {

    return (
        <div className="home">
            <Carousel>
                <Carousel.Item>
                    <img src={img1} height="500px" alt="img1"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img2} height="500px" alt="img2"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img3} height="500px" wi alt="img3" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;