import React from "react";
import styles from "./Card.module.css";
import Link from "next/link";

const Card = ({ id, theme, question, name, createdAt }) => {
  return (
    <Link href={`/questions/${id}`} className={styles.wrapper}>
      <div className={styles.infoWrapper}>
        <h2>{theme}</h2>
        <h3>{question}</h3>
        <h6>{name}</h6>
        <h4>{createdAt}</h4>
      </div>
    </Link>
  );
};

export default Card;
