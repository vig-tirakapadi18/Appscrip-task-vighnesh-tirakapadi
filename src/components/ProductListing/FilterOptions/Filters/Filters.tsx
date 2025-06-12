"use client";

import React, { useState } from "react";
import { filters } from "@/lib/filters";
import styles from "./Filters.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const Filters = () => {
  const [openFilterDropdownId, setOpenFilterDropdownId] = useState<
    null | string
  >(null);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string[]>
  >({});

  const handleUnselectAll = (filterId: string) => {
    setSelectedOptions((prev) => {
      const newState = { ...prev };
      delete newState[filterId];
      return newState;
    });
  };

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
              <div className={styles["selection-buttons"]}>
                <button
                  className={styles["unselect-button"]}
                  onClick={() => handleUnselectAll(filter.id)}
                >
                  Unselect all
                </button>
              </div>
              {filter.options.map((filterOption) => (
                <label
                  key={filterOption.id}
                  className={styles["filter-sub-category"]}
                >
                  <input
                    type="checkbox"
                    checked={(selectedOptions[filter.id] || []).includes(
                      filterOption.id
                    )}
                    onChange={() => {
                      setSelectedOptions((prev) => {
                        const currentSelected = prev[filter.id] || [];
                        const newSelected = currentSelected.includes(
                          filterOption.id
                        )
                          ? currentSelected.filter(
                              (id) => id !== filterOption.id
                            )
                          : [...currentSelected, filterOption.id];

                        return {
                          ...prev,
                          [filter.id]: newSelected,
                        };
                      });
                    }}
                  />
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
