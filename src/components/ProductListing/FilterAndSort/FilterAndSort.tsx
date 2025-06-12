import React, { FC, useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Check } from "lucide-react";
import styles from "./FilterAndSort.module.css";
import { sortOptions } from "@/lib/sortOptions";

interface IFilterAndSort {
  showFilter: boolean;
  onToggleFilter: () => void;
}

const FilterAndSort: FC<IFilterAndSort> = ({ showFilter, onToggleFilter }) => {
  const [selectedSort, setSelectedSort] = useState("recommended");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSortSelect = (value: string) => {
    setSelectedSort(value);
    setIsDropdownOpen(false);
  };

  const getSelectedLabel = () => {
    return (
      sortOptions.find((option) => option.value === selectedSort)?.label ||
      "RECOMMENDED"
    );
  };

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

        <div className={styles["sort-dropdown"]} ref={dropdownRef}>
          <button
            className={styles.sort}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {getSelectedLabel()} <ChevronDown size={20} />
          </button>

          {isDropdownOpen && (
            <div className={styles["dropdown-menu"]}>
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  className={`${styles["dropdown-item"]} ${
                    selectedSort === option.value ? styles.selected : ""
                  }`}
                  onClick={() => handleSortSelect(option.value)}
                >
                  {selectedSort === option.value && <Check size={16} />}
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FilterAndSort;
