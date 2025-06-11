import React, { useState } from "react";
import { filters } from "@/lib/filters";
import styles from "./Filters.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const Filters = () => {
  const [openFilterDropdownId, setOpenFilterDropdownId] = useState<
    null | string
  >(null);

  return (
    <div className={styles["filters-container"]}>
      {filters.map((filter) => (
        <div key={filter.id} className={styles.filter}>
          <div
            className={styles["filter-label"]}
            onClick={() =>
              setOpenFilterDropdownId(
                openFilterDropdownId === filter.id ? null : filter.id
              )
            }
          >
            <span>{filter.label}</span>
            {openFilterDropdownId === filter.id ? (
              <ChevronUp />
            ) : (
              <ChevronDown />
            )}
          </div>
          <span>All</span>

          {openFilterDropdownId === filter.id && (
            <div className={styles["filter-dropdown"]}>
              <button className={styles["unselect-button"]}>
                Unselect all
              </button>
              {filter.options.map((filterOption) => (
                <label
                  key={filterOption.id}
                  className={styles["filter-sub-category"]}
                >
                  <input type="checkbox" />
                  {filterOption.label}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filters;
