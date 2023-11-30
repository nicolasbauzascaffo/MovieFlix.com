import React from "react";
import Carousel from "react-bootstrap/Carousel";
import topgun from "../images/topgun_img.png";
import scream from '../images/scream.webp'
import venom from '../images/venom.jpg'
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  return (
    <Carousel className="hero">
      <Carousel.Item interval={1000}>
        <img src={topgun} alt="topgun" style={{width:'100%', height:'100vh',objectFit:'cover'}} />
        <Carousel.Caption>
          <h3>Maverick - Top Gun</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={scream} alt="topgun" style={{width:'100%', height:'100vh',objectFit:'cover'}} />
        <Carousel.Caption>
          <h3>Scream VI</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={venom} alt="topgun" style={{width:'100%', height:'100vh',objectFit:'cover'}} />
        <Carousel.Caption>
          <h3>Venom II</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
