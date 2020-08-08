import React from "react";

import border from "../img/border.svg";

import styles from "./Divider.module.css";

const Divider = ({ padding, horizontal }) => {
  const rotate = horizontal ? "rotate(90deg)" : "rotate(0deg)";

  return (
    <div
      className={styles.containerBorder}
      style={{ padding: padding, transform: rotate, color: "#C4C4C4" }}
    >
      <img src={border} alt="" />
    </div>
  );
};

export default Divider;
