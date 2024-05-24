import React from "react";
import styles from "./AnswerCard.module.css";
import Link from "next/link";

const AnswerCard = ({ id, answer, name, createdAt }) => {
  return (
    <Link href={`/question/${id}`} className={styles.wrapper}>
      <div className={styles.infoWrapper}>
        <h3>{answer}</h3>
        <h6>{name}</h6>
        <h4>{createdAt}</h4>
      </div>
    </Link>
  );
};

export default AnswerCard;
