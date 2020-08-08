import React, { useContext } from "react";

import Divider from "./Divider";
import LanguageContext from "../../../../languageContext";

import hamburgerClose from "../img/hamburgerClose.svg";

import styles from "./Menu.module.css";

const Menu = ({ onClickMenu }) => {
  const strings = useContext(LanguageContext);
  const menuItems = [
    { name: `${strings.HOME}` },
    { name: `${strings.SELL}` },
    { name: `${strings.HOST}` },
    { name: `${strings.ABOUTAS}` },
    { name: `${strings.SUPPORT}` },
  ];
  return (
    <div className={styles.wrraperMenu}>
      <div className={styles.hamburgerClose} onClick={onClickMenu}>
        <img src={hamburgerClose} alt="" />
      </div>
      {(menuItems || []).map((item) => (
        <div className={styles.containerItemsMenu}>
          <div className={styles.itemsMenu}>{item.name}</div>
          <Divider horizontal padding="0px 38px 38px 0px" />
        </div>
      ))}
    </div>
  );
};

export default Menu;
