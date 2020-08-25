import React, { useState, useContext } from "react";

import TextChapter from "./components/TextChapter";
import Divider from "../header/components/Divider";
import ButtonBox from "./components/ButtonBox";
import CoinList from "./components/CoinList";
import ManufacturerList from "./components/ManufacturerList";
import NewsBox from "./components/NewsBox";
import Product from "./components/Product";
import LanguageContext from "../../../languageContext";

import combined from "./img/combined.svg";

import styles from "./Content.module.css";

const Content = ({ cart, setCart, setCounterItem, counterItem }) => {
  const strings = useContext(LanguageContext);
  const [showCoinList, setShowCoinList] = useState(false);
  const [showManufacturer, setShowManufacturer] = useState(false);

  const addToCart = (data, id) => {
    if (data) {
      setCounterItem((counterItem = 1));
      setCart([{ ...data, counterItem }, ...cart]);
    }
    (cart || []).map((item) => {
      if (item.id === id) {
        setCart([...cart]);
        setCounterItem(item.counterItem++);
      }
      return item;
    });
  };
  const onClickCoin = () => {
    setShowCoinList(!showCoinList);
  };

  const onClickManufacturer = () => {
    setShowManufacturer(!showManufacturer);
  };

  return (
    <div className={styles.wrapperContent}>
      <div className={styles.wrapperFilters}>
        <TextChapter text={strings.FILTER} />
        <div>
          <ButtonBox text={strings.BYALGORITHM} />
          <div onClick={onClickCoin}>
            <ButtonBox text={strings.BYCOIN} top bottom />
          </div>
          {showCoinList && <CoinList />}
          <ButtonBox text={strings.BYEQUIPMENT} top />
          <div onClick={onClickManufacturer}>
            <ButtonBox text={strings.BYMANUFACTURER} top />
          </div>
          {showManufacturer && <ManufacturerList />}
          <ButtonBox text={strings.MINIMUMPRICE} top arrowoff />
          <ButtonBox text={strings.MAXMUMPRICE} top arrowoff />
          <ButtonBox text={strings.SEARCH} top arrowoff />
        </div>
      </div>
      <div className={styles.wrapperOnSale}>
        <div className={styles.wrapperHead}>
          <TextChapter text={strings.ONSALE} />
          <div className={styles.wrapperviev}>
            <div className={styles.viev}>{strings.VIEV}: Grid</div>
            <div className={styles.imgCombined}>
              <img src={combined} alt="" />
            </div>
            <div>
              <Divider />
            </div>
          </div>
        </div>
        <div className={styles.wrapperProducts}>
          <Product addToCart={addToCart} />
        </div>
      </div>
      <div className={styles.wpapperNewListings}>
        <div className={styles.text}>
          <TextChapter text={strings.NEWLISTNING} />
        </div>
        <div className={styles.wrapperPordlist}>
          <Product addToCart={addToCart} />
        </div>
      </div>
      <div className={styles.wrapperNews}>
        <TextChapter text={strings.NEWS} />
        <NewsBox />
      </div>
    </div>
  );
};

export default Content;
