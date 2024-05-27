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
//           // name={answer.name}
//           createdAt={answer.createdAt}
//         />
//       ))}
//     </div>
//   );
// };

// export default CardsWrapper;

// ========================================================================
// import React from "react";
// import styles from "./CardsWrapper.module.css";
// import Link from "next/link";

// const CardsWrapper = ({ questions, id }) => {
//   return (
//     <div className={styles.cardsWrapper}>
//       {questions.map((question) => (
//         <Link
//           href={`/question/${id}`}
//           key={question.id}
//           className={styles.card}
//         >
//           <h3>{question.theme}</h3>
//           <p>{question.question}</p>
//           <p>Asked by: {question.name}</p>
//           {question.answers && question.answers.length > 0 && (
//             <div className={styles.answers}>
//               <h4>Answers:</h4>
//               <ul>
//                 {question.answers.map((answer) => (
//                   <li key={answer.id}>
//                     {answer.answer}
//                     <p>Answered by: {answer.name}</p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default CardsWrapper;

//=================================================

import React, { useState } from "react";
import styles from "./CardsWrapper.module.css";
import Link from "next/link";

const CardsWrapper = ({ questions }) => {
  const [hoveredQuestionId, setHoveredQuestionId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredQuestionId(id);
  };

  const handleMouseLeave = () => {
    setHoveredQuestionId(null);
  };

  return (
    <div className={styles.cardsWrapper}>
      {questions.map((question) => (
        <div
          key={question.id}
          className={styles.card}
          onMouseEnter={() => handleMouseEnter(question.id)}
          onMouseLeave={handleMouseLeave}
        >
          <Link href={`/answerQuestion/${question.id}`} className={styles.link}>
            <h3>{question.theme}</h3>
            <p>{question.question}</p>
            <p>Asked by: {question.name}</p>
          </Link>
          {question.answers && question.answers.length > 0 && (
            <div className={styles.answers}>
              <h4>Answers:</h4>
              <ul>
                {question.answers.map((answer) => (
                  <li key={answer.id}>
                    {answer.answer}
                    <p>Answered by: {answer.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {hoveredQuestionId === question.id && (
            <div className={styles.infoBox}>give answer</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardsWrapper;
