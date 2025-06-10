import React from "react";
import styles from "./OfferRibbon.module.css";
import { ShoppingBag } from "lucide-react";

const OfferRibbon = () => {
  return (
    <div className={styles["offer-ribbon"]}>
      <span className={styles["offer-ribbon-text"]}>
        <ShoppingBag size={14} />
        Lorem ipsum
      </span>
      <span className={`${styles["offer-ribbon-text"]} ${styles.hidden}`}>
        <ShoppingBag size={14} />
        Lorem ipsum
      </span>
      <span className={`${styles["offer-ribbon-text"]} ${styles.hidden}`}>
        <ShoppingBag size={14} />
        Lorem ipsum
      </span>
    </div>
  );
};

export default OfferRibbon;
