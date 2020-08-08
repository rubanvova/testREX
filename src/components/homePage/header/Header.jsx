import React, { useState, useContext } from "react";

import logoREX from "./img/logoREX.svg";
import planetEarth from "./img/planetEarth.svg";
import menu from "./img/menu.svg";
import user from "./img/user.svg";
import arrow from "./img/arrow.svg";
import balance from "./img/balance.svg";
import notification from "./img/notification.svg";
import cartimg from "./img/cart.svg";
import controls from "./img/controls.svg";

import Divider from "./components/Divider";
import Menu from "./components/Menu";
import CarouselMenu from "./components/CarouselMenu";
import PopapCart from "./components/popap/PopapCart";
import LanguageContext from "../../../languageContext";

import styles from "./Header.module.css";

const Header = ({ onClickLeanguage, lang, cart, setCart }) => {
  const strings = useContext(LanguageContext);
  const [showMemu, setshowMemu] = useState(false);
  const [showCart, setshowCart] = useState(false);

  const numderitemsInCart = cart.length;

  const onClickMenu = () => {
    setshowMemu(!showMemu);
  };

  const onClickCart = () => {
    setshowCart(!showCart);
  };

  return (
    <>
      <div className={styles.wrapperHeader}>
        <img src={controls} alt="" className={styles.containerControls} />
        <div className={styles.boxOne}>
          <div className={styles.containerLogo}>
            <img src={logoREX} className={styles.logoREX} alt="" />
          </div>
          <div className={styles.containerLenguage}>
            <img src={planetEarth} alt="" />
            <div className={styles.language} onClick={onClickLeanguage}>
              {lang}
            </div>
          </div>
        </div>
        <div className={styles.boxTwo} onClick={onClickMenu}>
          <div className={styles.containerMenu}>
            <img src={menu} alt="" />
          </div>
        </div>
        <div className={styles.boxThree}>
          <div className={styles.containerMyAccount}>
            <img src={user} alt="" className={styles.imgUser} />
            <div className={styles.MyAccount}>{strings.MYACCOUNT}</div>
            <img src={arrow} alt="" className={styles.imgArrow} />
          </div>
          <div className={styles.divider}>
            <Divider padding="3px 16.1px 0px 15px" />
          </div>
          <div className={styles.containerBalance}>
            <img src={balance} alt="" />
          </div>
          <div className={styles.divider}>
            <Divider
              padding="3px 14px 0px 15.69px"
              className={styles.divider}
            />
          </div>
          <div className={styles.containerNotification}>
            <img src={notification} alt="" />
          </div>
          <div className={styles.divider}>
            <Divider padding="3px 14px 0px 14px" className={styles.divider} />
          </div>
          <div className={styles.containerCart}>
            <div className={styles.textCart}>{numderitemsInCart}</div>
            <img
              src={cartimg}
              className={styles.cart}
              onClick={onClickCart}
              alt=""
            />
          </div>
          {showCart && (
            <PopapCart
              onClickCart={onClickCart}
              cart={cart}
              setCart={setCart}
              numderitemsInCart={numderitemsInCart}
            />
          )}
        </div>
      </div>
      <div className={styles.carouselMenu}>
        <CarouselMenu />
      </div>

      {showMemu && <Menu onClickMenu={onClickMenu} />}
    </>
  );
};

export default Header;
