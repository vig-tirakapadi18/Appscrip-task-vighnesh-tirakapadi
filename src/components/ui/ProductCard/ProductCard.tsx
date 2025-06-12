"use client";

import React, { FC, useState } from "react";
import styles from "./ProductCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { Heart, HeartIcon } from "lucide-react";

interface IProductCardProps {
  title: string;
  image: string;
}

const ProductCard: FC<IProductCardProps> = ({ title, image }) => {
  const [productToWishlist, setProductToWishlist] = useState(false);

  const toggleWishlist = () => setProductToWishlist((prev) => !prev);

  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-image"]}>
        <Image
          src={image}
          alt={title}
          aria-label={title}
          width={50}
          height={50}
          loading="lazy"
          className={styles["card-image"]}
        />
      </div>
      <div className={styles["card-title-section"]}>
        <span className={styles["card-title"]}>{title}</span>
        {!productToWishlist ? (
          <HeartIcon
            size={16}
            onClick={toggleWishlist}
            className={styles.heart}
          />
        ) : (
          <Heart
            color="red"
            size={16}
            onClick={toggleWishlist}
            className={styles.heart}
          />
        )}
      </div>
      <div className={styles["card-subtitle"]}>
        <Link href="/sign-in" className={styles["card-link"]}>
          Sign in
        </Link>{" "}
        or Create an account to see pricing
      </div>
    </div>
  );
};

export default ProductCard;
