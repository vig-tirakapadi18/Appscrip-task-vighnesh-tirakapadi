"use client";

import React, { useEffect, useState } from "react";
import FilterAndSort from "./FilterAndSort/FilterAndSort";
import styles from "./ProductListing.module.css";
import FilterOptions from "./FilterOptions/FilterOptions";
import ProductCard from "../ui/ProductCard/ProductCard";

interface IProduct {
  id: number;
  price: number;
  title: string;
  image: string;
}

export const ProductListing = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const handleToggleShowFilter = () => setShowFilter((prev) => !prev);

  useEffect(() => {
    (async () => {
      await fetch("https://fakestoreapi.in/api/products")
        .then((res) => res.json())
        .then((res) => setProducts(res.products));
    })();
  }, []);

  return (
    <main>
      <FilterAndSort
        showFilter={showFilter}
        onToggleFilter={handleToggleShowFilter}
      />
      <section className={styles["product-listing"]}>
        {!showFilter && (
          <div className={styles["desktop-filters"]}>
            <FilterOptions />
          </div>
        )}
        <div className={styles["products"]}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
