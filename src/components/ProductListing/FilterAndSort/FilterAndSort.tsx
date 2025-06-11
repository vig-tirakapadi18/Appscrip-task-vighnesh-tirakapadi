"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./FilterAndSort.module.css";

const FilterAndSort = () => {
  const [showFilter, setShowFilter] = useState(false);

  const handleToggleShowFilter = () => setShowFilter((prev) => !prev);

  return (
    <section className={styles.container}>
      <div className={styles["mobile-view"]}>
        <button className={styles.filter}>Filter</button>
        <button className={styles.sort}>
          Recommended <ChevronDown size={20} />
        </button>
      </div>

      <div className={styles["desktop-view"]}>
        <div className={styles["right-section"]}>
          <span>3425 ITEMS</span>
          {showFilter ? (
            <button onClick={handleToggleShowFilter}>
              <ChevronRight />
              SHOW FILTER
            </button>
          ) : (
            <button onClick={handleToggleShowFilter}>
              <ChevronLeft />
              HIDE FILTER
            </button>
          )}
        </div>
        <button className={styles.sort}>
          Recommended <ChevronDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default FilterAndSort;
