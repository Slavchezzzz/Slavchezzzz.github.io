import React from "react";
import { Carousel } from "antd";
import "../styles/Slider.css";

const contentStyle = {
  margin: 0,
  height: "550px",
  color: "#fff",
  lineHeight: "300px",
  textAlign: "center",
  background: "#364d79",
  justifyContent: "center",
};
const Slider = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div className="slide-img">
        <img src="../slide1-1.jpg" style={contentStyle} alt="slide"></img>
      </div>
      <div className="slide-img">
        <img src="../slide2.jpg" style={contentStyle} alt="slide"></img>
      </div>
      <div className="slide-img">
        <img src="../slide3.jpg" style={contentStyle} alt="slide"></img>
      </div>
      <div className="slide-img">
        <img src="../slide4.jpg" style={contentStyle} alt="slide"></img>
      </div>
      <div className="slide-img">
        <img src="../slide5.jpg" style={contentStyle} alt="slide"></img>
      </div>
    </Carousel>
  );
};
export default Slider;
