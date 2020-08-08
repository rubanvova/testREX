import React, { useState } from "react";
import classnames from "classnames";

import arrow from "../img/arrow.svg";

import styles from "./ButtonBox.module.css";

const ButtonBox = ({ text, small, arrowoff, top, bottom, sizeWidth }) => {
  const [active, setActive] = useState(false);
  const onClickButton = () => {
    setActive(!active);
  };

  const width = small ? "98px" : "212px";
  const alignText = small ? "center" : "";
  const paddingleft = small ? "" : "11px";
  const fontsize = small ? "11px" : "12px";
  const displayArrow = arrowoff ? "none" : "";
  const margimtop = top ? "15px" : "";
  const marginbottom = bottom ? "15px" : "";

  return (
    <div
      style={{
        width: width && sizeWidth,
        textAlign: alignText,
        marginBottom: marginbottom,
        marginTop: margimtop,
      }}
      onClick={onClickButton}
      className={classnames(styles.wrapper, {
        [styles.wrapperActive]: active === true,
      })}
    >
      <div
        style={{ paddingLeft: paddingleft, fontSize: fontsize }}
        className={styles.text}
      >
        {text}
      </div>
      <div
        style={{ display: displayArrow }}
        className={classnames(styles.arrow, {
          [styles.arrowActive]: active === true,
        })}
      >
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default ButtonBox;
