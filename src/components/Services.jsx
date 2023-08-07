import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import back1 from "../assests/back1.jpg";
import back2 from "../assests/back2.jpg";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src={back1} alt="Item1" />
          <p className="legend">Tips to practice Rationality</p>
        </div>
        <div>
          <img src={back2} alt="Item3" />
          <p className="legend">Hidden Literature</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
