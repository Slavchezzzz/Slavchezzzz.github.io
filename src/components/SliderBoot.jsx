import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/SliderBoot.css";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carusel">
      <Carousel fade>
        <Carousel.Item className="slider-block">
          <img src="../slide/slide1-1.jpg" alt="" />
          <Carousel.Caption className="slider-text">
            <h3>
              Работа интернет-магазина на <br />
              майские праздники
            </h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slider-block">
          <img src="../slide/slide2.jpg" alt="#" />
          <Carousel.Caption>
            <h3>Новинки месяца</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slider-block">
          <img src="../slide/slide6.jpg" alt="" />
          <Carousel.Caption>
            <h3>Скидки в честь открытия магазина!</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
