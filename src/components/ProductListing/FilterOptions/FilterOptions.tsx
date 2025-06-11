import React from "react";
import styles from "./FilterOptions.module.css";
import Filters from "./Filters/Filters";

const FilterOptions = () => {
  return (
    <aside>
      <div className={styles.customizable}>
        <input type="checkbox" />
        <label>CUSTOMIZABLE</label>
      </div>

      <div className={styles.filters}>
        <Filters />
      </div>
    </aside>
  );
};

export default FilterOptions;
