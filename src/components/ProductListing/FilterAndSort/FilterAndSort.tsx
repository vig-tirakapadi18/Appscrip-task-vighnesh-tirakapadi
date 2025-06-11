import React, { FC } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./FilterAndSort.module.css";

interface IFilterAndSort {
  showFilter: boolean;
  onToggleFilter: () => void;
}

const FilterAndSort: FC<IFilterAndSort> = ({ showFilter, onToggleFilter }) => {
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
            <button onClick={onToggleFilter}>
              <ChevronRight />
              SHOW FILTER
            </button>
          ) : (
            <button onClick={onToggleFilter}>
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
