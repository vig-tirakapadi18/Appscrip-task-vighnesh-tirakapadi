"use client";

import React, { useState } from "react";
import FilterAndSort from "./FilterAndSort/FilterAndSort";
import styles from "./ProductListing.module.css";
import FilterOptions from "./FilterOptions/FilterOptions";

export const ProductListing = () => {
  const [showFilter, setShowFilter] = useState(false);

  const handleToggleShowFilter = () => setShowFilter((prev) => !prev);
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
        <div className={styles["products"]}>PRODUCTS</div>
      </section>
    </main>
  );
};
