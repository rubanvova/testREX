import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./CarouselMenu.module.css";

const menuItems = [
  { name: "" },
  { name: "HOME" },
  { name: "SELL" },
  { name: "HOST" },
  { name: "ABOUT" },
  { name: "SUPPORT" },
  { name: "" },
];

const CarouselMenu = ({ data = menuItems }) => {
  const settings = {
    centerMode: false,
    infinite: false,
    slidesToShow: 3,
    speed: 500,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 425,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className={styles.wrapperCarouselMenu}>
      <Slider {...settings}>
        {(data || []).map((item, index) => (
          <div key={index} className={styles.itemMenu}>
            {item.name}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselMenu;
