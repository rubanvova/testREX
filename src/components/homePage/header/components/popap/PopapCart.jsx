import React, { useContext, UseState, useState } from "react";

import ButtonBox from "../../../content/components/ButtonBox";
import LanguageContext from "../../../../../languageContext";

import PopapHead from "../../img/popapHead.svg";
import sum from "../../img/sum.svg";
import hamburgerClose from "../../img/hamburgerClose.svg";

import styles from "./PopapCart.module.css";

const PopapCart = ({ onClickCart, cart, numderitemsInCart, setCart }) => {
  const strings = useContext(LanguageContext);

  const sum = cart.map((item) => item.price).reduce((a, b) => a + b, 0);
  console.log(sum);
  const deleteProductItems = () => {
    setCart([]);
  };

  const listCart = cart.map((item) => (
    <div className={styles.wrapperItem}>
      <div className={styles.boximg}>{item.tmg}</div>
      <div className={styles.nameitem}>{item.name}</div>
      <div className={styles.priceitem}>${item.price}</div>
    </div>
  ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.popapBox}>
        <img src={PopapHead} alt="" />
        <div className={styles.container}>
          <div className={styles.popapHead}>
            <div className={styles.headText}>
              {strings.BEFORE}
              {numderitemsInCart}
              {strings.AFTER}
            </div>
            <img src={hamburgerClose} alt="" onClick={onClickCart} />
          </div>
          <div className={styles.popapContent}>{listCart}</div>
          <div className={styles.popapFooter}>
            <div className={styles.button}>
              <div>
                <ButtonBox
                  small
                  sizeWidth="83px"
                  arrowoff
                  text={strings.CONTINUE}
                />
              </div>
              <div onClick={deleteProductItems}>
                <ButtonBox
                  small
                  sizeWidth="83px"
                  arrowoff
                  text={strings.REMOVEALL}
                />
              </div>
            </div>

            <div className={styles.sum}>
              <img src={sum} alt="" />
              <div className={styles.sumText}>${sum}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopapCart;
