import React, { useRef, useState } from "react";
import "../Resources/global.scss";
import "./Home.scss";
import { Carousel } from "react-bootstrap";
import NavBar from "../Components/NavBar";

//Import Images
import WorkExampleOne from "../images/teamApp.png";
import WorkExampleTwo from "../images/chatApp.png";
import WorkExampleThree from "../images/WorkExample6.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// import required modules
import { Navigation, EffectCoverflow, EffectCube, Pagination } from "swiper";

export default function Home() {
  const navRoutes = [
    {
      linkName: "home",
      linkRoute: "./CodeGuys",
    },
    {
      linkName: "about",
      linkRoute: "./about",
    },
    {
      linkName: "projects",
      linkRoute: "./projects",
    },
  ];

  return (
    <>
      <div className="home-container">
        <NavBar links={navRoutes} logoIcon="CodeGuys." />

        <div>
          <div className="flex justify-right mr-1">
            <div className="ml-1">
              <p className="heading-one">
                A group of web designers and full stack developers. We design
                and build beautiful websites for businesses around the globe. If
                you need a modern and powerful website, send us an email.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-section">
        <div className="carousel-container"></div>
      </div>

      {/* <div className="carousel-container">
        <div className="carousel">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="carousel-image"
                src={WorkExampleOne}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image "
                src={WorkExampleTwo}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image "
                src={WorkExampleThree}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div> */}
    </>
  );
}
