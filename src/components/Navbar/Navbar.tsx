"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { navItems } from "@/lib/navbar";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles["top-row"]}>
        <button
          className={styles["mobile-menu-button"]}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={styles.logo}>
          <div className={styles["logo-icon"]}>
            <ShoppingBag />
          </div>
          <span className={styles["logo-text"]}>LOGO</span>
          <div className={styles["right-icons"]}>
            <button className={styles["icon-button"]} aria-label="Search">
              <Search size={20} />
            </button>
            <button className={styles["icon-button"]} aria-label="Wishlist">
              <Heart size={20} />
            </button>
            <button className={styles["icon-button"]} aria-label="Shopping bag">
              <ShoppingBag size={20} />
            </button>
            <button
              className={`${styles["icon-button"]} ${styles["user-button"]}`}
              aria-label="User account"
            >
              <User size={20} />
            </button>
            <div className={styles["language-selector"]}>
              <span>ENG</span>
              <ChevronDown />
            </div>
          </div>
        </div>
      </div>

      <nav className={styles["bottom-row"]}>
        <ul className={styles["desktop-nav"]}>
          {navItems.map((item) => (
            <Link href={item.href} key={item.id} className={styles["nav-item"]}>
              {item.label}
            </Link>
          ))}
        </ul>
      </nav>

      {isMobileMenuOpen && (
        <div className={styles["mobile-menu-overlay"]}>
          <ul className={styles["mobile-nav"]}>
            {navItems.map((item) => (
              <Link key={item.id} href={item.href} onClick={toggleMobileMenu}>
                {item.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
