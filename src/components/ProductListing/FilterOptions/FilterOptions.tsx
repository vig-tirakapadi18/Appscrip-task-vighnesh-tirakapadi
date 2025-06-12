import React, { useState } from "react";
import styles from "./FilterOptions.module.css";
import Filters from "./Filters/Filters";

const FilterOptions = () => {
  const [isCustomizable, setIsCustomizable] = useState(false);

  return (
    <aside>
      <div className={styles.customizable}>
        <input
          type="checkbox"
          checked={isCustomizable}
          onChange={() => setIsCustomizable(!isCustomizable)}
        />
        <label>CUSTOMIZABLE</label>
      </div>

      <div className={styles.filters}>
        <Filters />
      </div>
    </aside>
  );
};

export default FilterOptions;
