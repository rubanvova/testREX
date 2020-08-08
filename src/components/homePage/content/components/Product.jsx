import React, { useContext } from "react";
import CustomScroll from "react-scrollbars-custom";

import ButtonBox from "./ButtonBox";

import antminer from "../img/antminer.png";
import LanguageContext from "../../../../languageContext";

import styles from "./Product.module.css";

const data = [
  {
    id: 1,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 2,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 3,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 4,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 5,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 6,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 7,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 8,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 8,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 8,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 8,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 8,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 8,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 8,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 8,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 8,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 8,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 8,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },

  {
    id: 8,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 8,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 8,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 8,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 8,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 8,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 8,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
  {
    id: 8,
    name: "USED Antminer S910.5-14.5 th/s",
    img: "",
    price: 137.0,
  },
];

const Product = ({ addToCart }) => {
  const strings = useContext(LanguageContext);

  const list = data.map((item) => (
    <div className={styles.wrapper}>
      <div className={styles.box} key={item.id}>
        <div className={styles.wrapperName}>{item.name}</div>
        <div className={styles.img}>
          <img src={antminer} alt="" className={styles.imgProd} />
        </div>
        <div className={styles.wrapperPrice}>
          <div className={styles.textPrice}>${item.price}</div>
          <div className={styles.psu}>PSU</div>
        </div>
        <div className={styles.container}>
          <ButtonBox sizeWidth="186px" text={`${strings.HASHRATE}:11.5`} />
          <div className={styles.boxButton}>
            <div className={styles.buttonDetails}>
              <div> {strings.DETAILS}</div>
            </div>
            <div onClick={() => addToCart(item)}>
              <ButtonBox arrowoff sizeWidth="84px" text={strings.ADDCART} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div style={{ display: "flex" }}>
      <div className={styles.lineScroll}></div>
      <CustomScroll
        rtl
        className={styles.wrapperProducts}
        style={{ width: 500, height: 704 }}
        contentProps={{
          renderer: (props) => {
            const { elementRef, ...restProps } = props;
            return (
              <span
                {...restProps}
                ref={elementRef}
                className={styles.wrapperProducts}
              />
            );
          },
        }}
        trackYProps={{
          renderer: (props) => {
            const { elementRef, ...restProps } = props;
            return (
              <span
                {...restProps}
                ref={elementRef}
                className={styles.wrapperProductsTrack}
              />
            );
          },
        }}
        thumbYProps={{
          renderer: (props) => {
            const { elementRef, ...restProps } = props;
            return (
              <span
                {...restProps}
                ref={elementRef}
                className={styles.wrapperProductsThumb}
              />
            );
          },
        }}
      >
        {list}
      </CustomScroll>
    </div>
  );
};

export default Product;
