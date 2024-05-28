import React from "react";
import styles from "./Header.module.css";

const Header = ({ logo, links }) => {
  return (
    <div className={styles.wrapper}>
      <a href="http://localhost:3001/" className={styles.logo}>
        {logo}
      </a>

      <nav>
        <ul className={styles.links}>
          {links.map((link) => {
            return (
              <a href={link.href} key={link.id}>
                {link.title}
              </a>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
