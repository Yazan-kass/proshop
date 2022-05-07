import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.css";
import Slider from "./index";
import img1 from "../../assets/img1.PNG";
import img2 from "../../assets/img12.PNG";
import img3 from "../../assets/img13.PNG";

const items = [
  <Slider
    SaveUp="Save up to $39.99"
    ProductName="PlayStation 5"
    Description="Lightning-fast download speed with super-fast SSD storage"
    ImgUrl={img1}
  />,
  <Slider
    SaveUp="Save up to $49.99"
    ProductName="APPLE AIRPODS"
    Description="AirPods are the best-selling headphones in the world"
    ImgUrl={img2}
  />,
  <Slider
    SaveUp="Save up to $99.99"
    ProductName="iPhone 11 PRO"
    Description="Pro cameras.Pro display. Pro performance."
    ImgUrl={img3}
  />,
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => {
    if (activeIndex === 0) return;
    setActiveIndex(activeIndex - 1);
  };
  const slideNext = () => {
    if (activeIndex === items.length) return;
    setActiveIndex(activeIndex + 1);
  };
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return [
    <AliceCarousel
      mouseTracking
      disableButtonsControls
      items={items}
      activeIndex={activeIndex}
      onSlideChanged={syncActiveIndex}
    />,
  ];
};

export default Carousel;
