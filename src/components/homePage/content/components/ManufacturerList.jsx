import React from "react";

import ButtonBox from "./ButtonBox";

import styles from "./ManufacturerList.module.css";

const ManufacturerList = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.boxone}>
        <ButtonBox small sizeWidth="98px" arrowoff top text="AMD" />
        <ButtonBox
          small
          sizeWidth="98px"
          arrowoff
          top
          text="Boundary Electric"
        />
      </div>
      <div className={styles.boxtwo}>
        <ButtonBox small sizeWidth="98px" arrowoff top text="Pandamoner" />
        <ButtonBox small sizeWidth="98px" arrowoff top text="Nvidia" />
      </div>
    </div>
  );
};

export default ManufacturerList;
