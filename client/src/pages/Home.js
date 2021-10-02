import React, { useState } from 'react';
import '../styles/style.css';
import sliderImg2 from '../assets/images/homepage.jpeg';
import sliderImg from '../assets/images/newhomepage.jpeg';
import sliderImg3 from '../assets/images/homepage3.jpeg';
import arrow from '../assets/images/arrow2.jpg';
import { Link } from 'react-router-dom';

const images = [sliderImg, sliderImg2, sliderImg3];
const img2 = arrow;

export default function Home() {
  // creating state variables
  // currentImage stores current [index] of poistion in images arr
  // setCurrentImage function to update currentImage
  // useState argument is the initial value for currentImage -> [0]
  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;

    setCurrentImage(currentImage => {
      if (currentImage < length) {
        return currentImage + 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div className="fullpage">
      <div className="intro">
        <div className="float">
          <h2>HAVE A FIELD DAY.</h2>
        </div>
        <div className="float_left">
          <Link className="shopnow" to="/product">
            SHOP NOW
          </Link>
          <img className="arrow" src={img2}></img>
        </div>
      </div>
      <div className="image_container">
        <div id="scroll-text">
          NEW PRODUCT DROP TODAY >>>> NEW PRODUCT DROP TODAY >>>> NEW PRODUCT
          DROP TODAY >>>> NEW PRODUCT DROP TODAY >>>>
        </div>
        <img
          className="image_slider"
          src={images[currentImage]}
          onClick={handleClick}
        ></img>
      </div>
    </div>
  );
}
