import React, { useState } from "react";
import classnames from "classnames";

import btc from "../img/btc.svg";
import ppc from "../img/ppc.svg";
import etp from "../img/etp.svg";

import styles from "./Coin.module.css";

export const CoinBTC = ({ text }) => {
  const [active, setActive] = useState(false);
  const onClickButton = () => {
    setActive(!active);
  };

  return (
    <div
      onClick={onClickButton}
      className={classnames(styles.wrapper, {
        [styles.wrapperActive]: active === true,
      })}
    >
      <div className={styles.img}>
        <img src={btc} alt="" />
      </div>
      <div className={styles.text}>BTC</div>
    </div>
  );
};

export const CoinPPC = ({ text }) => {
  const [active, setActive] = useState(false);
  const onClickButton = () => {
    setActive(!active);
  };

  return (
    <div
      onClick={onClickButton}
      className={classnames(styles.wrapper, {
        [styles.wrapperActive]: active === true,
      })}
    >
      <div className={styles.img}>
        <img src={ppc} alt="" />
      </div>
      <div className={styles.text}>PPC</div>
    </div>
  );
};

export const CoinETP = ({ text }) => {
  const [active, setActive] = useState(false);
  const onClickButton = () => {
    setActive(!active);
  };

  return (
    <div
      onClick={onClickButton}
      className={classnames(styles.wrapper, {
        [styles.wrapperActive]: active === true,
      })}
    >
      <div className={styles.img}>
        <img src={etp} alt="" />
      </div>
      <div className={styles.text}>ETP</div>
    </div>
  );
};
