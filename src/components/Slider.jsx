/** @format */

import React, { Component } from "react";
import "../App.scss";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.css";

export default function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    centerPadding: true,
    swipeToSlide: true,
  };
  return (
    <>
      <Slider {...settings} className='container'>
        <div className='card-wrapper'>
          <div className='card'>
            <div className='card-image'>
              <img
                src='../../images/grass.jpg'
                className='img-fluid'
                alt='grass'
              />
            </div>
            <div className='details'>
              <h2>
                Grass Cutter{" "}
                <span className='job-title'>
                  China Brush Cutter Gasoline Grass Cutting Machine
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className='card-wrapper'>
          <div className='card'>
            <div className='card-image'>
              <img
                src='../../images/power2.jpeg'
                className='img-fluid'
                alt='power'
              />
            </div>
            <div className='details'>
              <h2>
                Grass Cutter{" "}
                <span className='job-title'>
                  China Brush Cutter Gasoline Grass Cutting Machine
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className='card-wrapper'>
          <div className='card'>
            <div className='card-image'>
              <img
                src='../../images/gen2.jpg'
                className='img-fluid'
                alt='generator'
              />
            </div>
            <div className='details'>
              <h2>
                Home Generator{" "}
                <span className='job-title'>Reliable energy source</span>
              </h2>
            </div>
          </div>
        </div>
        <div className='card-wrapper'>
          <div className='card'>
            <div className='card-image'>
              <img
                src='../../images/sprink.jpeg'
                className='img-fluid'
                alt='sprinkler'
              />
            </div>
            <div className='details'>
              <h2>
                Sprinkler<span className='job-title'>Irrigation System</span>
              </h2>
            </div>
          </div>
        </div>
        <div className='card-wrapper'>
          <div className='card'>
            <div className='card-image'>
              <img
                src='../../images/gen.jpg'
                className='img-fluid'
                alt='generator'
              />
            </div>
            <div className='details'>
              <h2>
                Honda Generator
                <span className='job-title'>Reliable Energy source</span>
              </h2>
            </div>
          </div>
        </div>
        <div className='card-wrapper'>
          <div className='card'>
            <div className='card-image'>
              <img
                src='../../images/irr.jpeg'
                className='img-fluid'
                alt='irrigation'
              />
            </div>
            <div className='details'>
              <h2>
                Sprinkler <span className='job-title'>Irrigation System</span>
              </h2>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}
