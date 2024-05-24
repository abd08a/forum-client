import React from "react";
import Card from "../Card/Card";
import styles from "./CardsWrapper.module.css";

const CardsWrapper = ({ questions }) => {
  return (
    <div className={styles.cardsWrapper}>
      {questions.map((question) => (
        <Card
          id={question.id}
          key={question.id}
          theme={question.theme}
          question={question.question}
          name={question.name}
          createdAt={question.createdAt}
        />
      ))}
    </div>
  );
};

export default CardsWrapper;
