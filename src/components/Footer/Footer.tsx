import React from "react";
import styles from "./Footer.module.css";
import { InstagramIcon, LinkedinIcon } from "lucide-react";
import { creditCards, links, quickLinks } from "@/lib/footer";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["top-section"]}>
        <div className={styles["subscribe-box"]}>
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from metta muse.</p>
          <div className={styles["subscribe-form"]}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles["contact-box"]}>
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h4>CURRENCY</h4>
          <p>
            <span role="img" aria-label="USA">
              🇺🇸
            </span>{" "}
            USD
          </p>
          <p className={styles["currency-note"]}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <hr className={styles.separator} />

      <div className={styles["bottom-section"]}>
        <div className={styles["links-box"]}>
          <div>
            <h5>metta muse</h5>
            <ul>
              {links.map((link) => (
                <Link href={link.href} key={link.id} className={styles.links}>
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h5>QUICK LINKS</h5>
            <ul>
              {quickLinks.map((qLink) => (
                <Link href={qLink.href} key={qLink.id} className={styles.links}>
                  {qLink.label}
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles["social-and-payments"]}>
          <div className={styles["social-icons"]}>
            <h5>FOLLOW US</h5>
            <div className={styles["follow-us"]}>
              <InstagramIcon />
              <LinkedinIcon />
            </div>
          </div>
          <div className={styles["payment-methods"]}>
            <h5>metta muse ACCEPTS</h5>
            <div>
              {creditCards.map((card) => (
                <Image
                  width={70}
                  height={70}
                  key={card.id}
                  src={card.img}
                  alt={card.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
