import React, { useContext } from "react";

import ButtonBox from "../../../content/components/ButtonBox";
import LanguageContext from "../../../../../languageContext";

import PopapHead from "../../img/popapHead.svg";
import sum from "../../img/sum.svg";
import hamburgerClose from "../../img/hamburgerClose.svg";
import deleteItem from "../../img/deleteItem.svg";
import arrow from "../../img/arrow.svg";

import styles from "./PopapCart.module.css";

const PopapCart = ({
  onClickCart,
  cart,
  numderitemsInCart,
  setCart,
  setCounterItem,
  counterItem,
}) => {
  const strings = useContext(LanguageContext);

  const sums = (cart || [])
    .map((item) => item.price * item.counterItem)
    .reduce((a, b) => a + b, 0);

  const deletePoducts = (id) => {
    setCart(cart.filter((i) => i.id !== id));
  };

  const deleteProductItems = () => {
    setCart([]);
  };

  const onClickCounterPlus = (id) => {
    (cart || []).map((item) => {
      if (item.id === id) {
        setCounterItem(++item.counterItem);
      }
      return item;
    });
  };

  const onClickCounterMinus = (id) => {
    (cart || []).map((item) => {
      if (item.id === id) {
        setCounterItem(--item.counterItem);
      }
      return item;
    });
  };

  const listCart = (cart || []).map((item, index) => (
    <div key={index} className={styles.wrapperItem}>
      <div className={styles.boximg}>
        {item.img}
        <img src={deleteItem} alt="" onClick={() => deletePoducts(item.id)} style={{cursor: "pointer"}} />
      </div>
      <div className={styles.nameitem}>{item.name}</div>
      <div>
        <div className={styles.counterItem}>
          <img
            src={arrow}
            alt=""
            onClick={() => onClickCounterMinus(item.id)}
            style={{ transform: "rotate(90deg)", marginRight: "5px",  cursor: "pointer"  }}
          />
          {item.counterItem}
          <img
            src={arrow}
            alt=""
            onClick={() => onClickCounterPlus(item.id)}
            style={{ transform: "rotate(270deg)", marginLeft: "5px", cursor: "pointer" }}
          />
        </div>
        <div className={styles.priceitem}>${item.price}</div>
      </div>
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
            <img src={hamburgerClose} className={styles.closePopap} alt="" onClick={onClickCart} />
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
              <div className={styles.sumText}>${sums}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopapCart;
