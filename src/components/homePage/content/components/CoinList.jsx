import React from "react";

import { CoinBTC, CoinPPC, CoinETP } from "./Coin";

import styles from "./CoinList.module.css";

const CoinList = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.boxone}>
        <CoinBTC />
        <CoinPPC />
        <CoinETP />
      </div>
      <div className={styles.boxtwo}>
        <CoinBTC />
        <CoinPPC />
        <CoinETP />
      </div>
    </div>
  );
};

export default CoinList;
