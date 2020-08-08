import React from "react";

import group from "../img/group.png";

import styles from "./NewsBox.module.css";

const NewsBox = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={group} alt="" />
      </div>
    </div>
  );
};

export default NewsBox;
