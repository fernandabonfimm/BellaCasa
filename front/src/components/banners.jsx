import React, { useRef } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "../../styles/components.css";

const BannerCarousel = ({ images }) => {
  const carouselRef = useRef(null);

  const nextSlide = () => {
    carouselRef.current.next();
  };

  const prevSlide = () => {
    carouselRef.current.prev();
  };

  return (
    <div className="carousel-container">
      <button className="carousel-arrow left" onClick={prevSlide}>
        <LeftOutlined />
      </button>
      <button className="carousel-arrow right" onClick={nextSlide}>
        <RightOutlined />
      </button>

      <Carousel ref={carouselRef} autoplay dots={false}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Banner ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
