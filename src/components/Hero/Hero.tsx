import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles["hero-container"]}>
      <h1 className={styles["hero-title"]}>Discover out products</h1>
      <span className={styles["hero-description"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aut in
        suscipit, a atque consequatur perspiciatis eaque fugit minus reiciendis,
        aliquam magnam beatae blanditiis quod!
      </span>
    </section>
  );
};

export default Hero;
