// import React from "react";
// import Card from "../Card/Card";
// import AnswerCard from "../AnswerCard/AnswerCard";
// import styles from "./CardsWrapper.module.css";

// const CardsWrapper = ({ questions, answers }) => {
//   return (
//     <div className={styles.cardsWrapper}>
//       {questions.map((question) => (
//         <Card
//           id={question.id}
//           key={question.id}
//           theme={question.theme}
//           question={question.question}
//           name={question.name}
//           createdAt={question.createdAt}
//         />
//       ))}
//       {answers.map((answer) => (
//         <AnswerCard
//           id={answer.id}
//           key={answer.id}
//           answer={answer.answer}
//           name={answer.name}
//           createdAt={answer.createdAt}
//         />
//       ))}
//     </div>
//   );
// };

// export default CardsWrapper;

// CardsWrapper.js
import React from "react";
import styles from "./CardsWrapper.module.css";

const CardsWrapper = ({ questions }) => {
  return (
    <div className={styles.cardsWrapper}>
      {questions.map((question) => (
        <div key={question.id} className={styles.card}>
          <h3>{question.theme}</h3>
          <p>{question.question}</p>
          <p>Asked by: {question.name}</p>
          {question.answers && question.answers.length > 0 && (
            <div className={styles.answers}>
              <h4>Answers:</h4>
              <ul>
                {question.answers.map((answer) => (
                  <li key={answer.id}>{answer.answer}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardsWrapper;
